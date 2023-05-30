import { NavigationContract } from '../../contexts/navigation-context'
import { NavLink } from 'react-router-dom'
import { classNames, ReactElement } from '@lightning/shared/utils'

type Props = {
  link: NavigationContract
}

export default function LinkItem ({ link }: Props) {
  return (
    <NavLink
      to={link.href}
      className={({ isActive }) => classNames('flex rounded-md p-3 mx-auto hover:bg-[#E2E9F3] hover:text-[#5B50D6] ease-in-out duration-200', isActive ? 'bg-[#E2E9F3]' : '')}
    >
      {({ isActive }) => (
        <ReactElement tag={link.icon} className={classNames('w-6', isActive ? 'text-[#5B50D6]' : '')} />
      )}
    </NavLink>
  )
}
