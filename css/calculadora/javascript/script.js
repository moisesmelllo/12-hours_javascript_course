let calculation = JSON.parse(localStorage.getItem('calculation')) || '0'
        console.log(calculation)

        paragrafo = document.querySelector('p')
        paragrafo.innerHTML = calculation

        function numero(numero) {
            calculation += numero
            localStorage.setItem('calculation', JSON.stringify(calculation))
            console.log(calculation);

            paragrafo.innerHTML = calculation
        }