console.log('Client side javascript file is loaded!')

let weatherFcorm = document.querySelector('form')
let search = document.querySelector('input')
let para1 = document.getElementById('para1')
let para2 = document.getElementById('para2')
let paraerr = document.getElementById('paraerr')

weatherFcorm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    para1.textContent = 'Loading...'
    para2.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                paraerr.textContent = data.error
                para1.textContent = ''
            }
            else {
                paraerr.textContent = " "
                para1.textContent = data.location
                para2.textContent = data.forecast
            }
        }).catch((error) => {
            console.log(error)
        })
    }).catch((error) => {
        console.log(error)
    })
})
