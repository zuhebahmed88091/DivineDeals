import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png"

export default function Hero() {
  return (
    <div className="h-screen bg-hero-gradient flex">
      <div className="flex-1 flex flex-col justify-center pl-[10%] gap-3 leading-tight">
        <h2 className="text-[#090909] text-3xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-6">
            <p className="text-[#171717] text-[3rem] font-bold">new</p>
            <img src={hand_icon} className="w-[15%]" alt="hand-icon" />
          </div>
          <p className="text-[#171717] text-[3rem] font-bold">collections</p>
          <p className="text-[#171717] text-[3rem] font-bold">for everyone</p>
        </div>
        <div className="flex justify-center items-center gap-2 w-[19rem] h-[5rem] rounded-full mt-7 bg-[#ff4141] text-white text-[22px] font-medium">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="flex-1 max-w-[30%] flex items-center justify-center">
        <img src={hero_image} className="hidden md:block" alt="hero" />
      </div>
    </div>
  );
}
