import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, document.querySelector<any>('#modal-portal')) as React.ReactPortal
}

export default Portal
