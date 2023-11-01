const ProductDetails = (props) => {
  return (
    <>
      <div className='card p-a-10 b-r-20 shadow-none bg-gray font-14 d-flex align-items-left fw-bold text-black min-he-200 d-flex flex-row align-items-center justify-content-start'>
        <div className='product-image-card he-170 wi-170 max-he-170 min-he-170 max-wi-170 min-wi-170 bg-white b-r-20 card-shadow d-flex align-items-center justify-content-center'>
          <img
            src='..\media\products\professional-prestige-proterra-hybrid-electric-heat-pump-with-leakguard.png'
            alt='Product'
            className='h-auto w-auto product-image'
          />
        </div>
        <div className='basic-deails p-l-20 w-100 h-100 min-he-170 d-flex flex-column justify-content-around'>
          <div className='row min-he-26 d-flex align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Model</span>
            </div>
            <div className='col-9 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].Model}</span>
            </div>
          </div>
          <div className='row min-he-26 d-flex align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Model Number</span>
            </div>
            <div className='col-9 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].ModelNumber}</span>
            </div>
          </div>
          <div className='row min-he-26 d-flex align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Series Name</span>
            </div>
            <div className='col-3 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].SeriesName}</span>
            </div>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Brand Name</span>
            </div>
            <div className='col-1 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].BrandName}</span>
            </div>
          </div>
          <div className='row min-he-26 d-flex align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Econet Enabled</span>
            </div>
            <div className='col-3 d-flex align-items-center'>
              {/* <span>
                            {props.data.result.product_details[0].IsEcoNetEnabled
                              ? props.data.result.product_details[0].IsEcoNetEnabled
                              : 'N/A'}
                          </span> */}
              <div className='w-fit p-x-15 bg-success bg-opacity-25 p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                <span className='font-10 fw-bolder text-success'>Yes</span>
              </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Category Name</span>
            </div>
            <div className='col-4 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].CategoryName}</span>
            </div>
          </div>
          <div className='row min-he-26 d-flex align-items-center'>
            <div className='col-2 d-flex align-items-center'>
              <span className='text-muted'>Group Name</span>
            </div>
            <div className='col-9 d-flex align-items-center'>
              <span>{props.data.result.product_details[0].GroupName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {ProductDetails}
