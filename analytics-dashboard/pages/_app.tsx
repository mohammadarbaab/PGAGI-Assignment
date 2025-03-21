  // // // pages/_app.tsx
  // // import { AppProps } from 'next/app';
  // // import Layout from './components/Layout';
  // // import '../styles/globals.css'; // Optional: Add your global styles here

  // // function MyApp({ Component, pageProps }: AppProps) {
  // //   return (
  // //     <Layout>
  // //       <Component {...pageProps} />
  // //     </Layout>
  // //   );
  // // }

  // // export default MyApp;

  // // pages/_app.tsx
  // import { AppProps } from 'next/app';
  // import { Provider } from 'react-redux';
  // import Layout from './components/Layout';
  // import '../styles/globals.css'; // Optional: Add your global styles here
  // import { store } from "../store/store";

  // function MyApp({ Component, pageProps }: AppProps) {
  //   return (
  //     // Provide the store to the entire app
  //      <Provider store={store}>
  //       <Layout>
  //         <Component {...pageProps} />
  //       </Layout>
  //      </Provider>
  //   );
  // }

  // export default MyApp;

  // import { AppProps } from "next/app";
  // import { Provider } from "react-redux";
  // // import { SessionProvider } from 'next-auth/react';  // Import SessionProvider
  // import Layout from "./components/Layout";
  // import "../styles/globals.css"; // Optional: Add your global styles here
  // import { store } from "../store/store";
  // import { SessionProvider } from "next-auth/react";

  // function MyApp({ Component, pageProps }: AppProps) {
  //   return (
  //     // Provide the store and session provider to the entire app
  //     <>
  //     <SessionProvider session={session}>
  //       <Provider store={store}>
  //         <Layout>
  //           <Component {...pageProps} />
  //         </Layout>
  //       </Provider>
  //     </SessionProvider></>
  //   );
  // }

  // export default MyApp;



  import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";  
import Layout from "./components/Layout";
import "../styles/globals.css"; 
import { store } from "../store/store";  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
