import Cluster from '#models/cluster'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cluster.query().delete()

    await Cluster.createMany([
      {
        name: 'Cluster A',
        timezone: 'America/New_York',
      },
      {
        name: 'Cluster B',
        timezone: 'Europe/London',
      },
      {
        name: 'Cluster C',
        timezone: 'Asia/Tokyo',
      },
    ])
  }
}
