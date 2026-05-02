import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-[#B36281] py-3 border-y border-[#FFC09F]">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex gap-20 text-[#FFECC0] font-semibold text-lg">
          <span>📚 New Arrivals: The Silent Patient | Atomic Habits | The Alchemist</span>
          <span>✨ Special Discount on Memberships - Get 20% OFF!</span>
          <span>🔥 Limited Time Offer: Buy 2 Get 1 Free on Mystery Thrillers!</span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;