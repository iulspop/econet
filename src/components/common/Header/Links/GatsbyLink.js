import React from "react"
import { Link } from "gatsby"

export const GatsbyLink = ({ to, className, children }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
