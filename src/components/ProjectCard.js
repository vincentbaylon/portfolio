function ProjectCard({ name, url, img, desc, tools, live, repo, children }) {
  return (
    <div className="flex flex-col items-center text-center overflow-hidden">
      <h1 className="p-2 text-2xl font-semibold underline text-black">
        {name}
      </h1>
      {children}
      <h1 className="p-2 text-gray-500 text-lg">{desc}</h1>
      <h1 className="p-2 text-black text-lg">{tools}</h1>
      <div className="flex flex-row gap-5">
        <a
          className="text-gray-500 px-2 font-semibold hover:underline hover:decoration-rose-500 text-lg"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          LIVE SITE
        </a>
        <a
          className="text-gray-500 font-semibold hover:underline hover:decoration-rose-500 text-lg"
          href={repo}
          target="_blank"
          rel="noreferrer noopener"
        >
          GITHUB
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
