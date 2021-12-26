import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, description },
    } = request

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    await createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
