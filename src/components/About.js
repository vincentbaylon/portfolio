function About() {
  return (
    <div className="h-5/6 flex flex-col py-10 md:py-20">
      <h1
        id="about"
        className="p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white bg-gradient-to-r from-black font-light"
      >
        Get To Know Me
      </h1>

      <div className="p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6">
        <div className="text-lg 2xl:text-xl text-left">
          <h1 className="text-gray-600">
            I'm a full-stack developer currently located in Las Vegas. I'm
            passionate about being creative and developing web apps that
            positively impact people's lives. I'm focused and effective under
            pressure, meeting deadlines and working with clients.
            <br />
            <br />
            I enjoy using code as a way to express myself through technology. I
            strive to create visually appealing designs with the user experience
            always as the main focus.
            <br />
            <br />
            When I'm not coding I enjoy DJing, fitness, sports, mountain biking,
            snowboarding, watching the MCU and Star Wars, and rewatching The
            Office.
            <br />
            <br />
          </h1>
        </div>

        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
            Skills
          </h1>
          <h1 className="p-1 text-xl md:text-2xl text-gray-500">
            React • JavaScript • HTML5 • CSS3 • BEM • SASS • TaildwinCSS • Ruby
            on Rails • Ruby • PostgreSQL • SQL • Git • GitHub
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
