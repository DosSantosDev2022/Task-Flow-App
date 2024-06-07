'use client'

import { useState } from 'react'
import { FilterTasks } from './filterTasks'
import { TypeTask } from './typeTask'

export type FilterType = 'all' | 'todo' | 'in-progress' | 'completed'

export function Tasks() {
  const [filter, setFilter] = useState<FilterType>('all')

  const tasks = [
    { name: 'Tarefa 1', status: 'todo' },
    { name: 'Tarefa 2', status: 'in-progress' },
    { name: 'Tarefa 3', status: 'completed' },
    { name: 'Tarefa 4', status: 'todo' },
    { name: 'Tarefa 5', status: 'in-progress' },
    { name: 'Tarefa 6', status: 'completed' },
  ]

  const filteredTasks = (status: string) => {
    return tasks.filter((task) => {
      if (filter === 'all') return task.status === status
      return task.status === status && task.status === filter
    })
  }

  return (
    <>
      <FilterTasks onFilterChange={setFilter} />

      <div className="grid grid-cols-12 gap-2 px-2">
        <div className="col-span-4">
          <TypeTask type="A fazer" tasks={filteredTasks('todo')} />
        </div>
        <div className="col-span-4">
          <TypeTask type="Em andamento" tasks={filteredTasks('in-progress')} />
        </div>
        <div className="col-span-4">
          <TypeTask type="Concluídas" tasks={filteredTasks('completed')} />
        </div>
      </div>
    </>
  )
}
