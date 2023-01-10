import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { AppState } from "../../utils/Store";

const ProductScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = AppState();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => {
    return x.slug === slug;
  });

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const handleAddToCart = () => {
    const existItem = state.cart.cartItems.find((item) => {
      return item.slug === product.slug;
    });
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      toast("Product is out of stock", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: 'error'
      });
    } else {
      dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    }
  };

  return (
    <Layout title={product.name}>
      <div className="py-2 mx-6">
        <Link href="/">Back to home</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 mx-6">
        <div className="image-container">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className="image"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-4xl mb-2">{product.name}</h1>
            </li>
            <li>
              <p className="text-2xl mb-2">{product.brand}</p>
            </li>
            <li>
              <p className="text-lg mb-2">{product.category}</p>
            </li>
            <li>
              {product.rating} stars, {product.numReviews} reviews
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price:</div>
              <div>₹ {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status:</div>
              <div>
                {product.countInStock > 0 ? "In Stock" : "Unavailiable"}
              </div>
            </div>
            <button className="primary-button w-full" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
