const express = require('express');
const path = require('path');
const hbs = require('hbs');
const  geocode = require('./utils/geocoder')
const forcase  = require('./utils/forecast')

const app = express();

// console.log(path.join(__dirname, '../../views'));

const public_path  = path.join(__dirname, '../public');

const  viewpath  = path.join(__dirname, '/templates')
const partial_path  = path.join(__dirname, '/templates/patials')
// console.log()

app.set('view engine','hbs')
app.set('views',viewpath);
hbs.registerPartials(partial_path);
// console.log(path);

app.use(express.static(public_path));

// app.get('',(req,res)=>{ 
//     res.render(index,{
//         title: 'Welcomee',

//     })
// })

app.get('/',(req,res)=>{
    res.render('main',{
        title: 'Weather',
        name : 'hiren'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help-page',
        name : 'hiren'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'aboutpage',
        name : 'hiren'
    })
})

app.get('/weather',(req,res)=>{  
    if(!req.query.address)
    {
        return res.send({
            errer:'You must provide a address'
        })
    }
    let address = req.query.address
    geocode(address,(error,{location,latitude,longitude} = {})=>{
        if(error) return res.send(error);
        else
        {
        // console.log(location,latitude,longitude);
        
        forcase(latitude,longitude,(error,forcaseresponse)=>{
            if(error) return console.error(error);
            else
            {       
                //  console.log(forcaseresponse);
                res.send({
                    address: req.query.address,
                    latitude: latitude,
                    longitude:longitude,
                    temperature:forcaseresponse.temperature,
                    weather :  forcaseresponse.weather
                })
            }
            })
    }
    })
    // geocode(address,(error,{location,latitude,longitude})=>{
    //     console.log(location,latitude,longitude)
    //     if(error) return console.error(error);
   
    
      
// })
})

app.get('/help/*',(req,res)=>{  
    res.render('404',{
        title:'404 page',
        name: 'hiren',
        errormessage: 'help article missing'
    })
})

app.get('*',(req,res)=>{  
    res.render('404',{
        title:'404 page',
        name: 'Got to homepage',
        errormessage: '404 page not found'
    })
})


app.listen(3000,() => {console.log('listening on port 3000')})