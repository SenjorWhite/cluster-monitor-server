interface Cluster {
  id: string
  name: string
}

class ClusterManager {
  private clusters: Cluster[] = []

  constructor() {
    this.clusters = []
  }

  get getAllClusters(): Cluster[] {
    return []
  }
}

export default ClusterManager
