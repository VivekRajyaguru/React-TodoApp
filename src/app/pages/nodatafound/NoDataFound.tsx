const NoDataFound = () => {
  return (
    <div className='d-flex h-100 w-100 justify-content-center align-items-center'>
      <div className='main-card d-flex w-100 h-100 max-he-300 max-wi-500'>
        <div className='card b-r-20 w-100 h-100 d-flex align-items-center justify-content-center'>
          <i className='fa fa-triangle-exclamation fs-1 font-40 text-danger'></i>
          <span className='font-16 fw-bold m-t-20 m-b-10 text-black'>No Data Found</span>
          <span className='font-12 fw-bold m-b-20 text-secondary'>Enter valid serial number </span>
        </div>
      </div>
    </div>
  )
}

export {NoDataFound}
