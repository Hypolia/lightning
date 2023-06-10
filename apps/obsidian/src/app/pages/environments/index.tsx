import { Icon } from '@lightning/shared/ui'
import { IconEnum } from '@lightning/shared/enums'
import Dashboard from '../../layouts/default'

export default function HomeEnvironments () {
  return (
		<Dashboard layout={{
			label: "Environments",
      noBackground: true
		}}>
			<div className=''>
        <div className="bg-white rounded-md">
          <div className='flex items-center gap-4 border-b p-6'>
            <Icon name={IconEnum.ENVIRONMENT} className="w-20" />
            <h1 className='font-bold text-text-700 text-3xl max-w-3xl truncate'>Hypolia</h1>
          </div>

          <div className="flex px-8">
            <button>
              <div className='flex h-14 items-center gap-2 p-3 border-b-2 border-indigo-500'>
                <div>
                  <Icon name={IconEnum.SUCCESS} className="w-4" />
                </div>
                <div>
                  <span className='font-medium text-indigo-500'>Environments</span>
                </div>
              </div>
            </button>
            
          </div>
        </div>
				
			</div>
		</Dashboard>
	)
}