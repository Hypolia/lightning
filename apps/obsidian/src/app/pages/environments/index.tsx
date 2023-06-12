import {Button, Icon} from '@lightning/shared/ui'
import {IconEnum} from '@lightning/shared/enums'
import Dashboard from '../../layouts/default'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function HomeEnvironments () {
  return (
		<Dashboard layout={{
			label: "Environments",
      noBackground: true
		}}>
			<div className='flex flex-col gap-4 overflow-hidden'>
        <div className="bg-white rounded-md">
          <div className='flex items-center gap-4 border-b p-6'>
            <Icon name={IconEnum.ENVIRONMENT} className="w-20" />
            <h1 className='font-bold text-text-700 text-3xl max-w-3xl truncate'>Hypolia</h1>
          </div>

          <div className="flex px-8 justify-between items-center h-full">
            <div>
              <button>
                <div className='flex h-14 items-center gap-4 p-3 border-b-2 border-indigo-500'>
                  <div>
                    <Icon name={IconEnum.SUCCESS} className="w-3" />
                  </div>
                  <div>
                    <span className='font-medium text-sm text-indigo-500'>Environments</span>
                  </div>
                </div>
              </button>
            </div>

            <div className='border-l h-14 flex items-center pl-6'>
              <Button>
                <span>New environment</span>
              </Button>
            </div>


          </div>
        </div>

        <div className='bg-white rounded-sm h-full'>

          <table className='min-w-full divide-y divide-gray-100 border-b border-gray-100'>
            <thead>
              <tr className="divide-x divide-gray-100">
                <th>
                  <div className="flex items-center justify-between p-4">
                    <div className='bg-gray-200 text-xs font-medium text-gray-800 px-2 py-1 rounded-sm'>
                      2 environments
                    </div>

                    <div>
                      <span className='text-sm font-medium text-gray-800 '>Update</span>
                    </div>
                  </div>
                </th>

                <th>
                  <div className='flex p-4'>
                    <div className='bg-gray-200 text-xs font-medium text-gray-800 px-2 py-1 rounded-sm'>
                      Type
                    </div>
                  </div>
                </th>
              </tr>

            </thead>

            <tbody className='divide-y divide-gray-100'>
              <tr className='divide-x divide-gray-100 hover:bg-gray-50'>
                <td className='flex items-center justify-between p-4'>
                  <div className="flex items-center gap-4">
                    <div className='flex items-center gap-2'>
                      <Icon name={IconEnum.PAUSE} className="w-4" />
                      <Icon name={IconEnum.AWS_GRAY} className="w-4" />
                    </div>
                    
                    <span className="text-indigo-800 font-medium text-xs">AWS production</span>
                  </div>
                  <div>
                    <Menu />
                  </div>
                </td>
                <td>
                  <div className='flex pl-4'>
                    <div className='border rounded-md px-2 py-1 text-xs bg-indigo-100 border-indigo-400 text-indigo-500 font-medium'>
                      PROD
                    </div>  
                  </div>
                 
                </td>
              </tr>
              <tr className='divide-x divide-gray-100 hover:bg-gray-50'>
                <td className='flex items-center justify-between p-4'>
                  <div className="flex items-center gap-4">
                    <div className='flex items-center gap-2'>
                      <Icon name={IconEnum.PAUSE} className="w-4" />
                      <Icon name={IconEnum.AWS_GRAY} className="w-4" />
                    </div>
                    
                    <span className="text-indigo-800 font-medium text-xs">AWS test</span>
                  </div>
                  <div>
                    <Menu />
                  </div>
                </td>
                <td>
                  <div className='flex pl-4'>
                    <div className='border rounded-md px-2 py-1 text-xs bg-gray-100 border-gray-400 text-gray-500 font-medium'>
                      DEV
                    </div>  
                  </div>
                 
                </td>
              </tr>
            </tbody>
          </table>


          <div className='mt-4'>
            ddd
          </div>
        </div>

			</div>
		</Dashboard>
	)
}


function Menu () {
  return (
    <div>
      <span className="isolate inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
        </button>
      </span>
    </div>
  )
}