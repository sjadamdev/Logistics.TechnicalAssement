import React,{useState,useEffect} from 'react';

function Drivers() {
    const [driverList,setDriverList]=useState([]);
    
    // Possibly populate this list from calendar input
    const calendarDates = ['2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06', '2021-02-07']
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    useEffect(()=>{
      const getDrivers = async () => {
        const response = await fetch('/data/drivers.json');
        const json = await response.json();
        const drivers2 = json.data

      // Map Drivers Json and calculate totalMinutes
      const list = drivers2.map((driver => {
        const totalMinutes = driver.traces.reduce((total, trace) => {
          return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
        }, 0);

        // Highlight active days
        const activeDates = driver.traces.map(trace => trace.date)

        const activeDays = calendarDates.map(currentDate => {
          const isActive = driver.traces.some(trace => trace.date === currentDate);

          return isActive ? 1 : 0;
        });
          
        console.log("driverid: " + driver.driverID + " activeDays: " + activeDays)

        return {...driver, totalMinutes, activeDates, activeDays}
      }));

      setDriverList(list);

      };

      getDrivers();
    },[])

    return (
        <div style={{ backgroundColor: 'lightblue', color: 'white', padding: '15px', flex: 1, overflow: 'auto'}}>
            <main className="main-content">
              <table style={{ textAlign: 'left'}}>
                <thead>
                  <tr>
                    <th>Driver Name</th>
                    <th>Vehicle Reg</th>
                    <th>Total Activity Duration</th>
                    <th>Active Dates</th>
                    {calendarDates.map((date, index) => (
                      <th>{weekdays[new Date(date).getDay()]}</th> 
                    ))}
                  </tr>
                </thead>
                <tbody>
                {driverList.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.forename} {driver.surname}</td>
                    <td>{driver.vehicleRegistration}</td>
                    <td style={{textAlign : 'right'}}>{driver.totalMinutes}</td>
                    <td>"{driver.activeDates}"</td>
                    {driver.activeDays.map((activeDay, index) => (
                      <td key={index} style={{
                        textAlign: 'center',
                        backgroundColor: activeDay ? 'green' : 'white', // Set background color to green if active
                      }}></td>
                    ))}
                  </tr>
                ))}
                </tbody>
              </table>
            </main>
        </div>

    )
};


export default Drivers;