const express = require("express");
const app=express();
const path=require("path");
app.get('/',(req, res)=>{
    const ruta=path.join(__dirname, 'DH-Heroes/views/index.html')
    res.sendFile(ruta);
})

app.get('/babbage',(req, res)=>{
    const ruta=path.join(__dirname, 'DH-Heroes/views/babbage.html')
    res.sendFile(ruta);
})

app.get('/berners-lee',(req, res)=>{
    const ruta=path.join(__dirname, 'DH-Heroes/views/berners-lee.html')
    res.sendFile(ruta);
})

app.listen(3030,() => console.log('Servidor corriendo'))