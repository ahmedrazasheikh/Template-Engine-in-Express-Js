import {join}  from 'path'
const deleteStudent = (req,res)=>{
    console.log(req.params)
    let {id}  = req.params
    // res.send(`<h1>${id} Student Deleted !!!</h1>`)  
    res.sendFile(join(process.cwd(), 'Controller', 'html',  'index.html' ))
    console.log()
    }

    const readStudent = (req,res)=>{
        console.log(req.params)
        let {id} = req.params
        res.send(`<h1>${id} Student Data here !!!</h1>`)  
        } 
    const checkingPurpose = (req,res)=>{
        res.sendFile(  join(process.cwd() , 'Controller/html/index.html'))
        } 
    const addStudent = (req,res)=>{
        console.log(req.params)
        let {id} = req.params
        res.send(`<h1>${id} Student Add!!!</h1>`)  
        } 
    const updateStudent = (req,res)=>{
        console.log(req.params)
        let {id}= req.params
        res.send(`<h1>${id} Student Edit !!!</h1>`)  
        } 

        export {deleteStudent,readStudent,addStudent,updateStudent,checkingPurpose}