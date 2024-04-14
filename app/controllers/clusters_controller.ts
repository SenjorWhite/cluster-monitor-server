import ClusterService from '#services/cluster_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClustersController {
  // TODO: use inject instead
  private clusterService = new ClusterService()

  async index({ response }: HttpContext) {
    return response.json({ data: await this.clusterService.getClusterList() })
  }

  async show({ params, response }: HttpContext) {
    const cluster = await this.clusterService.getClusterById(params.id)
    const iopsUrl = `/clusters/${params.id}/iops`
    const configsUrl = `/clusters/${params.id}/configs`

    return response.json({ data: cluster, links: { iops: iopsUrl, configs: configsUrl } })
  }
}
