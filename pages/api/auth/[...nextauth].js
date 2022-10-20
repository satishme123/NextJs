// import NextAuth from 'next-auth';
// import GithubProviders from 'next-auth/providers/github'

// export default NextAuth({
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET
//     })
//   ],
// })


import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'

  export const authOptions = {
    providers:[
        GithubProvider({
            clientId:"57315389575f1a563bc2",
            clientSecret:"3a4ee760beed519304998ed3b58550ecb0f6bf7d"

        })
    ]
 
};

 export default NextAuth(authOptions)
