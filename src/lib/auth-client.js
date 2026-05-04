import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({

    baseURL: "https://ph-assignment8.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = authClient;