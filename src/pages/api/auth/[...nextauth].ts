import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import User from '../../../models/User'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    })
  ],
  events: {
    async createUser(a) {
      console.log(a.email)
    },
    async updateUser(a) {
      console.log(a)

    },
    /*  async signIn(message) {  },
     async signOut(message) {  },
     async linkAccount(message) {  },
     async session(message) {  },
     async error(message) {  } */
  },
  callbacks: {
    async signIn(user, account, { verified_email, ...profile }) {
      const hasUser = await User.find({ email: user.email }).countDocuments()

      if (verified_email && hasUser == 0) {
        const userAdmin = await User.find({ isAdmin: true }).countDocuments()
        if (userAdmin == 0) {
          await User.create({ isAdmin: true, ...profile, ...user })
        } else {
          await User.create({ ...profile, ...user })
        }
        return true
      } else if (verified_email && hasUser == 1) {
        return true
      }
      return false
    },
    async session(session, { email, name }) {
      const user = await User.findOne({ email, name })
      return { ...session, user: { ...session.user, ...user._doc } }
    },
  },

  // A database is optional, but required to persist accounts in a database
  /* database: process.env.DATABASE_URI, */
})