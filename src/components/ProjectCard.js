function ProjectCard({ name, url, img, desc, tools, live, repo, children }) {
  return (
    <div className="flex flex-col items-center overflow-hidden text-center">
      <h1 className="p-2 text-2xl font-semibold text-black">{name}</h1>
      {children}
      <h1 className="p-2 text-lg text-gray-500">{desc}</h1>
      <h1 className="p-2 text-lg text-black">{tools}</h1>
      <div className="flex flex-row gap-5">
        <a
          className="px-2 text-lg font-semibold text-gray-500 hover:underline hover:decoration-rose-500"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          LIVE SITE
        </a>
        <a
          className="text-lg font-semibold text-gray-500 hover:underline hover:decoration-rose-500"
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
