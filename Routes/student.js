import express from 'express';
const router = express.Router()
import {checkingPurpose,deleteStudent,readStudent,addStudent,updateStudent} from '../Controller/student.controler.js'
router.get('/', checkingPurpose  )
router.get('/delete/:id', deleteStudent  )
router.get('/edit/:id', updateStudent )
router.get('/add/:id', addStudent )
router.get('/read/:id', readStudent )

export default router;