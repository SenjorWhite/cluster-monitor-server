import { test } from '@japa/runner'

test.group('cluster', () => {
  test('get a list of clusters', async ({ client }) => {
    const response = await client.get('/clusters')

    response.assertStatus(200)
    response.assertBody({
      data: [
        {
          id: 1,
          name: 'cluster01',
        },
      ],
    })
  })
})
