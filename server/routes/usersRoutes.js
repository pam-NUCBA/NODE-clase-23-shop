import express from 'express'
import {getUsers, getOneUser} from '../controllers/UsersController.js';
import expressAsyncHandler from 'express-async-handler'

const router = express.Router()

router.get('/', expressAsyncHandler(getUsers))
router.get('/:id', expressAsyncHandler(getOneUser))

export default router