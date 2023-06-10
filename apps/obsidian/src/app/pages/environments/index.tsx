import {Button, Icon} from '@lightning/shared/ui'
import {IconEnum} from '@lightning/shared/enums'
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

			</div>
		</Dashboard>
	)
}
