'use client'

import { SetState } from '@/types/SetState'
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios'
import { createContext, PropsWithChildren, useState } from 'react'

export interface IResponse {
  body: any
  headers: any
  statusCode: number
  statusText: string
  response?: AxiosResponse
}

type Tab = 'preview' | 'headers' | 'html'

type ResponseContext = {
  response: IResponse | undefined
  setResponse: SetState<IResponse | undefined>
  tab: Tab
  setTab: SetState<Tab>
  isLoading: boolean
  setIsLoading: SetState<boolean>
}

export const ResponseContext = createContext<ResponseContext>(null!)

export const ResponseProvider = ({ children }: PropsWithChildren) => {
  const [response, setResponse] = useState<IResponse>()
  const [tab, setTab] = useState<Tab>('preview')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <ResponseContext.Provider
      value={{ response, setResponse, tab, setTab, isLoading, setIsLoading }}
    >
      {children}
    </ResponseContext.Provider>
  )
}
