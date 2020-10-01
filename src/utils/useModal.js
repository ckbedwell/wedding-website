import React from 'react'

import { Modal } from 'components/modal'

export function useModal(children) {
  const [open, setOpen] = React.useState(false)
  const modal = getContent()

  return [modal, setOpen]

  function getContent() {
    if (open) {
      return (
        <Modal close={() => setOpen(false)}>
          {children}
        </Modal>
      )
    }

    return null
  }
}