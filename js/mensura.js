import {generarPDF} from './generarPDFMensura.js'

document.addEventListener('DOMContentLoaded', function(){
    /////////////////////////////////////////////////////////////////////
    // Reiniciar checkbox/input/radio al reiniciar pagina //
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    const inputs = document.querySelectorAll('input[type="text"]');
    const inputsMenosPopup = document.querySelectorAll('input[type="text"]:not(.inputPopup)');
    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener('change', validateAndToggleButton);
    // })
    function addCheckboxListeners() {
        const A1Checkbox = document.getElementById('a1');
        const A2Checkbox = document.getElementById('a2');
        const B1Checkbox = document.getElementById('b1');
        const B5Checkbox = document.getElementById('b5');
        const E1Checkbox = document.getElementById('e1');
    
        A1Checkbox.addEventListener('change', validateAndToggleButton);
        A2Checkbox.addEventListener('change', validateAndToggleButton);
        B1Checkbox.addEventListener('change', validateAndToggleButton);
        B5Checkbox.addEventListener('change', validateAndToggleButton);
        E1Checkbox.addEventListener('change', validateAndToggleButton);
    }
    addCheckboxListeners()

    function resetCheckboxRadioInput() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        radios.forEach(radio => {
            radio.checked = false;
        });
        inputs.forEach(input => {
            input.value = '';
        });
        botonCalculo.disabled = true
        botonCalcularEImprimir.disabled = true
    }
    ////////////////////////////////////////////////////////////////////
    // Calculo de resultado //
    function calculoA1() {
        const A1Checkbox = document.getElementById('a1')
        let costoA1 = 0
        if (A1Checkbox.checked) {
            costoA1 += 1500
        }
        return costoA1
    }

    function calculoA2() {
        const A2Checkbox = document.getElementById('a2')
        let costoA2 = 0
        if (A2Checkbox.checked) {
            costoA2 += 3000
        }
        return costoA2
    }

    function calculoA() {
        let costoA = 0
        costoA += calculoA1()
        costoA += calculoA2()
        return costoA
    }

    function calculoB1() {
        const B1Checkbox = document.getElementById('b1')
        let costoB1 = 0
        if (B1Checkbox.checked) {
            costoB1 += 5940
        }
        return costoB1
    }

    function calculoB2() {
        const B2Checkbox = document.getElementById('b2')
        const inputCantidadB2 = document.getElementById('cantidadB2')
        let costoB2 = 0
        if (B2Checkbox.checked) {
            costoB2 += parseInt(inputCantidadB2.value) * 2430 
        }
        return costoB2 
    }

    function calculoB3() {
        const B3Checkbox = document.getElementById('b3')
        const inputCantidadB3 = document.getElementById('cantidadB3')
        let costoB3 = 0
        if (B3Checkbox.checked) {
            costoB3 += parseInt(inputCantidadB3.value) * 2430
        }
        return costoB3
    }

    function calculoB4() {
        const B4Checkbox = document.getElementById('b4')
        const inputCantidadB4 = document.getElementById('cantidadB4')
        let costoB4 = 0
        if (B4Checkbox.checked) {
            costoB4 += parseInt(inputCantidadB4.value) * 2430
        }
        return costoB4
    }

    function calculoB5() {
        const B5Checkbox = document.getElementById('b5')
        let costoB5 = 0
        if (B5Checkbox.checked) {
            costoB5 += 12000
        }
        return costoB5
    }

    function calculoB() {
        let costoB = 0
        costoB += calculoB1() 
        costoB += calculoB2()
        costoB += calculoB3()
        costoB += calculoB4()
        costoB += calculoB5()
        return costoB
    }

    function calculoC() {
        const C1Checkbox = document.getElementById('c1')
        const inputCantidadC1 = document.getElementById('cantidadC1')
        let costoC = 0
        if (C1Checkbox.checked) {
            let costoC1 = parseInt(inputCantidadC1.value) * 2970
            costoC += costoC1
        }
        return costoC
    }

    function calculoD1() {
        const D1Checkbox = document.getElementById('d1')
        const inputCantidadD1 = document.getElementById('cantidadD1')
        let costoD1 = 0
        if (D1Checkbox.checked) {
            costoD1 += parseInt(inputCantidadD1.value) * 4050
        }
        return costoD1
    }

    function calculoD2() {
        const D2Checkbox = document.getElementById('d2')
        const inputCantidadD2 = document.getElementById('cantidadD2')
        let costoD2 = 0
        if (D2Checkbox.checked) {
            costoD2 += parseInt(inputCantidadD2.value) * 4050
        }
        return costoD2
    }

    function calculoD() {
        let costoD = 0
        costoD += calculoD1()
        costoD += calculoD2()
        return costoD
    }

    function calculoE() {
        const E1Checkbox = document.getElementById('e1')
        const inputCantidadE1 = document.getElementById('cantidadE1')
        let costoE = 0
        if (E1Checkbox.checked) {
            costoE += 16000
        }
        return costoE
    }

    function calculoTotal() {
        let costoTotal = 0
        costoTotal += calculoA()
        costoTotal += calculoB()
        costoTotal += calculoC()
        costoTotal += calculoD()
        costoTotal += calculoE()
        return costoTotal
    }


    // ***** Funciones para imprimir ***** //

    function formatearNumero(num) {
        // Convert the number to a string and split it by the decimal point
        let [integerPart, decimalPart] = num.toString().split('.');
      
        // Add a period every three digits in the integer part
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Limit the decimal part to a maximum of three digits
        if (decimalPart) {
            decimalPart = decimalPart.slice(0, 3);  
        }
    
        // Combine the integer part and decimal part, replacing the original decimal point with a comma
        return decimalPart ? `${integerPart},${decimalPart}` : integerPart;
    }

    // ***** Botones Calculo y Imprimir ***** //
    const botonCalculo = document.getElementById('botonCalculo') 
    const botonCalcularEImprimir = document.getElementById('botonCalcularEImprimir')
    const botonImprimir = document.getElementById('botonImprimir')
    const botonCerrarPopup = document.getElementById('botonCerrarPopup')
    const botonLimpiar = document.getElementById('botonLimpiar')

    botonCerrarPopup.addEventListener('click', function() {
        const popup = document.getElementById("popup")
        popup.style.display = "none"
    })
    
    botonCalculo.addEventListener('click', function(e) {
        e.preventDefault();
        let costoTotal = calculoTotal()
        const resultado = document.getElementById('resultado');
        let costoTotalFormateado = formatearNumero(costoTotal)
        resultado.textContent = "$" + costoTotalFormateado;

    })

    botonCalcularEImprimir.addEventListener('click', function(e) {
        e.preventDefault();
        const popup = document.getElementById("popup")
        popup.style.display = "flex"
        let costoTotal = calculoTotal()
        const resultado = document.getElementById('resultado');
        let costoTotalFormateado = formatearNumero(costoTotal)
        resultado.textContent = "$" + costoTotalFormateado;
    })

    botonImprimir.addEventListener('click', function(e) {
        e.preventDefault()
        const solicitante = document.getElementById('popupNombre').value
        const nomenclatura = document.getElementById('popupNomenclatura').value
        const partida = document.getElementById('popupPartida').value
        const objetoMensura = document.getElementById('popupObjetoMensura').value
        let costoTotal = calculoTotal()
        generarPDF(solicitante, nomenclatura, partida, objetoMensura, calculoA1(), calculoA2(), calculoB1(), calculoB2(), calculoB3(), calculoB4(), calculoB5(), calculoC(), calculoD1(), calculoD2(), calculoE(), costoTotal)
    })

    botonLimpiar.addEventListener('click', function(e) {
        e.preventDefault()
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        radios.forEach(radio => {
            radio.checked = false;
        });
        inputs.forEach(input => {
            input.value = '';
        });
        botonCalculo.disabled = true
        botonCalcularEImprimir.disabled = true

        // DESACTIVAR TODOS LOS DIV
        const divB2 = document.getElementById('divB2')
        const divB3 = document.getElementById('divB3')
        const divB4 = document.getElementById('divB4')
        const divC1 = document.getElementById('divC1')
        const divD1 = document.getElementById('divD1')
        const divD2 = document.getElementById('divD2')
        divB2.style.display = 'none'
        divB3.style.display = 'none'
        divB4.style.display = 'none'
        divC1.style.display = 'none'
        divD1.style.display = 'none'
        divD2.style.display = 'none'
    })

    function validateAndToggleButton() {
        let allFilled = true
        let checkboxChecked = false
        let anyVisibleInputs = false
        inputsMenosPopup.forEach(input => {
            if (isElementVisible(input)) {
                anyVisibleInputs = true;
                input.value = input.value.replace(/[^\d]/g, '')
                if (input.value === '') {
                    allFilled = false;
                }
            }
        })

        if (!anyVisibleInputs) {
            allFilled = false;
        }

        const A1Checkbox = document.getElementById('a1')
        const A2Checkbox = document.getElementById('a2')
        const B1Checkbox = document.getElementById('b1')
        const B5Checkbox = document.getElementById('b5')
        const E1Checkbox = document.getElementById('e1')

        if (A1Checkbox.checked || A2Checkbox.checked || B1Checkbox.checked || B5Checkbox.checked || E1Checkbox.checked) {
            checkboxChecked = true;
        }
    
        
        const enableButtons = allFilled || checkboxChecked;
        botonCalculo.disabled = !enableButtons;
        botonCalcularEImprimir.disabled = !enableButtons;
    }
    
    inputsMenosPopup.forEach(input => {
        input.addEventListener('input', validateAndToggleButton);
    });
    
    function isElementVisible(element) {
        return element.offsetParent !== null;
    }


    /////////////////////////////////////////////////////////////
    // Aparicion de div //

    const B2Checkbox = document.getElementById('b2')
    const B3Checkbox = document.getElementById('b3')
    const B4Checkbox = document.getElementById('b4')
    const C1Checkbox = document.getElementById('c1')
    const D1Checkbox = document.getElementById('d1')
    const D2Checkbox = document.getElementById('d2')

    const divB2 = document.getElementById('divB2')
    const divB3 = document.getElementById('divB3')
    const divB4 = document.getElementById('divB4')
    const divC1 = document.getElementById('divC1')
    const divD1 = document.getElementById('divD1')
    const divD2 = document.getElementById('divD2')

   

    B2Checkbox.addEventListener('change', function() {
        if (B2Checkbox.checked) {
            divB2.style.display = 'flex'
        }
        else {
            divB2.style.display = 'none'
            const inputCantidadB2 = document.getElementById('cantidadB2')
            inputCantidadB2.value = ''
            validateAndToggleButton()
        }
    })

    B3Checkbox.addEventListener('change', function() {
        if (B3Checkbox.checked) {
            divB3.style.display = 'flex'
        }
        else {
            divB3.style.display = 'none'
            const inputCantidadB3 = document.getElementById('cantidadB3')
            inputCantidadB3.value = ''
            validateAndToggleButton()
        }
    })

    B4Checkbox.addEventListener('change', function() {
        if (B4Checkbox.checked) {
            divB4.style.display = 'flex'
        }
        else {
            divB4.style.display = 'none'
            const inputCantidadB4 = document.getElementById('cantidadB4')
            inputCantidadB4.value = ''
            validateAndToggleButton()
        }
    })

    C1Checkbox.addEventListener('change', function() {
        if (C1Checkbox.checked) {
            divC1.style.display = 'flex'
        }
        else {
            divC1.style.display = 'none'
            const inputCantidadC1 = document.getElementById('cantidadC1')
            inputCantidadC1.value = ''
            validateAndToggleButton()
        }
    })

    D1Checkbox.addEventListener('change', function() {
        if (D1Checkbox.checked) {
            divD1.style.display = 'flex'
        }
        else {
            divD1.style.display = 'none'
            const inputCantidadD1 = document.getElementById('cantidadD1')
            inputCantidadD1.value = ''
            validateAndToggleButton()
        }
    })

    D2Checkbox.addEventListener('change', function() {
        if (D2Checkbox.checked) {
            divD2.style.display = 'flex'
        }
        else {
            divD2.style.display = 'none'
            const inputCantidadD2 = document.getElementById('cantidadD2')
            inputCantidadD2.value = ''
            validateAndToggleButton()
        }
    })
    resetCheckboxRadioInput();
})
