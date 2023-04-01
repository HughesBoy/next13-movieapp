import React from 'react'
import Link from 'next/link'

const MenuItem = ({ title, path}) => {
  return (
    <>
      <Link href={path} className="mx-4 lg:mx-6 hover:text-amber-600">
        <span className="text-lg my-2">{title}</span>
      </Link>
    </>
  )
}

export default MenuItem