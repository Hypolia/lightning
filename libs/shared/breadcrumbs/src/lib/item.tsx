import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"
import { BreadcrumbsPage } from "./types"

type Props = {
  page: BreadcrumbsPage
}

export default function Page ({ page }: Props) {
  return (
    <li key={page.name}>
      <div className="flex items-center">

        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />

        <Link 
          to={page.href}
          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          aria-current={page.current ? 'page' : undefined}
        >
          { page.name }
        </Link>
      </div>
    </li>
  )
}