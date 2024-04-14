import ClusterService from '#services/cluster_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClustersController {
  async index({ response }: HttpContext) {
    const clusterService = new ClusterService()
    return response.json({ data: await clusterService.getClusterList() })
  }
}
