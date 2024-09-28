import { ArrowRight } from "react-feather"
import LinkButton from "./atoms/LinkButton"

const GroupTitle = function ({ children, moreLink }) {
  return (
    <h2 className="flex justify-between mb-4 px-4 text-xl font-bold">
      { children }
      <LinkButton href={moreLink}>全部<ArrowRight size={16}/></LinkButton>
    </h2>
  )
}

export default GroupTitle
