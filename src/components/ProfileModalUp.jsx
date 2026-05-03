"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const ProfileModalUp = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await authClient.updateUser({
                image: image,
                name: name,
            });

            if (error) {
                toast.error(error.message);
            } else {
                toast.success("Profile updated successfully!");
                router.push("/profile"); // আপডেট শেষে প্রোফাইল পেজে ফেরত যাবে
                router.refresh();
            }
        } catch (err) {
            toast.error("An error occurred during update.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-lg border border-[#FFC09F]/30">
            <h2 className="text-2xl font-black text-[#B36281] mb-6">Update Profile</h2>
            
            <form onSubmit={handleUpdate} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">New Name</span>
                    </label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full focus:outline-[#EE9B9B]" 
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Profile Image URL</span>
                    </label>
                    <input 
                        type="text" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="input input-bordered w-full focus:outline-[#EE9B9B]" 
                        placeholder="https://image-url.com"
                        required
                    />
                </div>

                <div className="flex gap-3 pt-4">
                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`btn flex-1 bg-[#B36281] text-white border-none hover:bg-[#EE9B9B] ${loading ? 'loading' : ''}`}
                    >
                        {loading ? "Updating..." : "Update Information"}
                    </button>
                    <button 
                        type="button" 
                        onClick={() => router.back()}
                        className="btn bg-gray-100 text-gray-600 border-none hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileModalUp;