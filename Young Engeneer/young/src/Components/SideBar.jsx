import React from 'react'
import logo from '/logo.png'
import '../styles/sidebar.css'

import Programs from '/tasks-solid.svg'
import Groups from '/layer-group-solid.svg'
import Payment from '/money-bill-solid.svg'

const SideBar = () => {
    let data = [
        {name: "Our Programs", icon:Programs },
        {name: "Our Groups", icon:Groups },
        {name: "Payment", icon:Payment },
    ]
  return (
    <div className="sidebar">
        <div className="sidebar-header">
             <img src ={logo} height={50} className="logo" />
        </div>
        <div className="sidebar-body">
            {data.map((item, index) => (
                <div key={index} className="sidebar-item">
                    <img src={item.icon} height={20} className="icon" />    
                    <p>{item.name}</p>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default SideBar
