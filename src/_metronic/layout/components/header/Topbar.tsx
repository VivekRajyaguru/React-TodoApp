import React, {useState} from 'react'
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'

const userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar = ({setSearchBar}) => {
  const [search, setSearch] = useState('')

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      setSearchBar(search)
    }
  }

  return (
    <div className='d-flex align-items-stretch justify-self-end flex-shrink-0'>
      <div className='d-flex align-items-center position-relative'>
        <i className='fa fa-search font-14 text-black text-opacity-50 position-absolute m-l-10'></i>
        <input
          type='text'
          className='form-control p-l-30'
          name='search'
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder='Serial No'
        />
      </div>
      <div className='d-flex align-items-center m-l-20' id='kt_header_user_menu_toggle'>
        <div>
          <span className='font-16 fw-bolder text-black p-l-20 p-r-10 border-start'>
            Ethan Hoover
          </span>
        </div>
        <div
          className={clsx('cursor-pointer border symbol', userAvatarClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('../media/svg/avatars/default.svg')} alt='Profile' />
        </div>
      </div>
    </div>
  )
}

export {Topbar}
