import ClusterService from '#services/cluster_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClustersController {
  async index(ctx: HttpContext) {
    const clusterService = new ClusterService()
    return ctx.response.json(await clusterService.getAllClusters())
  }
}
