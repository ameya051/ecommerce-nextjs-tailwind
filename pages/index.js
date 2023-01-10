import data from "../utils/data";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => {
            return <ProductItem key={product.slug} product={product} />;
          })}
        </div>
      </Layout>
    </>
  );
}
