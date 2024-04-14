import Cluster from '#models/cluster'
import { DateTime } from 'luxon'

interface ClusterData {
  id: number
  name: string
  timezone: string
}

interface IopsData {
  id: number
  value: number
  hour: DateTime
}

class ClusterService {
  async addCluster(name?: string): Promise<Cluster> {
    const cluster = new Cluster()
    cluster.name = name || 'default cluster'
    return await cluster.save()
  }

  async setTimezone(timezone: string, clusterId: number): Promise<Cluster> {
    const cluster = await Cluster.findOrFail(clusterId)
    // TODO: exception handler
    cluster.timezone = timezone
    return await cluster.save()
  }

  async getClusterById(id: number): Promise<ClusterData> {
    const cluster = await Cluster.findOrFail(id)
    return { id: cluster.id, name: cluster.name, timezone: cluster.timezone }
  }

  async getClusterList(): Promise<ClusterData[]> {
    const clusters = await Cluster.query().orderBy('id', 'asc')
    return clusters.map((cluster) => {
      return {
        id: cluster.id,
        name: cluster.name,
        timezone: cluster.timezone,
      }
    })
  }

  // TODO
  async getClusterReadIops(clusterId: number): Promise<IopsData[]> {
    return []
  }

  // TODO
  async getClusterWriteIops(clusterId: number): Promise<IopsData[]> {
    return []
  }
}

export default ClusterService
