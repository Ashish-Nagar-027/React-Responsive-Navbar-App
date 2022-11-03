import { MenuList } from "./MenuList"
import './Navbar.css'
import { NavLink  } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const menuList = MenuList.map(({url, title},index) => {
        return (
               <li key={index}><NavLink onClick={()=>setShowNav(!showNav)} to={url} className={(navData) => navData.isActive ? "active" : "" } >{title}</NavLink></li>
        )
    })

    const [showNav, setShowNav] = useState(false)

    const showNavItems = () => {
        setShowNav(!showNav)
    }


    return (
           <nav>
                <div className="logo"> 
                VPN<font>Lab</font>
                </div>
                <div className="menu-icon" onClick={showNavItems} >
                    <i className={showNav ?  "fa fa-times" : "fa fa-bars" }></i>
                </div>
                <ul className={showNav ?  "menulist" : "menulist close"} >
                        {menuList}
                </ul>
           </nav>
    )
}
export default Navbar