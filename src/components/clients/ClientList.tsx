import React from 'react'
import { useAppSelector } from '../../hooks/redux'

import { ClientItem } from './ClientItem'

export const ClientList: React.FC = () => {
  const clients = useAppSelector((state) => state.client.list)

  return (
    <div className="main_content">
      {clients.map((client) => (
        <ClientItem key={client.id} {...client} />
      ))}
    </div>
  )
}
