import ClusterService from '#services/cluster_service'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('cluster', (group) => {
  group.setup(async () => {
    await testUtils.db().seed()
  })

  const clusterService = new ClusterService()

  test('Should return the specific cluster with correct data', async ({ client }) => {
    const response = await client.get('/clusters/1')

    response.assertStatus(200)
    response.assertBody({
      data: {
        id: 1,
        name: 'Cluster A',
        timezone: 'America/New_York',
      },
      links: {
        iops: { read: '/clusters/1/iops/read', write: '/clusters/1/iops/write' },
        configs: '/clusters/1/configs',
      },
    })
  })

  test('Should get a list of clusters', async ({ client }) => {
    const response = await client.get('/clusters')

    response.assertStatus(200)
    response.assertBody({
      data: [
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
      ],
    })
  })

  test('Should get correct iops/read records from the targeted cluster', async ({ client }) => {
    const expectedData = await clusterService.getClusterReadIops(1)

    const response = await client.get('/clusters/1/iops/read')

    response.assertStatus(200)
    response.assertBody({ data: expectedData })
  })

  test('Should get correct iops/write records from the targeted cluster', async ({ client }) => {
    const expectedData = await clusterService.getClusterWriteIops(1)

    const response = await client.get('/clusters/1/iops/write')

    response.assertStatus(200)
    response.assertBody({ data: expectedData })
  })
})
