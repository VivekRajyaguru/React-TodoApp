const LocationDetails = (props) => {
  return (
    <>
      <div className='card b-r-20 p-a-16 shadow-none bg-gray font-50 d-flex align-items-center flex-column justify-content-start grid-gap-10 fw-bold text-secondary min-he-500 w-100'>
        <div className='card-shadow b-r-10 w-100 bg-white b-r-10 p-a-10 d-flex font-12 position-relative overflow-hidden'>
          <div className='card-shadow b-r-10 bg-white he-52 wi-52 max-he-52 min-he-52 max-wi-52 min-wi-52 d-flex align-items-center justify-content-center'>
            <i className='fa fa-project-diagram text-danger font-24'></i>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start'>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <div className='d-flex'>
                <span className='text-muted m-r-10'>Distributor :</span>
                <span>KELLER SUPPLY COMPANY INC</span>
              </div>
            </div>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <span>1504 Steele Avenue, Sumner, WA 98390</span>
            </div>
          </div>
        </div>
        <div className='card-shadow b-r-10 w-100 bg-white b-r-10 p-a-10 d-flex font-12 position-relative overflow-hidden'>
          <div className='card-shadow b-r-10 bg-white he-52 wi-52 max-he-52 min-he-52 max-wi-52 min-wi-52 d-flex align-items-center justify-content-center'>
            <i className='fa fa-boxes text-warning font-24'></i>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start'>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <div className='d-flex'>
                <span className='text-muted m-r-10'>Contractor :</span>
                <span>HEIECK SUPPLY DIVISION OF HAJOCA</span>
              </div>
            </div>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <span>2601 142ND AVE E. SUITE B, Sumner, WA, 98390</span>
            </div>
          </div>
        </div>
        <div className='card-shadow b-r-10 w-100 bg-white b-r-10 p-a-10 d-flex font-12 position-relative overflow-hidden'>
          <div className='card-shadow b-r-10 bg-white he-52 wi-52 max-he-52 min-he-52 max-wi-52 min-wi-52 d-flex align-items-center justify-content-center'>
            <i className='fa fa-home text-info font-24'></i>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start'>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <div className='d-flex'>
                <span className='text-muted m-r-10'>Homeowner :</span>
                <span>Chandani Patel</span>
              </div>
            </div>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <span>7103 141st Court E, Sumner, WA, 98390</span>
            </div>
          </div>
        </div>
        <div className='card-shadow b-r-10 w-100 bg-white b-r-10 p-a-10 d-flex font-12 position-relative overflow-hidden'>
          <div className='bg-white position-absolute top-0 start-0 device-home-owner overflow-hidden'>
            <div className='p-x-10 bg-success bg-opacity-25 p-y-5 d-flex align-items-center justify-content-center'>
              <span className='font-8 fw-bolder text-success'>Current</span>
            </div>
          </div>
          <div className='card-shadow b-r-10 bg-white he-52 wi-52 max-he-52 min-he-52 max-wi-52 min-wi-52 d-flex align-items-center justify-content-center'>
            <i className='fa fa-home text-info font-24'></i>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start'>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <div className='d-flex'>
                <span className='text-muted m-r-10'>Homeowner :</span>
                <span>PEABODY SUPPLY DIVISION OF HAJOCA</span>
              </div>
            </div>
            <div className='row m-x-10 min-he-26 d-flex align-items-center'>
              <span>58 R PULASKI STREET, PEABODY, MA, 01960</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {LocationDetails}
