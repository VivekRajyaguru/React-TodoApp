/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import { toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header} = config

  return (
    <div
      id='kt_header'
      className={clsx('header position-relative', classes.header.join(' '), ' align-items-stretch')}
      {...attributes.headerMenu}
    >
      {/* begin::Container */}
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      > 
        {/* begin::Mobile logo */}
        <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
          <Link to='/dashboard' className='d-lg-none'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo-main.svg')}
              className='h-30px'
            />
          </Link>
        </div>
        {/* end::Mobile logo */}
        
        {/* begin::Wrapper */}
        <div
          className={clsx(
            'd-flex align-items-stretch',
            `justify-content-${header.menu ? 'between' : 'end'}`,
            'flex-lg-grow-1'
          )}
        >
          {header.menu && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          <Topbar />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Container */}
    </div>
  )
}
