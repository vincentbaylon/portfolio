function About() {
  return (
    <div className="md:py-10 lg:py-20">
      <div className="flex flex-col px-6 py-4 my-10 rounded-md md:px-8 bg-slate-900 h-5/6">
        <h1 className="w-auto my-5 text-2xl font-semibold rounded-md text-slate-100 sm:text-2xl md:text-3xl lg:text-4xl about-heading">
          Get To Know Me
        </h1>

        <div className="grid justify-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="text-lg text-left 2xl:text-xl">
            <h1 className="font-light text-slate-100">
              I'm a full-stack developer currently located in Las Vegas. I'm
              passionate about being creative and developing web apps that
              positively impact people's lives. I'm focused and effective under
              pressure, meeting deadlines and working with clients.
              <br />
              <br />
              I enjoy using code as a way to express myself through technology.
              I strive to create visually appealing designs with the user
              experience always as the main focus.
              <br />
              <br />
              When I'm not coding I enjoy DJing, fitness, sports, mountain
              biking, snowboarding, watching the MCU and Star Wars, and
              rewatching The Office.
              <br />
              <br />
            </h1>
          </div>

          <div className="font-light">
            <h1 className="pb-2 text-xl font-bold text-rose-500 md:text-2xl">
              Skills
            </h1>

            <h1 className="py-2 text-lg text-slate-100 md:text-xl">
              ReactJS • JavaScript • HTML5 • CSS3 • SASS • TaildwindCSS • React
              Native
            </h1>

            <h1 className="py-2 text-lg text-slate-100 md:text-xl">
              NextJS • Ruby • Ruby on Rails • PostgreSQL • SQL
            </h1>

            <h1 className="py-2 text-lg text-slate-100 md:text-xl">
              Firebase • Sanity • GitHub • WordPress • Elementor
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
