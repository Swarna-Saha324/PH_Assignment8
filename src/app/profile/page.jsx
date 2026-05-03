"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }
    }, [session, isPending, router]);

    if (isPending) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
            <h1 className="text-2xl font-bold text-[#B36281] mb-6 text-center">My Profile</h1>
            
            <div className="flex flex-col items-center gap-4">
              <Image 
    src={session?.user?.image || "/default-avatar.png"} 
    alt="Profile" 
    width={150} 
    height={150} 
    className="w-32 h-32 rounded-full object-cover border-4 border-[#FFECC0]"
/>
                <div className="text-center">
                    <p className="text-gray-400 text-sm uppercase font-bold">Name</p>
                    <p className="text-xl font-semibold text-gray-800">{session?.user?.name}</p>
                </div>
                <div className="text-center">
                    <p className="text-gray-400 text-sm uppercase font-bold">Email</p>
                    <p className="text-gray-600">{session?.user?.email}</p>
                </div>

                <Link href="/profile/update" className="w-full mt-4">
                    <button className="w-full bg-[#B36281] text-white py-3 rounded-xl font-bold hover:bg-[#EE9B9B] transition">
                        Update Information
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;