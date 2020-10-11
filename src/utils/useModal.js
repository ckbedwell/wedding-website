import React from 'react'

import { Modal } from 'components/modal'

export function useModal(children) {
  const [open, setOpen] = React.useState(false)
  const modal = getContent()

  return [modal, handleClick]

  function getContent() {
    if (open) {
      return (
        <Modal close={() => handleClick(false)}>
          {children}
        </Modal>
      )
    }

    return null
  }

  function handleClick(beOpen) {
    setOpen(beOpen)

    if (beOpen) {
      document.querySelector(`html`).style.overflow = `hidden`
    } else {
      document.querySelector(`html`).style.overflow = `auto`
    }
  }
}