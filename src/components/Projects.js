import cruelty from './assets/crueltyfreerecipes.png';
import ecommerce from './assets/fmecommerce.png';
import room from './assets/fmroom.png';
import phoenix from './assets/phoenixfitness.png';
import ProjectCard from './ProjectCard';

function Projects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleLink = (e) => {
    const url = e.target?.getAttribute('dataset');
    openInNewTab(url);
  };

  return (
    <div className='flex flex-col gap-2 py-10 md:py-10 lg:py-20'>
      <h1
        id='projects'
        className='w-auto p-2 px-4 my-5 text-2xl font-semibold text-left rounded-md text-slate-100 sm:text-2xl md:text-3xl lg:text-4xl bg-slate-900'>
        <span className='text-rose-500'>{'<'}</span>Projects
        <span className='text-rose-500'>{'>'}</span>
      </h1>
      <div className='grid flex-col grid-cols-1 gap-10 p-1 xl:grid-cols-2'>
        <ProjectCard
          key='Room homepage'
          name='Room Homepage'
          url='https://room-homepage-vb.netlify.app/'
          desc='A room homepage created from a design.'
          tools='HTML5 • CSS3 • SASS • BEM • JavaScript'
          repo='https://github.com/vincentbaylon/room-homepage'>
          <img
            className='object-cover my-2 border-2 border-transparent rounded-md md:w-1/2 hover:cursor-pointer hover:shadow-xl'
            src={room}
            alt='Room homepage screenshot'
            dataset='https://room-homepage-vb.netlify.app/'
            onClick={handleLink}
          />
        </ProjectCard>

        <ProjectCard
          key='E-commerce product page'
          name='E-commerce Product Page'
          url='https://fm-ecommerce-vb.netlify.app/'
          desc='An e-commerce product page created from a design.'
          tools='HTML5 • CSS3 • SASS • BEM • JavaScript'
          repo='https://github.com/vincentbaylon/css-fm-ecommerce'>
          <img
            className='object-cover my-2 border-2 border-transparent rounded-md md:w-1/2 hover:cursor-pointer hover:shadow-xl'
            src={ecommerce}
            alt='E-commerce screenshot'
            dataset='https://fm-ecommerce-vb.netlify.app/'
            onClick={handleLink}
          />
        </ProjectCard>

        {/* <ProjectCard
          key="Cruelty Free Recipes"
          name="Cruelty Free Recipes"
          url="https://crueltyfree.recipes/"
          desc="A plant-based recipe site with rating and commenting features for
					Vegans or those looking to incorporate more plant-based meals into
					their diets."
          tools="React • Ruby on Rails • TailwindCSS • PostgreSQL • Framer Motion"
          repo="https://github.com/vincentbaylon/cruelty-free-recipes"
        >
          <img
            className="object-cover my-2 border-2 border-transparent rounded-md md:w-1/2 hover:cursor-pointer hover:shadow-xl"
            src={cruelty}
            alt="Cruelty free recipes screenshot"
            dataset="https://crueltyfree.recipes/"
            onClick={handleLink}
          />
        </ProjectCard>

        <ProjectCard
          key="Phoenix Fitness"
          name="Phoenix Fitness"
          url="https://phoenix-fitness.herokuapp.com/"
          desc="A workout and body progress tracker to assist in achieving your
					fitness goals."
          tools="React • Ruby on Rails • MUI • PostgreSQL • Firebase"
          repo="https://github.com/vincentbaylon/phoenix"
        >
          <img
            className="object-cover my-2 border-2 border-transparent rounded-md md:w-1/2 hover:cursor-pointer hover:shadow-xl"
            src={phoenix}
            alt="Phoenix fitness screenshot"
            dataset="https://phoenix-fitness.herokuapp.com/"
            onClick={handleLink}
          />
        </ProjectCard> */}
      </div>
      <h1
        id='projects'
        className='w-auto p-2 px-4 my-5 text-2xl font-semibold text-left rounded-md text-slate-100 sm:text-2xl md:text-3xl lg:text-4xl bg-slate-900'>
        <span className='text-rose-500'>{'</'}</span>Projects
        <span className='text-rose-500'>{'>'}</span>
      </h1>
    </div>
  );
}

export default Projects;
