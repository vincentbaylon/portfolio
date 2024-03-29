function ProjectCard({ name, url, img, desc, tools, live, repo, children }) {
  return (
    <div className='flex flex-col items-center overflow-hidden text-center'>
      <a
        className='p-2 text-2xl font-semibold text-black hover:underline hover:decoration-rose-500'
        href={url === '' ? repo : url}
        target='_blank'
        rel='noreferrer noopener'>
        {name}
      </a>
      {children}
      <h1 className='p-2 text-lg text-gray-500'>{desc}</h1>
      <h1 className='p-2 text-lg text-black'>{tools}</h1>
      <div className='flex flex-row gap-5'>
        {url === '' ? (
          <></>
        ) : (
          <a
            className='px-2 text-lg font-semibold text-gray-500 hover:underline hover:decoration-rose-500'
            href={url}
            target='_blank'
            rel='noreferrer noopener'>
            LIVE
          </a>
        )}

        <a
          className='text-lg font-semibold text-gray-500 hover:underline hover:decoration-rose-500'
          href={repo}
          target='_blank'
          rel='noreferrer noopener'>
          REPO
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
