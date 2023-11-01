import {TimeLine} from '../timeline/timelinePage'
import {WarrantyDetails} from '../warrantyDetails/WarrantyDetails'
import {LocationDetails} from '../locationDetails/LocationDetails'
import {AlarmsDetails} from '../alarmDetails/AlarmDetails'
import {ProductDetails} from '../productDetails/ProductDetails'

const DashboardPage = (props: any) => {
  return (
    <>
      {/* begin::Row  */}
      {props && props.data ? (
        <div className='d-flex h-100 grid-gap-16'>
          <div className='main-card d-flex'>
            <div className='card b-r-20 w-100'>
              <div className='font-14 fw-bold p-x-25 p-y-20 he-68 d-flex align-items-center justify-content-between border-bottom'>
                <span className='font-16 fw-bold text-black'>
                  {props.data.result.serial_id} : Thor
                </span>
                {props.data.result.product_details[0].Disabled === false ? (
                  <div className='device-status p-x-10 bg-secondary p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                    <span className='font-12 fw-bold text-white'>Disabled</span>
                  </div>
                ) : (
                  <div className='device-status p-x-10 bg-success p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                    <span className='font-12 fw-bold text-white'>Enabled</span>
                  </div>
                )}
              </div>
              <div className='p-a-10'>
                <div className='p-a-10'>
                  <ProductDetails data={props.data} />
                </div>
                <div className='p-a-10 d-flex grid-gap-16'>
                  <WarrantyDetails />
                  <LocationDetails />
                </div>
                <div className='p-a-10'>
                  <AlarmsDetails />
                </div>
              </div>
            </div>
          </div>
          <TimeLine />
        </div>
      ) : (
        ''
      )}

      {/* end::Row  */}
    </>
  )
}

export {DashboardPage}
