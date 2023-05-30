import {ReactNode} from 'react'
import Sidebar from "../components/navigation/sidebar";

type Props = {
  children: ReactNode

  layout: {
    label: string
    location?: string[]
    navigation?: any[]
  }
}

export default function Dashboard ({ children, layout}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-shrink-0 min-h-screen bg-[#E2E9F3]">
      <Sidebar />
      <div className="flex min-w-0 min-h-screen flex-1 flex-col overflow-hidden w-full h-full">
        <div className="mx-auto w-full lg:p-4 h-full min-h-screen flex">
          <div className="bg-white w-full min-h-full rounded-md shadow-md overflow-hidden">
            <div className="p-6">
              {children}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
