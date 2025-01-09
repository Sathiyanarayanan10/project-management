import CustomButton from "./CustomButton";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-950 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <CustomButton onClick={onStartAddProject}>+ Add Projects</CustomButton>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full px-2 py-1 rounded-md font-bold text-left hover:bg-stone-400"
          if (project.id === selectedProjectID){
            cssClasses+=" bg-stone-900 text-stone-200"
          }else{
            cssClasses+=" text-stone-500"
          }
          return (
              <li key={project.id}>
                  <button
                    className={cssClasses} onClick={()=> onSelectProject(project.id)}> {project.title}
                  </button>
              </li>
          );
        })}
      </ul>
    </aside>
  );
}
