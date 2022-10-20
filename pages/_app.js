import Navbar from '../component/Navbar'
import '../styles/globals.css'
import '../component/Navbar.css'
import { SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return(
   <>
   <SessionProvider session={pageProps.session}>
   <Navbar/>
  <Component {...pageProps} />
  </SessionProvider>

  </>
  )
}

export default MyApp
