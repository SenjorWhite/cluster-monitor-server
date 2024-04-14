import { test } from '@japa/runner'
import ClusterManager from '#services/cluster_manager'

test.group('ClusterManager', () => {
  test('should get a list of clusters', async ({ assert }) => {
    const clusterManager = new ClusterManager()

    const allClusters = await clusterManager.getAllClusters

    const expectation = [
      {
        id: 1,
        name: 'cluster01',
      },
    ]

    assert.deepEqual(allClusters, expectation)
  })
})
