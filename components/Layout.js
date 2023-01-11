import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AppState } from "../utils/Store";

const Layout = ({ title, children }) => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = AppState();
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => {
        return a + c.quantity;
      }, 0)
    );
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " - ChkOut" : "ChkOut"}</title>
        <meta name="description" content="Developed by Ameya Shrivastava" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header className="sticky top-0 z-30 w-full bg-white">
          <nav className="flex h-20 items-center px-4 justify-between shadow-md">
            <Link className="text-lg font-semibold" href="/">
              ChkOut
            </Link>
            <div>
              <Link className="p-2 hover:font-bold" href="/cart">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-slate-800 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              <Link className="p-2 hover:font-semibold" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-20 justify-center items-center shadow-inner">
          Developed By Ameya Shrivastava
        </footer>
      </div>
    </>
  );
};

export default Layout;
