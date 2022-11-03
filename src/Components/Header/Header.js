import React from 'react'
import IndividualRoutes from '../IndividualRoutes/IndividualRoutes'
import ThemeStyle from '../Styles/ThemeStyle'

function Header() {
  const { bgHeaderColor } = ThemeStyle()
  return (
    <>
      <h1 className={`text-gray-800 opacity-80 ${bgHeaderColor} px-3 text-white py-3`}>Header</h1>

     

    </>
  )
}

export default Header