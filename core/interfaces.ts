interface ITodo {
  id: number
  name: string
  state: 'todo' | 'completed'
}

export type ITodoList = Array<ITodo>
