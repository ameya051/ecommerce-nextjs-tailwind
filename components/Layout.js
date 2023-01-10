import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AppState } from "../utils/Store";

const Layout = ({ title, children }) => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = AppState();
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + "-ChkOut" : "ChkOut"}</title>
        <meta name="description" content="Developed by Ameya Shrivastava" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex h-16 items-center px-4 justify-between shadow-md">
            <Link className="text-lg font-bold" href="/">
              ChkOut
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-slate-800 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => {
                      return a + c.quantity;
                    }, 0)}
                  </span>
                )}
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="flex h-12 justify-center items-center shadow-inner">
          Developed By Ameya Shrivastava
        </footer>
      </div>
    </>
  );
};

export default Layout;
