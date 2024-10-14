import React,{useState,useEffect} from 'react';

function Drivers() {

    const [drivers,setDrivers]=useState([]);
    
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
      }
      
      useEffect(()=>{
        getDrivers()
      },[])

    return (
        <div style={{ backgroundColor: 'lightblue', color: 'white', padding: '15px', flex: 1, overflow: 'auto'}}>
            <main className="main-content">
              <table style={{ textAlign: 'left'}}>
                <thead>
                  <tr>
                    <th>Driver Name</th>
                    <th>Vehicle Reg</th>
                  </tr>
                </thead>
                <tbody>
                {drivers.map((driver, index) => (
                  <tr>
                    <td>{driver.forename} {driver.surname}</td>
                    <td>{driver.vehicleRegistration}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </main>
        </div>

    )
};


export default Drivers;