const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('/template/client'))
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.post('/',(req,res)=>{
    res.send('a post request')
})
app.put('/',(req,res)=>{
    res.send('a put request')
})
app.delete('/',(req,res)=>{
    res.send('a delete request')
})

app.get('/demo',(req,res)=>{
    res.send('demo page')
})
app.get('/ab?cd',(req,res)=>{
    res.send('so cool abcd acd')
})
app.get('/ab+cd',(req,res)=>{
    res.send('so cool abcd,abbcd,abbbcd,abbbbcd and so on')
})
app.get('/ab*cd',(req,res)=>{
    res.send('so cool abcd,abxcd,absadasdasdcd,ab123cd and so on')
})
app.get('/ab(cd)?e',(res)=>{
    res.sned('so cool /abe or /abcde')
})
app.get('/a/',(res)=>{
    res.send('so cool anything with an "a" in it')
})
app.listen(3500,()=>{
    console.log('listening on port 3000');
})