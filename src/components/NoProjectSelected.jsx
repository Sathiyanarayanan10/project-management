import noProjectPic from "../assets/no-projects.png"
import CustomButton from "./CustomButton";

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectPic} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-600 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with new one.</p>
            <p className="mt-8">
                <CustomButton onClick={onStartAddProject}>Create a new project</CustomButton>
            </p>
        </div>
    );
}