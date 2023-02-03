import { ITodoList } from 'core/interfaces'

export const getTodos: () => Promise<ITodoList | Error> = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const list: ITodoList = [
        {
          id: 1,
          name: '밥주기',
          state: 'todo',
        },
        {
          id: 2,
          name: '밥먹기',
          state: 'completed',
        },
      ]

      resolve(list)
    }, 500),
  )
