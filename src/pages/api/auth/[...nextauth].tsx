import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { query as q } from 'faunadb';

import { fauna } from '../../../services/faunaDB';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const { email } = user;

        await fauna
          .query(
            q.If(
              q.Not(
                q.Exists(
                  q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(user.email)
                  )
                )
              ),
              q.Create(q.Collection('users'), { data: { email } }),
              q.Get(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            )
          )
          .then((ret) => console.log(ret))
          .catch((err) =>
            console.error(
              'Error: [%s] %s: %s',
              err.name,
              err.message,
              err.errors()[0].description
            )
          );

        return true;
      } catch {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
