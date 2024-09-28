import cn from "classnames"

function Center ({ children, className }) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="w-full max-w-2xl">{ children }</div>
    </div>
  )
}

export default Center
