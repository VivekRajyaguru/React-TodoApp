import {FC} from 'react'
import clsx from 'clsx'
import {useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
// import {HeaderUserMenu, Search} from '../../../partials'
// import { SearchBar } from '../../../../_metronic/partials/layout/search_topbar/Search';

const itemClass = 'ms-1 ms-lg-3',
  userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  const [search, setSearch] = useState('')
  console.log('search: ', search)
  // const handleSearch = (query: string) => {
  //   // Add your search logic here. You can perform an API request or filter data as needed.
  //   console.log(`Search query: ${query}`);
  // };

  return (
    <div className='d-flex align-items-stretch justify-self-end flex-shrink-0'>
      {/* Tempaory Searchbar */}
      {/* <SearchBar onSearch={handleSearch} /> */}

      {/* <div className='rounded d-flex flex-column flex-lg-row align-items-center bg-body w-lg-550px h-lg-60px my-5'>
        <div className='col-lg-4 d-flex align-items-center mb-3 mb-lg-0'>
          <KTIcon iconName='magnifier' className='fs-1 text-gray-400 xme-1' />
          <input
            type='text'
            className='form-control form-control-flush flex-grow-1 w-lg-850px '
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Serial No'
          />
          <div className='min-w-140px text-end'>
          <button type='submit' className='btn btn-dark' id='kt_advanced_search_button_1'>
            Search
          </button>
        </div>
        </div>
      </div> */}

      <div className='d-flex align-items-center position-relative'>
      <i className='fa fa-search font-14 text-black text-opacity-50 position-absolute m-l-10'></i>
        <input
          type='text'
          className='form-control p-l-30'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Serial No'
        />
      </div>
      {/* begin::User */}
      <div className='d-flex align-items-center m-l-20' id='kt_header_user_menu_toggle'>
        <div>
          <span className='font-16 fw-bolder text-black p-l-20 p-r-10 border-start'>
            Ethan Hoover
          </span>
        </div>
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer border symbol', userAvatarClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('../media/svg/avatars/default.svg')} alt='Profile' />
        </div>
        {/* <HeaderUserMenu /> */}
        {/* end::Toggle */}
      </div>
      {/* end::User */}
    </div>
  )
}

export {Topbar}
