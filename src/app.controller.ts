import { Controller, Get } from '@nestjs/common'

/**
 * -----------------------------------------------------
 * App Controller
 * -----------------------------------------------------
 */
@Controller()
export class AppController {
    /**
     * -----------------------------------------------------
     * Get Root route
     * -----------------------------------------------------
     */
    @Get()
    GetRootRoute() {
        return 'Hi there, This is our first nest application'
    }

    /**
     * -----------------------------------------------------
     * Get bye
     *-----------------------------------------------------
     */
    @Get()
    getBye() {
        return 'Bye there , see you in the next session'
    }
}
