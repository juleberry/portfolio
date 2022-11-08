import WorkHistoryItem from "./WorkHistoryItem"

export default function WorkHistory (props) {
  return (
    <>
    <h1>Work History</h1>
    <ul>
      <WorkHistoryItem />
    </ul>
    <button>View Resume</button>
    </>
  )
}