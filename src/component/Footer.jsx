import backgroundImg from "../assets/footer/footerbackground.svg";
import companyLogo from "../assets/footer/logo.svg";
import instaLogo from "../assets/footer/instagram.svg";
import linkdinLogo from "../assets/footer/linkdin.svg";
import xLogo from "../assets/footer/x.svg";

export default function Footer() {
  return (
    <footer
      className="relative px-6 py-20 text-white md:py-16"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        {/* Left Section */}
        <div className="max-w-sm text-sm">
          <img src={companyLogo} alt="Proxima Logo" className="mb-4 h-8" />
          <p className="text-[#9893B8]">
            Proxima is an AI solution that boosts your product’s SEO ranking and
            visibility.
          </p>
          {/* <p className="text-xs mt-4 text-[#9893B8]">
            All copyrights are reserved @proxima pvt ltd
          </p> */}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="Instagram" className="">
            <img src={instaLogo} className="text-xl text-purple-400" />
          </a>
          <a href="#" aria-label="LinkedIn" className="">
            <img src={linkdinLogo} className="text-xl text-purple-400" />
          </a>
          <a href="#" aria-label="X" className="">
            <img src={xLogo} className="text-xl text-purple-400" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        {/* Left Section */}
        <div className="max-w-sm text-sm">
          <p className="mt-4 text-xs text-[#9893B8]">
            All copyrights are reserved @proxima pvt ltd
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 text-xs text-[#9893B8]">
          Made on earth with <span className="text-pink-500">💜</span> human
        </div>
      </div>
    </footer>
  );
}
