import "./css/ProjectCard.css"

export default function ProjectCard (props) {
  return (
    <>
    <div id="projectCard">
    <h3>{props.projectName}</h3>
      <p><img className="projectImage" src={props.image} alt={props.altImage} /></p>
      <p>{props.description}</p>
      <a href={props.liveLink}>Live</a> | <a href={props.gitHubLink}>Code</a>
      </div>
    </>
  )
  }