const butn1 = document.querySelector('#btn')
const message = document.querySelector('#message')
const message2 = document.querySelector('#message2')
const myform = document.querySelector('#myform') 

myform.addEventListener('submit', (event ) => {

    event.preventDefault()

    message.textContent  = 'Loading...'
    message2.textContent = ''

    fetch('/joke').then((response) => {

    response.json().then((data) => {

        if(response.error) {
            return message.textContent = 'Please Try Later'
        }
        message.textContent  = 'Parth : ' +data.setup
        message2.textContent = 'Raju : ' +data.punchline
        
    })

   
    /*  req.end(function (res) {
        if (error) {
          return  console.log('error')
        }*/
    })

})
