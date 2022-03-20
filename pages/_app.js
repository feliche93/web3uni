import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
