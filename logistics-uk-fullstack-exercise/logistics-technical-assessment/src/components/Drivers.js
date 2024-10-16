import React,{useState,useEffect} from 'react';
import './Drivers.css';

function Drivers() {
    const [driverList,setDriverList]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Possibly populate this list from calendar input
    const calendarDates = ['2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06', '2021-02-07']
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    useEffect(()=>{
      const getDrivers = async () => {
        const response = await fetch('/data/drivers.json');
        console.log(response)
        const myJson = await response.json();
        console.log(myJson);
        const drivers2 = myJson.data

        // Map Drivers Json
        const list = drivers2.map((driver => {

          // calculate totalMinutes
          const totalMinutes = driver.traces.reduce((total, trace) => {
            return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
          }, 0);

          // Highlight active days
          const activeDays = calendarDates.map(currentDate => {
            const isActive = driver.traces.some(trace => trace.date === currentDate);

            return isActive ? 1 : 0;
          });
            
          console.log("driverid: " + driver.driverID + " totalMinutes: " + totalMinutes + " activeDays: " + activeDays)

          // return full driver object with the addtional totalMinutes and activeDays
          return {...driver, totalMinutes, activeDays}
        }));

        setDriverList(list);
      };

      getDrivers();
    },[])

    const filteredDrivers = driverList.filter(driver =>
      (driver.forename + ' ' + driver.surname).toLowerCase().includes(searchTerm.toLowerCase()) 
      || driver.vehicleRegistration.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    
    return (
        <div className='drivers-page'>
            <input
              className='search-box'
              type="text"
              placeholder="Search for Driver"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />

              <table className='driver-table'>
                <thead>
                  <tr>
                    <th>Driver Name</th>
                    <th>Vehicle Reg</th>
                    <th>Total Activity Duration</th>
                    {calendarDates.map((date, index) => (
                      <th className='day'>{weekdays[new Date(date).getDay()]}</th> 
                    ))}
                  </tr>
                </thead>
                <tbody>
                {filteredDrivers.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.forename} {driver.surname}</td>
                    <td>{driver.vehicleRegistration}</td>
                    <td>{driver.totalMinutes}</td>
                    {driver.activeDays.map((activeDay, index) => (
                      <td key={index} className='day'>
                        <div className='day-box' 
                          style={{ backgroundColor: activeDay ? 'green' : 'white'}} /* Set background color to green if activeDay */ ></div> 
                      </td>
                    ))}
                  </tr>
                ))}
                </tbody>
              </table>
        </div>

    )
};


export default Drivers;