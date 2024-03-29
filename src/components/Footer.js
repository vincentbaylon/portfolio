import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleGithub = () => {
    openInNewTab("https://github.com/vincentbaylon");
  };

  const handleLinkedIn = () => {
    openInNewTab("https://www.linkedin.com/in/vincentbaylon/");
  };

  const handleTwitter = () => {
    openInNewTab("https://twitter.com/codingwithVince");
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 font-light bg-slate-100 text-slate-700">
      <div className="flex flex-row items-center justify-center visible mb-5 space-x-5 md:invisible">
        <div className="cursor-pointer" onClick={handleGithub}>
          <FiGithub
            className="transition-all hover:scale-110 hover:text-rose-500"
            size={20}
          />
        </div>
        <div className="cursor-pointer" onClick={handleLinkedIn}>
          <FiLinkedin
            className="transition-all hover:scale-110 hover:text-rose-500"
            size={20}
          />
        </div>
        <div className="cursor-pointer" onClick={handleTwitter}>
          <FiTwitter
            className="transition-all hover:scale-110 hover:text-rose-500"
            size={20}
          />
        </div>
        <div className="cursor-pointer">
          <a href="mailto:vincentbaylon@gmail.com">
            <HiOutlineMail
              className="transition-all hover:scale-110 hover:text-rose-500"
              size={20}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full md:max-w-6xl">
        <h1 className="text-md md:text-lg">
          Designed and coded by Vincent Baylon © 2022{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
