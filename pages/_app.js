import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
