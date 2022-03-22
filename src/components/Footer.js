function Footer() {
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="p-3 text-white bg-black flex flex-row justify-center">
      <div className="md:max-w-6xl w-full flex flex-row items-center justify-center">
        <h1 className="text-md md:text-lg flex-1">
          © 2022 Vincent Baylon -{" "}
          <a
            className="hover:underline hover:decoration-rose-500 transition-all"
            href={"mailto:vincentbaylon@gmail.com"}
          >
            vincentbaylon@gmail.com
          </a>
        </h1>
        <div className="">
          <button
            className="hover:underline hover:decoration-rose-500 transition-all"
            onClick={handleClick}
          >
            BACK TO TOP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
