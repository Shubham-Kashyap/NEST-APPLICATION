import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

/** module loads all controller */
@Module({
    controllers: [AppController],
})
export class AppModule {}
