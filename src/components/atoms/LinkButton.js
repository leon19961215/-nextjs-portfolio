import Link from "next/link";

export default function LinkButton ({ children, ...props }) {
  return (
    <Link
      className="flex items-center w-fit px-4 py-1 gap-1 border-solid border border-zinc-300 rounded-full text-sm font-normal dark:border-zinc-500 cursor-pointer hover:bg-black hover:text-white hover:border-black dark:hover:bg-gray-200 dark:hover:text-black dark:hover:border-gray-200"
      {...props}
    >{ children }</Link>
  )
}
