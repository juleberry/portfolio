import "./css/Projects.css"
import ProjectCard from "../components/ProjectCard"

export default function Projects (props) {
  return (
    <>
    <div className="linkContainers" id="projects">
        <a href="#Projects">
          <img
            id="projectLink"
            src="https://live.staticflickr.com/65535/52483152765_3f7477e47e_o.png"
            alt="north-star-clipart"
            />
        </a>
      <h2>Projects</h2>
        <div id="projectListCtr">
    <ul>
      <li id="projectList"><ProjectCard /></li>
      <li id="projectList"><ProjectCard /></li>
      <li id="projectList"><ProjectCard /></li>
    </ul>
    </div>
      </div>
    </>
  )
}