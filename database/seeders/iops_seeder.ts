import Iops from '#models/iops'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Iops.query().delete()
    const startEpochTime = 1712350800
    const mockRecords = generateMockRecords(startEpochTime)
    await Iops.createMany(mockRecords)
  }
}

function generateMockRecords(startEpochTime: number) {
  const records = []
  const startTime = DateTime.fromSeconds(startEpochTime)
  const oneWeekInHours = 7 * 24 // 7 days * 24 hours, could be longer if needed

  for (let i = 0; i < oneWeekInHours; i++) {
    const currentTime = startTime.plus({ hours: i })

    // TODO: extract?
    let randomValue
    if (Math.random() < 0.8) {
      // 80% to generate lower value
      randomValue = Math.floor(Math.random() * 10000)
    } else {
      // 20% to generate higher value
      randomValue = Math.floor(Math.random() * 100000)
    }

    const record = {
      id: i + 1,
      clusterId: 1,
      value: randomValue,
      isWrite: false,
      isRead: true,
      hour: currentTime,
    }

    records.push(record)
  }

  return records
}
