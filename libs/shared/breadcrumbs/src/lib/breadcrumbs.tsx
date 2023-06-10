import Item from "./item"
import { HomeIcon } from '@heroicons/react/20/solid'
import { BreadcrumbsPage } from "./types"
import { Link } from 'react-router-dom'
import Page from "./item"

type Props = {
  pages: BreadcrumbsPage[]
}

export function Breadcrumbs ({ pages }: Props) {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <div>
              <Link to={"/"} className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>

          {pages.map((page: BreadcrumbsPage ) => (
            <Page page={page} />
          ))}
        </ol>
      </nav>
    </>
  )
}