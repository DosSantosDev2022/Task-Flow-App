'use client'
import { Task } from '@prisma/client'
import { TaskCard } from './taskCard'
import { TaskStatus, useTaskStore } from '@/store/TaskStore'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import React, { useState } from 'react'

const statusLabels: Record<TaskStatus, string> = {
  A_FAZER: 'A fazer',
  EM_ANDAMENTO: 'Em andamento',
  CONCLUIDO: 'Concluído',
}

interface TypeTaskProps {
  status: TaskStatus
  tasks: Task[]
}

export function TaskByStatus({ status, tasks }: TypeTaskProps) {
  const [open, setOpen] = useState(false)
  const getBorderTopColors = (type: TaskStatus): string => {
    switch (type) {
      case 'A_FAZER':
        return 'border-t-red-600'
      case 'EM_ANDAMENTO':
        return 'border-t-yellow-400'
      case 'CONCLUIDO':
        return 'border-t-green-600'
      default:
        return 'border-t-zinc-600'
    }
  }
  const { updateTask } = useTaskStore()
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: string }, monitor: DropTargetMonitor) => {
      if (monitor.canDrop()) {
        updateTask(item.id, { status })
      }
    },
  })
  const borderTopClass = getBorderTopColors(status)
  const statusLabel = statusLabels[status] || 'Desconhecido'

  const handleOpenColumnTasks = () => {
    setOpen(!open)
  }

  return (
    <div
      ref={drop as unknown as React.LegacyRef<HTMLDivElement>}
      className="col-span-1 lg:col-span-4 border p-2 rounded-md  overflow-y-auto max-h-[468px] scrollbar-thin scrollbar-track-light scrollbar-thumb-accent "
    >
      <div className={`border-t-2 p-4 ${borderTopClass} `}>
        <div
          onClick={handleOpenColumnTasks}
          className="flex items-center justify-between gap-1 rounded-lg cursor-pointer"
        >
          <span className="text-sm font-normal text-primary">
            {statusLabel}
          </span>
          <div className="w-6 h-6 text-xs rounded-full flex items-center justify-center text-primary bg-neutral">
            {tasks.length}
          </div>
        </div>
      </div>
      {open ? (
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div key={task.id}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
