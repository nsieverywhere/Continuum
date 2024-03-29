import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // next auth takes a parameter which is a providers object
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),


    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // })
  ],
  
  secret: process.env.NEXTAUTH_SECRET,

})