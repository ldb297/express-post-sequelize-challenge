const express = require('express')
const ejs = require('ejs')
const ejsLayouts  = require('express-ejs-layouts')
const axios = require('axios')

//middleware
const app = express()
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//routes
app.get('/', (req,res)=>{
    res.send(`you made it to the index`)
})

//port
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))