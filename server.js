
const express = require('express')


const port = process.env.PORT || 2000

const app =express()

app.get('/',(req,res)=>{
    res.send('<h1>Ochindii rooyiiii!!!!</h1>')
})
// app.get('/test',(req,res)=>{
//     res.send("You are at testpage.")
// })
// app.get('/about',(req,res)=>{
//     res.send("<h1>Owned By Owner of the page, trespassing will be proscuted!! ;) . </h1>")
// })

// app.get('/Error',(req,r             K es)=>{
//     res.send("<h1>Error 404 </h1>")
// })

// app.get('/contact',(req,res)=>{
//     res.send("<h1>Contact page owner!!! </h1>")
// })

// app.get('/hehe',(req,res)=>{
//     res.send("<h1>Contact haha page owner!!! </h1>")
// })

app.post('/post',(req,res)=>{
    console.log('Post Request');
    res.send('You are in POST')
})
app.delete('/delete',(req,res)=>{
    console.log('Delete Request');
    res.send('You are in Delete')
})

app.put('/put',(req,res)=>{
    console.log('Put Request');
    res.send('You are in PUT')
})

app.listen(2000,function(req,res){
    console.log(`Server Running  ${port}` );
})