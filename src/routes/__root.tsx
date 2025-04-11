import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider  attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Outlet />
            <Footer />
          </div>
          <TanStackRouterDevtools />
        </ThemeProvider>
      </QueryClientProvider>
  )
}