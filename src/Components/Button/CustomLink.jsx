import React from 'react'
import { Link } from "react-router-dom";

function CustomLink({children, handleLinkValue, customStyle, path}) {
  return (
    <>
    <Link style={customStyle} to={path}>{children}</Link>

    </>
  )
}

export default CustomLink
