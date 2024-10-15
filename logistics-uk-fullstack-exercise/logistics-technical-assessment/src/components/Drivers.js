import React,{useState,useEffect} from 'react';

function Drivers() {

    const [drivers,setDrivers]=useState([]);
    
    // get drivers from json
    const getDrivers=()=>{
        fetch('/data/drivers.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setDrivers(myJson.data)
          });
      };
      
    const [driverList,setDriverList]=useState([]);
    
    const getDriversList=()=>{
      getDrivers()

      const list = drivers.map((driver => {
        const totalMinutes = driver.traces.reduce((total, trace) => {
          return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
        }, 0);

        return {...driver, totalMinutes}
      }));

      setDriverList(list);
    }

    useEffect(()=>{
      getDrivers()

      // Map Drivers Json and calculate totalMinutes
      const list = drivers.map((driver => {
        const totalMinutes = driver.traces.reduce((total, trace) => {
          return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
        }, 0);

        return {...driver, totalMinutes}
      }));

      setDriverList(list);

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
                  </tr>
                </thead>
                <tbody>
                {driverList.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.forename} {driver.surname}</td>
                    <td>{driver.vehicleRegistration}</td>
                    <td>{driver.totalMinutes}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </main>
        </div>

    )
};


export default Drivers;