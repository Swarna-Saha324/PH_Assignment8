export const dynamic = "force-dynamic";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TopBooks from "@/components/TopBooks";
import Image from "next/image";
import CategoryExplorer from "@/components/CategoryExplorer";
import OurMission from "@/components/OurMission";

export default function Home() {
  return (
    <div>
     <Banner
     
      />
      <Marquee />
      <CategoryExplorer />
      <TopBooks />
      <OurMission />
    </div>
   
  );
}
