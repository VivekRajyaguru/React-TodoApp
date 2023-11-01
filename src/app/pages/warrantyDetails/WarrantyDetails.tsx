const WarrantyDetails = (props) => {
  return (
    <>
      <div className='card b-r-20 shadow-none bg-gray font-12 d-flex align-items-center fw-bold text-black min-he-500 w-100'>
        <div className='row w-100 d-flex align-items-center p-t-15 p-x-15'>
          <div className='col-7 d-flex align-items-center justify-content-start'>
            <span className='text-muted font-14 m-r-10'>Device Age</span>
            <span className='text-black font-14'>1 Year 5 Months 15 Days</span>
          </div>
          <div className='col-5 d-flex align-items-center justify-content-end'>
            <div className='dropdown-container position-relative d-inline-block'>
              <div className='device-age p-x-10 bg-success bg-opacity-25 p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                <span className='font-10 fw-bolder text-success'>New Device</span>
              </div>
              <div className='dropdown-content p-a-10 b-r-10 border bg-white'>
                <div className='d-flex align-items-center m-b-10'>
                  <div className='he-16 wi-16 max-he-16 min-he-16 max-wi-16 min-wi-16 b-r-6 overflow-hidden bg-success bg-opacity-25'></div>
                  <span className='font-10 text-muted fw-bolder m-l-8 text-nowrap'>
                    0 - 2 Years Old
                  </span>
                </div>
                <div className='d-flex align-items-center m-b-10'>
                  <div className='he-16 wi-16 max-he-16 min-he-16 max-wi-16 min-wi-16 b-r-6 overflow-hidden bg-light bg-opacity-25'></div>
                  <span className='font-10 text-muted fw-bolder m-l-8 text-nowrap'>
                    3 - 5 Years Old
                  </span>
                </div>
                <div className='d-flex align-items-center m-b-10'>
                  <div className='he-16 wi-16 max-he-16 min-he-16 max-wi-16 min-wi-16 b-r-6 overflow-hidden bg-warning bg-opacity-25'></div>
                  <span className='font-10 text-muted fw-bolder m-l-8 text-nowrap'>
                    6 - 7 Years Old
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='he-16 wi-16 max-he-16 min-he-16 max-wi-16 min-wi-16 b-r-6 overflow-hidden bg-danger bg-opacity-25'></div>
                  <span className='font-10 text-muted fw-bolder m-l-8 text-nowrap'>
                    8+ Years Old
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-grid grid-gap-10 w-100 p-a-10'>
          <div className='container m-0 p-0 w-100'>
            <div className='card border b-r-10'>
              <div className='row m-3 pt-2'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Type</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>Tank Warranty</span>
                </div>
              </div>
              <div className='row m-3'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Status</span>
                </div>
                <div className='col-2'>
                  <div className='p-x-10 w-fit bg-success p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                    <span className='font-10 fw-bolder text-white'>Active</span>
                  </div>
                </div>
              </div>
              <div className='row m-3'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Description</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>6-Year Limited Tank Warranty</span>
                </div>
              </div>
              <div className='row m-3 pb-2'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Qualifies For Replacement?</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className='container m-0 p-0 w-100'>
            <div className='card border b-r-10'>
              <div className='row m-3 pt-2'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Type</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>Labour/Part Warranty</span>
                </div>
              </div>
              <div className='row m-3'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Status</span>
                </div>
                <div className='col-2'>
                  <div className='p-x-10 w-fit bg-danger p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                    <span className='font-10 fw-bolder text-white'>Expired</span>
                  </div>
                </div>
              </div>
              <div className='row m-3'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Warranty Description</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>6-Year Limited Tank Warranty</span>
                </div>
              </div>
              <div className='row m-3 pb-2'>
                <div className='col-6 d-flex align-items-center'>
                  <span className='text-muted'>Qualifies For Replacement?</span>
                </div>
                <div className='col-6 d-flex align-items-center'>
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {WarrantyDetails}
