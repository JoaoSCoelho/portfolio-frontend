'use client'

import { SetState } from '@/types/SetState'
import { createContext, PropsWithChildren, useState } from 'react'

export interface IRequest {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  name: string
  path: string
}

type RequestsContext = {
  selectedRequest: string
  requests: IRequest[]
  setSelectedRequest: SetState<string>
  setRequests: SetState<IRequest[]>
}

export const RequestsContext = createContext<RequestsContext>(null!)

export const RequestsProvider = ({ children }: PropsWithChildren) => {
  const [selectedRequest, setSelectedRequest] = useState<string>('get projects')
  const [requests, setRequests] = useState<IRequest[]>([
    {
      name: 'get projects',
      method: 'GET',
      path: '/api/projects',
    },
    {
      name: 'get technologies',
      method: 'GET',
      path: '/api/technologies',
    },
    {
      name: 'create project',
      method: 'POST',
      path: '/api/projects',
    },
    {
      name: 'create technology',
      method: 'POST',
      path: '/api/technologies',
    },
    {
      name: 'update project',
      method: 'PUT',
      path: '/api/projects/:id',
    },
  ])

  return (
    <RequestsContext.Provider
      value={{ selectedRequest, setSelectedRequest, requests, setRequests }}
    >
      {children}
    </RequestsContext.Provider>
  )
}
