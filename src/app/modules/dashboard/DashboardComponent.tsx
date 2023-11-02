import React, {useEffect, useState} from 'react'
import commonAPIService from '../../service/axios/axios.api.service'
import {API} from '../../constant/constant'
import {DashboardPage} from '../../pages/dashboard/DashboardWrapper'
import {NoDataFound} from '../../pages/nodatafound/NoDataFound'

const DashboardComponent: React.FC<any> = ({searchBar}) => {
  const [data, setData] = useState<any>()
  const [noDataFound, setNoDataFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchBar) {
      setIsLoading(true) // Show the loader
      getDeviceData(searchBar)
    }
  }, [searchBar])

  const getDeviceData = async (searchBar: string) => {
    try {
      const queryParameters = {
        serial_number: searchBar,
      }
      const response = await commonAPIService.get(API.DASHBOARD.GET_DEVICE, queryParameters)

      // Simulate a 2-second delay before showing No Data Found or DashboardPage
      setTimeout(() => {
        setIsLoading(false) // Hide the loader

        if (response) {
          setData(response)
          setNoDataFound(false) // Data found, reset noDataFound
        } else {
          setData(null)
          setNoDataFound(true) // No data found
        }
      }, 2000)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false) // Hide the loader in case of an error
      setNoDataFound(true) // Set noDataFound to true in case of an error
    }
  }

  return (
    <>
      {isLoading ? (
        // Display the loader during the 2-second delay
        <div className='d-flex h-100 w-100 justify-content-center align-items-center b-r-20'>
          <img src='/media/logos/rheemPreloader@2x.gif' alt='loading gif' className='b-r-20' />
        </div>
      ) : noDataFound ? (
        <NoDataFound />
      ) : (
        <DashboardPage data={data} />
      )}
    </>
  )
}

export default DashboardComponent
