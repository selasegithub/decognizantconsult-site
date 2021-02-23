// src/components/MenuItem.js
import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./UniversalLink"
//import { Link } from "gatsby"
//Code for Link below was replaced with UniversalLink code
/*<Link style={{marginRight: '20px' }}
     to={CreateLocalLink(menuItem, wordPressUrl)}>
     {menuItem.label}
     </Link>*/
 
const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
  	 <UniversalLink style={{marginRight: '20px' }}
      to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>

    
  )
}
 
export default MenuItem