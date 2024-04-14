import Cluster from '#models/cluster'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cluster.query().delete()

    await Cluster.createMany([
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
    ])
  }
}
