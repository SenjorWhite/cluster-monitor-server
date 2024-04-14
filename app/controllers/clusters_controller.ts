import type { HttpContext } from '@adonisjs/core/http'

export default class ClustersController {
  async index(ctx: HttpContext) {
    return ctx.response.json({ data: [{ id: 1, name: 'cluster01' }] })
  }
}
