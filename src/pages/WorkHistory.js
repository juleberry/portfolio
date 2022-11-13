import "./css/WorkHistory.css"
import WorkHistoryItem from "../components/WorkHistoryItem"

export default function WorkHistory (props) {
  return (
    <>
    <div className="linkContainers" id="workHistory">
        <a href="#WorkHistory">
          <img
            id="workHisLink"
            src="https://live.staticflickr.com/65535/52487383698_18ac0e6605_o.png"
            alt="planet-earth-clipart"
          />
        </a>
    <h2>Work History</h2>
    <ul>
      <li><WorkHistoryItem /></li>
      <li><WorkHistoryItem /></li>
    </ul>
    <a href="public\JuleBerryPublicResume11-2022.pdf" target="_blank"><button>View Resume</button></a>
    </div>
    </>
  )
}