// // import Link from "next/link"
// // import { useRouter } from "next/router"
// // import styles from '../styles/Home.module.css'

// export default function Home() {

//   // const router = useRouter()

//   // const handleClick=()=>{
//   //   console.log("placing order")
//   //   router.push("/product")
//   //   // router.replace("/product")
//   // }
//   return (
//     <div>
//     <h1>home</h1>
//     {/* <Link href="/blog">
//     <a>
//        Blog
//     </a>
//     </Link>
//     <Link href="/product">
//     <a>
//        Products
//     </a>
//     </Link>
//     <button onClick={handleClick}>PlaceOrder</button> */}
//     </div>
//   )
// }


import styles from '../styles/Home.module.css'
import {useSession,signIn,signOut} from "next-auth/react"


export default function Home() {
  
  const session= useSession()
  console.log('Session',session)
  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }
  return (
    <div className={styles.container}>
    <h1>Welcome  {session?.data?.user?.name}</h1>
   <button onClick={signOut}>SignOut</button>
    </div>
  )
}
