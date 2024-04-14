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

    const readRecord = {
      clusterId: 1,
      value: getRandomIopsValue(),
      isWrite: false,
      isRead: true,
      hour: currentTime,
    }

    records.push(readRecord)

    const writeRecord = {
      clusterId: 1,
      value: getRandomIopsValue(),
      isWrite: true,
      isRead: false,
      hour: currentTime,
    }

    records.push(writeRecord)
  }

  return records
}

function getRandomIopsValue(threshold: number = 0.8): number {
  let randomValue
  if (Math.random() < threshold) {
    // (default) 80% to generate lower value
    randomValue = Math.floor(Math.random() * 10000)
  } else {
    // (default) 20% to generate higher value
    randomValue = Math.floor(Math.random() * 100000)
  }

  return randomValue
}
