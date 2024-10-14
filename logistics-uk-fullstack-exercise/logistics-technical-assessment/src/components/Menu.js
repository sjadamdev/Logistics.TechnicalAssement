import React,{useState,useEffect} from 'react';

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
            <nav style={{ backgroundColor: 'lightgreen', color: 'black', width: '200px'}}>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    {menuItems.map((item, index) => (
                        <li key={index} >
                            <a href={item.url} style={{ color: 'black', textDecoration: 'none', cursor: 'pointer'}} 
                                onMouseEnter={(e) => (e.target.style.color = 'lightgrey')} // Change text color on hover
                                onMouseLeave={(e) => (e.target.style.color = 'black')}
                            >{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
    )
};

export default Menu;