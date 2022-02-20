import cruelty from "./assets/crueltyfreerecipes.png";
import phoenix from "./assets/phoenixfitness.png";
import ecommerce from "./assets/fmecommerce.png";
import ProjectCard from "./ProjectCard";

function Projects() {
   const openInNewTab = (url) => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
   };

   const handleLink = (e) => {
      const url = e.target?.getAttribute("dataset");
      openInNewTab(url);
   };

   return (
      <div className="py-10 md:py-20 flex flex-col gap-2">
         <h1
            id="projects"
            className="p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500 bg-gradient-to-l from-slate-700 text-right font-light"
         >
            Projects
         </h1>
         <div className="p-1 grid flex-col grid-cols-1 xl:grid-cols-2 gap-10">
            <ProjectCard
               key="Frontend Mentors - E-commerce"
               name="Frontend Mentors - E-commerce"
               url="https://fm-ecommerce-vb.netlify.app/"
               desc="A challenge to build out an e-commerce product page and get it looking as close to the design as possible."
               tools="HTML5 • CSS3 • SASS • BEM • JavaScript"
               repo="https://github.com/vincentbaylon/css-fm-ecommerce"
            >
               <img
                  className="md:w-1/2 my-2 border-2 border-transparent hover:cursor-pointer hover:border-white object-cover"
                  src={ecommerce}
                  alt="E-commerce screenshot"
                  dataset="https://fm-ecommerce-vb.netlify.app/"
                  onClick={handleLink}
               />
            </ProjectCard>

            <ProjectCard
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
                  className="md:w-1/2 my-2 border-2 border-transparent hover:cursor-pointer hover:border-white object-cover"
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
                  className="md:w-1/2 my-2 border-2 border-transparent hover:cursor-pointer hover:border-white object-cover"
                  src={phoenix}
                  alt="Phoenix fitness screenshot"
                  dataset="https://phoenix-fitness.herokuapp.com/"
                  onClick={handleLink}
               />
            </ProjectCard>
         </div>
      </div>
   );
}

export default Projects;
