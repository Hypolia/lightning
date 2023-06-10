import Search from "../components/search";
import Dashboard from "../layouts/default";
import { Breadcrumbs, BreadcrumbsPage } from '@lightning/shared/breadcrumbs'
import { Ressource } from "../components/ressource";
import { IconEnum } from '@lightning/shared/enums'
import { Icon } from '@lightning/shared/ui'

const pages: BreadcrumbsPage[] = [
  { name: "accueil", href: "/", current: true}
]

const resources = [
  {
    href: '/users',
    name: 'Utilisateurs',
    description:
      'Lorem ipsum dit color sat',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 0],
      ],
    },
  },
  {
    href: '/roles',
    name: "Roles",
    description:
      'Panel pour gérer l\'ensemble des rôles',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 0],
      ],
    },
  }
]

export default function Home () {
  return (
    <Dashboard layout={{
      label: "Page d'accueil",
    }}>
      <div>
        <div className="border-b justify-between w-full flex items-center pb-4">
          <div className="flex flex-col gap-2">
            <Breadcrumbs pages={pages} />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>

          <div className="">
            <Search />
          </div>
        </div>

        <div>
          <Icon name={IconEnum.ENVIRONMENT} className="w-32"/>
        </div>
        <div className="flex mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
            { resources.map((resource) =>  <Ressource resource={resource}/> )}
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
