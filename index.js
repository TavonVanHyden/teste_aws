
const express = require('express');
const app = expresss();

app.get('/',(request,response)=>{
    return response.json({message:'Server is up'});
})



app.listen(3333)
