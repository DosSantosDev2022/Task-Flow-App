'use server'

import { prisma } from '@/lib/prisma'

export async function GetProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        client: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!project) {
      throw new Error('Projeto não encontrado, verifique ')
    }

    return project
  } catch (error) {
    console.log('Erro ao buscar projeto, verifique :', error)
  }
}
