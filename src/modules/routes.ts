//! imports-start
import { Router } from 'express'
//! imports-end

class Routes {
  route: Router

  constructor() {
    this.route = Router()
    //! routes-start
    //! routes-end
  }
}
export default new Routes().route
