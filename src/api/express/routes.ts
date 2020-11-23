import { Router } from 'express'
import { authorizeHTTPAccess } from '../middlewares/auth'
import { Example } from '../../modules/example/controller'
import { multerMidleware } from '../middlewares/multer'

const router = Router()

router.get('/api/healthz', (req, res) => res.status(200).send('Api up and running!'))
router.post('/api/foo', authorizeHTTPAccess, Example.foo)
router.post('/api/upload', authorizeHTTPAccess, multerMidleware.single('fileName'), (req, res) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
router.get('api/callExternal', authorizeHTTPAccess, Example.callExternalService)

export { router }
