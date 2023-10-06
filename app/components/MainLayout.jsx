import React from 'react'
import MainHeader from './MainHeader'
export const MainLayout = ({children}) => {
  return (
    <div>
        
       <h1>
       MainLayout
        </h1> 
        <hr/>
        <main>{children}</main>
        </div>
  )
}
