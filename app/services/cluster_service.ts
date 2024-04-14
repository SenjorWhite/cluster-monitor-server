import Cluster from '#models/cluster'

interface ClusterData {
  id: string
  name: string
}

class ClusterService {
  private clusters: ClusterData[] = []

  constructor() {
    this.clusters = []
  }

  private readJsonFile() {}

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

  async getAllClusters(): Promise<Cluster[]> {
    return await Cluster.all()
  }
}

export default ClusterService
