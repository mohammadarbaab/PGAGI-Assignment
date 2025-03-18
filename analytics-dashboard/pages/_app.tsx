// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from './components/Layout';
import '../styles/globals.css'; // Optional: Add your global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
