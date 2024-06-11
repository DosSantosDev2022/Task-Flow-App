import { TaskCard } from './taskCard'

interface TypeTaskProps {
  type: string
  tasks: { name: string; status: string; date: string }[]
}

export function TypeTask({ type, tasks }: TypeTaskProps) {
  const getBorderTopColors = (type: string): string => {
    switch (type) {
      case 'A fazer':
        return 'border-t-red-600'
      case 'Em andamento':
        return 'border-t-yellow-400'
      case 'Concluídas':
        return 'border-t-green-600'

      default:
        return 'border-t-zinc-600'
    }
  }

  const borderTopClass = getBorderTopColors(type)

  return (
    <div className="col-span-4 border p-2 rounded-md  overflow-y-auto max-h-[468px] scrollbar-thin scrollbar-track-zinc-50 scrollbar-thumb-zinc-600 ">
      <div className={`border-t-2 p-4 ${borderTopClass} `}>
        <div className="flex items-center justify-between gap-1 rounded-lg">
          <span className="text-sm font-normal text-zinc-600">{type}</span>
          <div className="w-6 h-6 text-xs rounded-full flex items-center justify-center text-zinc-800 bg-zinc-300">
            {tasks.length}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            date={task.date}
            status={task.status}
            title={task.name}
            key={task.name}
          />
        ))}
      </div>
    </div>
  )
}
