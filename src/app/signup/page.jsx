"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock, FaBookOpen } from "react-icons/fa";

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    setLoading(true);

    // ফিউচার কানেক্টিভিটির জন্য সিমুলেশন
    setTimeout(() => {
      console.log("Form Data:", formData);
      setLoading(false);
      // সফল হলে ডিরেক্ট লগইন পেজে পাঠানোর লজিক
      // router.push("/login"); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFECC0]/30 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-[#FFC09F]/20">
        
        {/* Header Section */}
        <div className="bg-[#B36281] p-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <FaBookOpen className="text-3xl" />
          </div>
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-pink-100 mt-2">Join our BookShelf community</p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 border border-red-100 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B36281] focus:ring-1 focus:ring-[#B36281] transition text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B36281] focus:ring-1 focus:ring-[#B36281] transition text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B36281] focus:ring-1 focus:ring-[#B36281] transition text-gray-700"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#B36281] focus:ring-1 focus:ring-[#B36281] transition text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B36281] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#EE9B9B] transition-all shadow-lg hover:shadow-[#EE9B9B]/30 disabled:opacity-70 active:scale-95"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Bottom Links */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-[#B36281] font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;