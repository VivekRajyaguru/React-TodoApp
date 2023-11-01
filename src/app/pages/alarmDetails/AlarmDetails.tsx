import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 2}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const AlarmsDetails = (props) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <div className='card b-r-20 shadow-none bg-gray font-14 d-flex fw-bold text-secondary min-he-500'>
        <div className='row min-he-26 mx-3 my-2 d-flex align-items-center m-t-16'>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>Connection Status</span>
            </div>
            <div className='col-5 d-flex align-items-center'>
              <div className='p-x-10 bg-white card-shadow p-y-5 d-flex align-items-center justify-content-center b-r-10 grid-gap-5'>
                <div className='he-10 wi-10 b-r-20 bg-danger'></div>
                <span className='font-10 fw-bolder text-danger'>Disconnected</span>
              </div>
            </div>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-4 d-flex align-items-center'>
              <span className='text-muted'>In Alarm</span>
            </div>

            <div className='col-6 d-flex align-items-center'>
              <div className='w-fit p-x-15 bg-danger bg-opacity-25 p-y-5 d-flex align-items-center justify-content-center b-r-10'>
                <span className='font-10 fw-bolder text-danger'>Yes</span>
              </div>
            </div>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>User App Status</span>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='p-x-10 bg-white card-shadow p-y-5 d-flex align-items-center justify-content-center b-r-10 grid-gap-5'>
                <div className='he-10 wi-10 b-r-20 bg-danger'></div>
                <span className='font-10 fw-bolder text-danger'>Disconnected</span>
              </div>
            </div>
          </div>
        </div>

        <div className='row min-he-26 mx-3 my-2 d-flex justify-content-between align-items-center'>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>Last Communicated</span>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <span>3/23/2023 5:00:00 AM</span>
            </div>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>Location</span>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <span>PEABODY, MA, 01960</span>
            </div>
          </div>
        </div>

        <div className='row min-he-26 mx-3 my-2 d-flex justify-content-between align-items-center'>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>Product Software Version</span>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <span>RH-WIFI-02-01-30</span>
            </div>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <div className='col-6 d-flex align-items-center'>
              <span className='text-muted'>WIFI Software Version</span>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <span>RH-WIFI-02-01-30</span>
            </div>
          </div>
        </div>

        <div className='p-a-10 h-100 min-he-400'>
          <div className='card h-100 min-he-500'>
            <Box sx={{width: '100%'}}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}
              >
                <Tabs value={value} onChange={handleChange} aria-label='alarms tabs'>
                  <Tab
                    label='Current Alarms'
                    {...a11yProps(0)}
                    sx={{
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: value === 0 ? 'bold' : 'normal',
                    }}
                  />
                  <Tab
                    label='Alarms History'
                    {...a11yProps(1)}
                    sx={{
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: value === 1 ? 'bold' : 'normal',
                    }}
                  />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                <div className='d-grid w-100 grid-gap-10'>
                  <div className='d-flex align-items-center justify-content-between bg-danger bg-opacity-10 b-r-10 p-a-15'>
                    <span className='text-black fw-bold text-opacity-75'>
                      A127_F Flame Present with Gas Valve Off - UL
                    </span>
                    <span className='fw-bolder text-black'>Time: 3/23/2023 05:00:00 AM</span>
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className='d-grid w-100 grid-gap-10'>
                  <div className='d-flex align-items-center justify-content-between bg-danger bg-opacity-10 b-r-10 p-a-15'>
                    <span className='text-black fw-bold text-opacity-75'>
                      A127_F Flame Present with Gas Valve Off - UL
                    </span>
                    <span className='fw-bolder text-black'>Time: 3/23/2023 05:00:00 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between bg-secondary bg-opacity-10 b-r-10 p-a-15'>
                    <span className='text-black fw-bold text-opacity-75'>
                      A127_F Flame Present with Gas Valve Off - UL
                    </span>
                    <span className='fw-bolder text-black'>Time: 3/23/2023 05:00:00 AM</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between bg-light bg-opacity-10 b-r-10 p-a-15'>
                    <span className='text-black fw-bold text-opacity-75'>
                      A127_F Flame Present with Gas Valve Off - UL
                    </span>
                    <span className='fw-bolder text-black'>Time: 3/23/2023 05:00:00 AM</span>
                  </div>
                </div>
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}

export {AlarmsDetails}
