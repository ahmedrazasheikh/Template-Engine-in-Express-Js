import express from 'express';
const app = express()
const port = process.env.PORT || 8000
import student from './Routes/student.js'
import{join} from 'path'
import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', student )
// Set up the Template Engine
app.set('view engine','ejs')






// ===> How to use Static File <====
// app.use(express.static('Controller'))

// app.use(express.static(join(process.cwd(),  'controller' )))
// app.use( '/css' ,   express.static(join(process.cwd(),  'controller/css' )))


// Adding Virtual Path 

// app.use(  '/virtual'  ,express.static(join(process.cwd(),  'controller' )))
app.use( '/raza' ,   express.static(join(process.cwd(),  'Controller/css' )))
app.use( '/tuf' ,   express.static(join(process.cwd(),  'Controller/images' )))


// /options in react js




// app.get('/', (req, res) => {
//     res.send('Ahmed Raza Jafri' + new Date().toString());
// })
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})