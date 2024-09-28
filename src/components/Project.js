import { ArrowUpRight } from "react-feather"

const Project = function ({ href, year, name, description }) {
  console.log(href)
  return (
    <a className="flex items-start gap-4 mb-1 p-4 rounded-xl cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-600" href={href} target="_blank">
      <div className="text-md w-16 text-gray-700 dark:text-gray-400">{ year }</div>
      <div>
        <h3 className="flex gap-1 mb-1 text-md font-medium">{ name }<ArrowUpRight size={20}/></h3>
        <p className="text-gray-700 dark:text-gray-400">{ description }</p>
      </div>
    </a>
  )
}

export default Project
