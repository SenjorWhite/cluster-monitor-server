import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cluster extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // TODO: assign an uuid to cluster model

  @column()
  declare name: string

  @column()
  declare timezone: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
