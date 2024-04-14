import { test } from '@japa/runner'
import ClusterService from '#services/cluster_service'

test.group('ClusterService', () => {
  const clusterService = new ClusterService()
  test('Should create a new cluster', async ({ assert }) => {
    const newCluster = await clusterService.addCluster('test-cluster')

    assert.deepEqual(newCluster.name, 'test-cluster')
  })
  test('Should get a list of clusters', async ({ assert }) => {
    const allClusters = await clusterService.getAllClusters()

    const expectation = [
      {
        id: 1,
        name: 'cluster01',
      },
    ]

    assert.deepEqual(allClusters, expectation)
  })
})
