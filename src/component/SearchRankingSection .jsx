import SearchRanking from "../assets/searchRanking/searchRanking.png";
export default function SearchRankingSection() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-center"
      style={{
        backgroundImage: `url(${SearchRanking})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-md px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold leading-tight">
          Master Your <br /> Search Rankings
        </h1>
        <p className="mb-12 text-[#9893B8]">
          Get started with Wope and take control of your rankings quickly and
          effortlessly, ensuring you stay ahead of the competition!
        </p>
        <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 font-semibold text-white transition duration-300 hover:scale-105">
          Get Template
        </button>
      </div>
    </div>
  );
}
