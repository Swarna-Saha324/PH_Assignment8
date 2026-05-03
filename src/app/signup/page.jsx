"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, password } = Object.fromEntries(formData);

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      
    });

    if (error) {
      alert(error.message || "Registration failed!"); // Show error
    } else {
      router.push("/signIn"); // সফল হলে লগইন পেজে নেভিগেট
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-[#B36281] mb-6">User Registration</h1>
      <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-4 border p-8 rounded-xl shadow-lg">
        <input name="name" placeholder="Name" className="input input-bordered" required />
        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
        
        <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
        <button type="submit" className="btn bg-[#EE9B9B] text-white">Register</button>
        <p className="text-center">Already have an account? <Link href="/signIn" className="text-blue-500 underline">Login</Link></p>
      </form>
    </div>
  );
}