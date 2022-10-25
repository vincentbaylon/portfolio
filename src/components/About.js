function About() {
  return (
    <div className="flex flex-col py-10 h-5/6 md:py-20">
      <h1
        id="about"
        className="w-auto p-2 my-5 text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-black"
      >
        Get To Know Me
      </h1>

      <div className="grid justify-center grid-cols-1 gap-6 p-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-lg text-left 2xl:text-xl">
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
          <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
            Skills
          </h1>
          <h1 className="p-1 text-xl text-gray-500 md:text-2xl">
            React • JavaScript • HTML5 • CSS3 • BEM • SASS • TaildwindCSS • Ruby
            on Rails • Ruby • PostgreSQL • SQL • Git • GitHub • React Native •
            WordPress • Elementor • Swift • SwiftUI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
