import '#config/env/env-loader'
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '#config/swagger.jsonc'

import YouchLogs from '#config/debug/youch-config'

import routes from '#modules/routes'

class ApiConfig {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()

    //! db-start

    //! db-end
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(YouchLogs)
    this.server.use(express.json())
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  }

  routes() {
    this.server.use(routes)
  }
}

export default new ApiConfig().server
