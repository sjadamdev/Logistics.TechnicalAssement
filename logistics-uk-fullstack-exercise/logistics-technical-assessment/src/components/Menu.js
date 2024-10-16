import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    
    const [menuItems,setMenuItems]=useState([]);

    const getMenuItems=()=>{
        fetch('/data/menu.json'
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
            setMenuItems(myJson.data)
          });
      }
      
      useEffect(()=>{
        getMenuItems()
      },[])
    
    return (
            <nav style={{ backgroundColor: '#7d1614', width: '200px'}}>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    {menuItems.map((item, index) => (
                        <li key={index} >
                            <Link to={item.url} style={{ color: 'White', fontSize: '24px', textDecoration: 'none', cursor: 'pointer'}} 
                                onMouseEnter={(e) => (e.target.style.color = 'lightgrey')} // Change text color on hover
                                onMouseLeave={(e) => (e.target.style.color = 'White')}
                            >{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
    )
};

export default Menu;