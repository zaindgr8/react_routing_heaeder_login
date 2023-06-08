import React from 'react'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div>
       
        <div>{<Header/>}</div>
        {children}
    </div>
  )
}

export default Layout