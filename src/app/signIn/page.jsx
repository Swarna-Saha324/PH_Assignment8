"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../../lib/auth-client";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    
    
    const formData = new FormData(e.target);
    const forminfo = Object.fromEntries(formData.entries());
    
    console.log("Form Data:", forminfo);

    // Better Auth API Call
    const { data, error } = await authClient.signIn.email({
      email: forminfo.email,
      password: forminfo.password,
      rememberMe: true,
      callbackURL: "/"
      
    });

    if (error) {
      console.error("Sign In failed:", error);
      
    } else {
      console.log("Success:", data);
      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="card w-125 bg-white border border-[#FFC09F]/40 shadow-xl p-10">
        
        <h1 className="text-center text-3xl font-bold text-[#B36281] mb-8">Sign In</h1>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
         

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-600">Email</span>
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="john@example.com" 
              className="input input-bordered w-full focus:outline-[#EE9B9B] border-gray-200" 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-600">Password</span>
            </label>
            <input 
              type="password" 
              name="password"
              placeholder="Enter your password" 
              className="input input-bordered w-full focus:outline-[#EE9B9B] border-gray-200" 
              required 
            />
            <label className="label">
              <span className="label-text-alt text-gray-400">
                At least 8 characters with 1 uppercase and 1 number
              </span>
            </label>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-3 mt-4">
            <button 
              type="submit" 
              className="btn flex-1 bg-[#EE9B9B] hover:bg-[#B36281] text-white border-none font-bold"
            >
              <Check className="w-5 h-5" />
              Submit
            </button>

            <button 
              type="reset" 
              className="btn flex-1 bg-[#FFECC0] hover:bg-[#FFC09F] text-[#B36281] border-[#FFC09F] font-bold"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}