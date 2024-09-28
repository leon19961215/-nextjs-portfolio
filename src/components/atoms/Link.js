import cn from 'classnames'
import Link from 'next/link'

const NavLink = ({ children, to, isActive, ...props }) => (
  <Link
    href={to}
    className={
      cn(
        "text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-50 transition-all",
        { "text-gray-950 dark:text-gray-50": isActive }
      )
    }
    {...props}
  >{ children }</Link>
)

export default NavLink
