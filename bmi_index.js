const form = document.querySelector('form')
//submit type event
form.addEventListener('submit', function (ev) {
    ev.preventDefault() //stopping default going in browser
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2) // to fixed(2)=2 decimal value
        //show the result
        results.innerHTML = `<span>${bmi}</span><br>`
        if (bmi < 18.6) {
            results.innerHTML += "Under Weight"
        }
        if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML += "Normal Range"
        }
        if (bmi > 24.9) {
            results.innerHTML += "Overweight"
        }
    }


});