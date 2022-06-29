// const axios  = require('axios');
let  wetherForm = document.querySelector('form')

let search = document.querySelector('input')
let message1 = document.getElementById("message-1");
let message2 = document.getElementById("message-2");
let message3 = document.getElementById("message-3");

message1.textContent = 'Loading...';

wetherForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let  location   = search.value;
    location = location.toLowerCase();
    console.log(location);  
    // loading(location);
    await fetch(`/weather?address=${location}`)
       .then((res) => res.json())
       .then((res) => {
         console.log(res);
         if (res.error) {
           message1.textContent = res.error;
         } else {
           message1.innerHTML = `Temperature: ${res.temperature}`;
           message2.innerHTML = `weather in ${(res.address).split(',')[0]} is ${res.weather}`;
           message3.innerHTML = `given location : ${res.address}`;
         }
       })
       .catch((err) => {
         message1.textContent = `please enter valid address: ${err.message}`;
       });    

  })