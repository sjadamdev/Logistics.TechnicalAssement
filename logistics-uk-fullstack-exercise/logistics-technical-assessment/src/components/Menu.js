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
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
    )
};

export default Menu;