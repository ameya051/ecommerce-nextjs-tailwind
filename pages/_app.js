import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </StoreProvider>
  );
}
