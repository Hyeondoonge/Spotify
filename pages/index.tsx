import Content from 'components/Content'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}

export default Home
