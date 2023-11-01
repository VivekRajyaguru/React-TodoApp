import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {MenuComponent} from '../assets/ts/components'

const MasterLayout = ({setSearchBar}) => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        {/* begin::Page */}
        <div className='page d-flex flex-row flex-column-fluid'>
          {/* begin::Wrapper */}
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper setSearchBar={setSearchBar} />
            {/* begin::Content */}
            <Content>
              <Outlet />
            </Content>
            {/* end::Content */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Page */}
      </div>
    </PageDataProvider>
  )
}

export {MasterLayout}
