import { test } from '@japa/runner'
import ClusterService from '#services/cluster_service'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('ClusterService', (group) => {
  group.setup(async () => {
    await testUtils.db().seed()
  })

  const clusterService = new ClusterService()
  let latestClusterId: number

  test('Should get a list of clusters', async ({ assert }) => {
    const allClusters = await clusterService.getClusterList()

    const expectation = [
      {
        id: 1,
        name: 'Cluster A',
        timezone: 'America/New_York',
      },
      {
        id: 2,
        name: 'Cluster B',
        timezone: 'Europe/London',
      },
      {
        id: 3,
        name: 'Cluster C',
        timezone: 'Asia/Tokyo',
      },
    ]

    assert.deepEqual(allClusters, expectation)
  })

  test('Should create a new cluster', async ({ assert }) => {
    const testCluster = await clusterService.addCluster('test-cluster')
    latestClusterId = testCluster.id
    const actualCluster = await clusterService.getClusterById(latestClusterId)

    assert.deepEqual(actualCluster.name, 'test-cluster')
  })

  test('Should update the timezone', async ({ assert }) => {
    await clusterService.setTimezone('mock-timezone', latestClusterId)
    const actualCluster = await clusterService.getClusterById(latestClusterId)

    assert.deepEqual(actualCluster.timezone, 'mock-timezone')
  })
})
