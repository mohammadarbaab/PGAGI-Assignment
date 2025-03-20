// // pages/_app.tsx
// import { AppProps } from 'next/app';
// import Layout from './components/Layout';
// import '../styles/globals.css'; // Optional: Add your global styles here

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;


// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import '../styles/globals.css'; // Optional: Add your global styles here
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Provide the store to the entire app
     <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </Provider>
  );
}

export default MyApp;
