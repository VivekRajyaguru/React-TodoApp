import React, {useEffect, useState} from 'react'
import commonAPIService from '../../service/axios/axios.api.service'
import {API} from '../../constant/constant'
import {DashboardPage} from '../../pages/dashboard/DashboardWrapper'
import jsonData from '../../../jsonData/dashboard.json'
interface DashboardData {
  // Define the structure of your data here
}

const DashboardComponent: React.FC = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    getDeviceData()
  }, [])

  const getDeviceData = async () => {
    try {
      const queryParameters = {
        serial_number: 'Q122355982',
      }
      // const response = await commonAPIService.get(API.DASHBOARD.GET_DEVICE, queryParameters)
      setData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <DashboardPage data={data} />
    </div>
  )
}

export default DashboardComponent
