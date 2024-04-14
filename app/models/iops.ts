import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Iops extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clusterId: number

  @column()
  declare value: number

  // TODO: separate the read and write to different tables in the future
  @column()
  declare isWrite: boolean

  @column()
  declare isRead: boolean

  @column.dateTime()
  declare hour: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
