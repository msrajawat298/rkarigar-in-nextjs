"use client"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import { store } from './store'
import { Provider } from 'react-redux'


type ProvidersProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export function Providers({ children }: ProvidersProps) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>

                {children}
            </QueryClientProvider>
        </Provider>
    )
}