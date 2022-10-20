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
            clientId:process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET

        })
    ]
 
};

 export default NextAuth(authOptions)
