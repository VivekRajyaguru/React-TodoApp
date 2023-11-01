import {FC, useEffect} from 'react'
import {useLocation} from 'react-router'
import {DrawerComponent} from '../../assets/ts/components'
import {WithChildren} from '../../helpers'

export const Content: FC<WithChildren> = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div className='master-content p-b-20 p-x-20 h-100'>
      {children}
    </div>
  )
}