import Cluster from '#models/cluster'
import Iops from '#models/iops'
import { DateTime } from 'luxon'

interface ClusterData {
  id: number
  name: string
  timezone: string
}

interface IopsData {
  id: number
  value: number
  hour: number
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

  // TODO: Combine two functions with flags?
  async getClusterReadIops(clusterId: number): Promise<IopsData[]> {
    const readIops = await Iops.query()
      .where('clusterId', clusterId)
      .andWhere('isRead', true)
      .orderBy('hour', 'asc')

    return readIops.map((data) => {
      return {
        id: data.id,
        value: data.value,
        hour: data.hour.toSeconds(),
      }
    })
  }

  // TODO: Combine two functions with flags?
  async getClusterWriteIops(clusterId: number): Promise<IopsData[]> {
    const writeIops = await Iops.query()
      .where('clusterId', clusterId)
      .andWhere('isWrite', true)
      .orderBy('hour', 'asc')

    return writeIops.map((data) => {
      return {
        id: data.id,
        value: data.value,
        hour: data.hour.toSeconds(),
      }
    })
  }
}

export default ClusterService
