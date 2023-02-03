import { useQuery } from 'react-query'
import { getTodos } from 'api/test'
import { ITodoList } from 'core/interfaces'
import StyledContent from './StyledContent'

export default function Content() {
  const { data, isFetching } = useQuery('todos', getTodos)

  if (isFetching) {
    return <div>fetching...</div>
  }

  return (
    <StyledContent color="pink">
      <ul>
        {(data as ITodoList).map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </StyledContent>
  )
}
