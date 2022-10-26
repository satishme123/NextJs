import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <div>
   
  <Navbar/>
  <Component {...pageProps} />
  </div> 
  )
}

export default MyApp
