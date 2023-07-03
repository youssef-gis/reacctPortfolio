import React from 'react'
import { useThemeContext } from '../context/theme-context'

const Theme_color = ({className}) => {
  const {themeHandler} = useThemeContext()
  return (
    <button className={className} onClick={()=>themeHandler(className)} ></button>
  )
}

export default Theme_color