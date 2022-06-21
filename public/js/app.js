let  wetherForm = document.querySelector('form')

let search = document.querySelector('input')
let message1 = document.getElementById("message-1");
let message2 = document.getElementById("message-2");
let message3 = document.getElementById("message-3");

message1.textContent = 'Loading...';
wetherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let  location   = search.value;
    location = location.toLowerCase();
    console.log(location);
    
    fetch(`/weather?address=${location}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
           message1.textContent = data.error;
        } else {
            message1.innerHTML = `Temperature: ${data.temperature}`
            message3.innerHTML = `given location : ${data.address}`
            message2.innerHTML = `weather in ${data.address} is ${data.weather}`;
        //   console.log(data.address);
        //   console.log(data.temperature);
        //   console.log(data.weather);
        }
      }).catch((err) => {
        message1.textContent = `please enter valid address: ${err.message}`;
    })
})