import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function BottomFixedContainer() {
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
    <>
      <div className="fixed invisible pb-1 space-y-6 bottom-40 left-6 bottom-fixed-left md:visible">
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
      </div>

      <div className="fixed invisible font-normal bottom-40 right-6 bottom-fixed-right md:visible">
        <a
          className="transition-all hover:font-regular hover:text-rose-500"
          href={"mailto:vincentbaylon@gmail.com"}
        >
          vincentbaylon@gmail.com
        </a>
      </div>
    </>
  );
}

export default BottomFixedContainer;
