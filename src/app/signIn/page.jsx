"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    const { data, error } = await authClient.signIn.email({ email, password });

    if (error) {
      alert(error.message || "Invalid credentials!"); 
    } else {
      router.push("/"); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-[#B36281] mb-6">User Login</h1>
      <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-4 border p-8 rounded-xl shadow-lg">
        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
        <button type="submit" className="btn bg-[#EE9B9B] text-white">Login</button>
        <div className="divider text-gray-400">OR</div>
        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline gap-2">
          <FcGoogle /> Login with Google
        </button>
        <p className="text-center mt-4">Don't have an account? <Link href="/signup" className="text-blue-500 underline">Register</Link></p>
      </form>
    </div>
  );
}