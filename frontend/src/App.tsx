import { AIChatbot } from '@/core/app/AIChatbot'
// ===================
// ©AngelaMos | 2026
// App.tsx
// ===================

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { queryClient } from '@/core/api'
import { router } from '@/core/app/routers'

export default function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
      <AIChatbot projectName="Canary Token Generator" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
