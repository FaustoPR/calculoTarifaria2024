document.addEventListener('DOMContentLoaded', function(){
    /////////////////////////////////////////////////////////////////////
    // Reiniciar checkbox/input/radio al reiniciar pagina //
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    const inputs = document.querySelectorAll('input[type="text"]');

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
        botonImprimir.disabled = true
    }
    ////////////////////////////////////////////////////////////////////
    // Calculo de resultado //


    // ***** Calculo de Superficie Total ***** //
    function calculoSuperficieTotal() {
        const inputSuperficieAmpliacion = document.getElementById('superficieAmpliacion')
        const inputSuperficieConformeObra = document.getElementById('superficieConformeObra')
        const inputSuperficieDemolicion = document.getElementById('superficieDemolicion')
        const inputSuperficieObraNueva = document.getElementById('superficieObraNueva')
        let superficieTotal = 0
        
        if (inputSuperficieAmpliacion.value !== '') {
            superficieTotal += parseFloat(inputSuperficieAmpliacion.value.replace(',','.'))
        }
        if (inputSuperficieConformeObra.value !== '') {
            superficieTotal += parseFloat(inputSuperficieConformeObra.value.replace(',','.'))
        }
        if (inputSuperficieDemolicion.value !== '') {
            superficieTotal += parseFloat(inputSuperficieDemolicion.value.replace(',','.'))
        }
        if (inputSuperficieObraNueva.value !== '') {
            superficieTotal += parseFloat(inputSuperficieObraNueva.value.replace(',','.'))
        }

        return superficieTotal
    }

    // ***** Calculo Articulo 20 ***** //
    function calculoArticulo20(superficieMax) {
        if (superficieMax > 0 && superficieMax <= 120) {
            return 5832
        } else if (superficieMax > 120 && superficieMax <= 500) {
            return 16035
        } else if (superficieMax > 500 && superficieMax <= 1000) {
            return 43320
        } else if (superficieMax > 1000) {
            return 88485
        } else {return 0}
    }

    // ***** Calculo Articulo 21 ***** //    
    function calculoArticulo21() {
        const inputSuperficieConformeObra = document.getElementById('superficieConformeObra')

        if (inputSuperficieConformeObra.value !== '') {
            let superficieConformeObra = inputSuperficieConformeObra.value
            if (superficieConformeObra > 0 && superficieConformeObra <= 120) {
                return 5370
            } else if (superficieConformeObra > 120 && superficieConformeObra <= 500) {
                return 16035
            } else if (superficieConformeObra > 500 && superficieConformeObra <= 1000) {
                return 21615
            } else if (superficieConformeObra > 1000) {
                return 43320
            } else {return 0}
        } else {
            return 0
        }}

    // ***** Calculo Articulo 25 ***** //

    function calculoVivienda() {
        if (divViviendaParticular.style.display === 'flex') {
            const superficieViviendaParticular = document.getElementById('superficieViviendaParticular')
            let costoViviendaParticular = parseFloat(superficieViviendaParticular.value.replace(',','.')) * 204
            console.log(`Costo Vivienda Particular: ${costoViviendaParticular}`)
            return costoViviendaParticular
        } else if (divViviendaSocial.style.display === 'flex') {
            const superficieViviendaSocial = document.getElementById('superficieViviendaSocial')
            let costoViviendaSocial = parseFloat(superficieViviendaSocial.value.replace(',','.')) * 81
            console.log(`Costo Vivienda Social: ${costoViviendaSocial}`)
            return costoViviendaSocial
        }
        return 0
    }

    function calculoUsoComercial() {
        if (divUsoComercialDepositoEtc.style.display === 'flex') {
            const superficieDepositoEtc = document.getElementById('superficieDepositoEtc')
            let costoDepositoEtc = parseFloat(superficieDepositoEtc.value.replace(',','.')) * 273
            console.log(`Costo Deposito: ${costoDepositoEtc}`)
            return costoDepositoEtc
        } else if (divUsoComercialBancosHoteles.style.display === 'flex') {
            const superficieBancosHoteles = document.getElementById('superficieBancosHoteles')
            let costoBancosHoteles = parseFloat(superficieBancosHoteles.value.replace(',','.')) * 429
            console.log(`Costo Bancos y Hoteles: ${costoBancosHoteles}`)
            return costoBancosHoteles
        }
        return 0
    }

    function calculoConstruccionIndustrial() {
        console.log("calculo construccion industrial")
        if (divConstruccionIndustrialFabricas.style.display === 'flex') {
            const superficieFabricas = document.getElementById('superficieFabricas')
            console.log(superficieFabricas)
            let costoFabricas = parseFloat(superficieFabricas.value.replace(',','.')) * 288
            console.log(`Costo Fabricas: ${costoFabricas}`)
            return costoFabricas
        } else if (divConstruccionIndustrialGalpones.style.display === 'flex') {
            const superficieGalpones = document.getElementById('superficieGalpones')
            let costoGalpones = parseFloat(superficieGalpones.value.replace(',','.')) * 183
            console.log(`Costo Galpones: ${costoGalpones}`)
            return costoGalpones
        } else if (divConstruccionIndustrialTinglados.style.display === 'flex') {
            const superficieTinglados = document.getElementById('superficieTinglados')
            let costoTinglados = parseFloat(superficieTinglados.value.replace(',','.')) *  108
            console.log(`Costo Tinglados: ${costoTinglados}`)
            return costoTinglados
        }
        return 0
    }

    function calculoConstruccionVarias() {
        if (divConstruccionesVariasCineEtc.style.display === 'flex') {
            const superficieCineEtc = document.getElementById('superficieCineEtc')
            let costoCineEtc = parseFloat(superficieCineEtc.value.replace(',','.')) * 546
            console.log(`Costo Cine y etc: ${costoCineEtc}`)
            return costoCineEtc
        } else if (divConstruccionesVariasClubesEtc.style.display === 'flex') {
            const superficieClubesEtc = document.getElementById('superficieClubesEtc') 
            let costoClubesEtc = parseFloat(superficieClubesEtc.value.replace(',','.')) * 738
            console.log(`Costo Clubes y etc: ${costoClubesEtc}`)
            return costoClubesEtc
        } 
        return 0
    }

    function calculoTanques() {
        const cantTanques = document.getElementById('cantTanques')
        let costoTanques = parseFloat(cantTanques.value.replace(',','.')) * 5000
        console.log(`Costo Tanques: ${costoTanques}`)
        return costoTanques
    }

    function calculoToldo() {
        const inputToldo = document.getElementById('superficieToldo')
        let costoToldo = parseFloat(inputToldo.value.replace(',','.')) * 90
        console.log(`Costo Toldo: ${costoToldo}`)
        return costoToldo
    }
    



    function calculoArticulo25() {
        const divVivienda = document.getElementById('divVivienda')
        const divUsoComercial = document.getElementById('divUsoComercial')
        const divConstruccionIndustrial = document.getElementById('divConstruccionIndustrial')
        const divConstruccionesVarias = document.getElementById('divConstruccionesVarias')
        const divCantTanques = document.getElementById('divCantTanques')
        const divToldo = document.getElementById('divToldo')
        let costoArticulo25 = 0
        console.log("calculo articulo 25")
        if (divVivienda.style.display === 'flex') {
            console.log("calculo vivienda")
            costoArticulo25 += calculoVivienda()
        }
        if (divUsoComercial.style.display === 'flex') {
            console.log("calculo uso comercial")
            costoArticulo25 += calculoUsoComercial()
        }
        if (divConstruccionIndustrial.style.display === 'flex') {
            console.log("calculo construccion industrial")
            costoArticulo25 += calculoConstruccionIndustrial()
        }
        if (divConstruccionesVarias.style.display === 'flex') {
            console.log("calculo construccion varia")
            costoArticulo25 += calculoConstruccionVarias()
        }
        if (divCantTanques.style.display === 'flex') {
            console.log("calculo tanques")
            costoArticulo25+= calculoTanques()
        }
        if (divToldo.style.display === 'flex') {
            console.log("calculo toldo")
            costoArticulo25 += calculoToldo()
        }
        return costoArticulo25
    }

    // ***** Calculo Articulo 26 ***** // 
    function calculoArticulo26() {
        const superficieCubierta = document.getElementById('superficieCubierta')
        let costoArticulo26 = parseFloat(superficieCubierta.value.replace(',','.')) * 648
        return costoArticulo26
    }

    // ***** Calculo Articulo 29 ***** //
    function calculoArticulo29(superficieMax) {
        let costoArticulo29 = superficieMax * 465
        return costoArticulo29
    }

    // ***** Calculo Articulo 31 ***** //
    function calculoArticulo31() {
        const conformeObraCheckbox = document.getElementById('conformeObra')
        let costoArticulo31 = 0
        if (conformeObraCheckbox.checked) {
            costoArticulo31 += 3000
        }
        return costoArticulo31
    }

    const botonCalculo = document.getElementById('botonCalculo') 
    const botonImprimir = document.getElementById('botonImprimir')

    // const inputSuperficiesPrincipales = document.getElementsByClassName('superficiesPrincipales')
    // const arraySuperficiesPrincipales = Array.from(inputSuperficiesPrincipales)    
    
    botonCalculo.addEventListener('click', function(e) {
        e.preventDefault();

        let superficieTotal = calculoSuperficieTotal()
        let costoTotal = 0
        costoTotal += calculoArticulo20(superficieTotal)
        costoTotal += calculoArticulo21()
        costoTotal += calculoArticulo25()
        costoTotal += calculoArticulo26()
        costoTotal += calculoArticulo29(superficieTotal)
        costoTotal += calculoArticulo31()
        


        const resultado = document.getElementById('resultado');

        resultado.textContent = costoTotal;
        console.log(`Superficie Total: ${superficieTotal}`)

    })

    botonImprimir.addEventListener('click', function(e) {
        e.preventDefault();

        const resultado = document.getElementById('resultado');

        resultado.textContent = "Total";
    })

    function validateAndToggleButton() {
        let allFilled = true;
        
        inputs.forEach(input => {
            if (isElementVisible(input)) {
                input.value = input.value.replace(/[^\d.,]/g, '');
    
                if (input.value === '') {
                    allFilled = false;
                }
            }
        });
    
        botonCalculo.disabled = !allFilled;
        botonImprimir.disabled = !allFilled;
    }
    
    inputs.forEach(input => {
        input.addEventListener('input', validateAndToggleButton);
    });
    
    function isElementVisible(element) {
        return element.offsetParent !== null;
    }


    /////////////////////////////////////////////////////////////
    // Aparicion de div pt1 //

    const ampliacionCheckbox = document.getElementById('ampliacion')
    const conformeObraCheckbox = document.getElementById('conformeObra')
    const demolicionCheckbox = document.getElementById('demolicion')
    const obraNuevaCheckbox = document.getElementById('obraNueva')

    const divAmpliacionM2 = document.getElementById('divAmpliacion')
    const divConformeObraM2 = document.getElementById('divConformeObra')
    const divDemolicionM2 = document.getElementById('divDemolicion')
    const divObraNuevaM2 = document.getElementById('divObraNueva')

    ampliacionCheckbox.addEventListener('change', function() {
        if (ampliacionCheckbox.checked) {
            divAmpliacionM2.style.display = 'flex'
        }
        else {
            divAmpliacionM2.style.display = 'none'
            const inputSuperficieAmpliacion = document.getElementById('superficieAmpliacion')
            inputSuperficieAmpliacion.value = ''
        }
    })

    conformeObraCheckbox.addEventListener('change', function() {
        if (conformeObraCheckbox.checked) {
            divConformeObraM2.style.display = 'flex'
        } else {
            divConformeObraM2.style.display = 'none'
            const inputSuperficieConformeObra = document.getElementById('superficieConformeObra')
            inputSuperficieConformeObra.value = ''
        }
    })

    demolicionCheckbox.addEventListener('change', function() {
        if (demolicionCheckbox.checked) {
            divDemolicionM2.style.display = 'flex'
        } else {
            divDemolicionM2.style.display = 'none'
            const inputSuperficieDemolicion = document.getElementById('superficieDemolicion')
            inputSuperficieDemolicion.value = ''
        }
    })

    obraNuevaCheckbox.addEventListener('change', function() {
        if (obraNuevaCheckbox.checked) {
            divObraNuevaM2.style.display = 'flex'
        } else {
            divObraNuevaM2.style.display = 'none'
            const inputSuperficieObraNueva = document.getElementById('superficieObraNueva')
            inputSuperficieObraNueva.value = ''
        }
    })

    /////////////////////////////////////////////////////////////
    // Aparicion de div pt2 //

    const viviendaCheckbox = document.getElementById('vivienda')
    const comercialCheckbox = document.getElementById('comercial')
    const industrialCheckbox = document.getElementById('industrial')
    const variasCheckbox = document.getElementById('varias')
    const tanquesCheckbox = document.getElementById('tanques')
    const toldoCheckbox = document.getElementById('toldo')

    const divVivienda = document.getElementById('divVivienda')
    const divUsoComercial = document.getElementById('divUsoComercial')
    const divConstruccionIndustrial = document.getElementById('divConstruccionIndustrial')
    const divConstruccionesVarias = document.getElementById('divConstruccionesVarias')
    const divCantTanques = document.getElementById('divCantTanques')
    const divToldo = document.getElementById('divToldo')

    viviendaCheckbox.addEventListener('change', function() {
        if (viviendaCheckbox.checked) {
            divVivienda.style.display = 'flex'
        }
        else {
            divVivienda.style.display = 'none'
            divViviendaParticular.style.display = 'none'
            divViviendaSocial.style.display = 'none'
        }
    })

    comercialCheckbox.addEventListener('change', function() {
        if (comercialCheckbox.checked) {
            divUsoComercial.style.display = 'flex'
        }
        else {
            divUsoComercial.style.display = 'none'
            divUsoComercialBancosHoteles.style.display = 'none'
            divUsoComercialDepositoEtc.style.display = 'none'
        }
    })

    industrialCheckbox.addEventListener('change', function() {
        if (industrialCheckbox.checked) {
            divConstruccionIndustrial.style.display = 'flex'
        }
        else {
            divConstruccionIndustrial.style.display = 'none'
            divConstruccionIndustrialFabricas.style.display = 'none'
            divConstruccionIndustrialGalpones.style.display = 'none'
            divConstruccionIndustrialTinglados.style.display = 'none'
        }
    })

    variasCheckbox.addEventListener('change', function() {
        if (variasCheckbox.checked) {
            divConstruccionesVarias.style.display = 'flex'
        }
        else {
            divConstruccionesVarias.style.display = 'none'
            divConstruccionesVariasCineEtc.style.display = 'none'
            divConstruccionesVariasClubesEtc.style.display = 'none'
        }
    })

    tanquesCheckbox.addEventListener('change', function() {
        if (tanquesCheckbox.checked) {
            divCantTanques.style.display = 'flex'
        }
        else {
            divCantTanques.style.display = 'none'
        }
    })

    toldoCheckbox.addEventListener('change', function() {
        if (toldoCheckbox.checked) {
            divToldo.style.display = 'flex'
        }
        else {
            divToldo.style.display = 'none'
        }
    })

    // Aparicion de div pt3 //
    const viviendaParticularRadio = document.getElementById('viviendaParticular')
    const viviendaSocialRadio = document.getElementById('viviendaSocial')
    const usoComercialDepositoEtcRadio = document.getElementById('usoComercialDepositoEtc')
    const usoComercialBancosHotelesRadio = document.getElementById('usoComercialBancosHoteles')
    const construccionIndustrialFabricasRadio = document.getElementById('construccionIndustrialFabricas')
    const construccionIndustrialGalponesRadio = document.getElementById('construccionIndustrialGalpones')
    const construccionIndustrialTingladosRadio = document.getElementById('construccionIndustrialTinglados')
    const construccionesVariasCineEtcRadio = document.getElementById('construccionesVariasCineEtc')
    const construccionesVariasClubesEtc = document.getElementById('construccionesVariasClubesEtc')


    const divViviendaParticular = document.getElementById('divViviendaParticular')
    const divViviendaSocial = document.getElementById('divViviendaSocial')
    const divUsoComercialDepositoEtc = document.getElementById('divUsoComercialDepositoEtc')
    const divUsoComercialBancosHoteles = document.getElementById('divUsoComercialBancosHoteles')
    const divConstruccionIndustrialFabricas = document.getElementById('divConstruccionIndustrialFabricas')
    const divConstruccionIndustrialGalpones = document.getElementById('divConstruccionIndustrialGalpones')
    const divConstruccionIndustrialTinglados = document.getElementById('divConstruccionIndustrialTinglados')
    const divConstruccionesVariasCineEtc = document.getElementById('divConstruccionesVariasCineEtc')
    const divConstruccionesVariasClubesEtc = document.getElementById('divConstruccionesVariasClubesEtc')

    viviendaParticularRadio.addEventListener('click', function() {
        if (viviendaParticularRadio.checked) {
            divViviendaParticular.style.display = 'flex'
            divViviendaSocial.style.display = 'none'
        }
    })
    viviendaSocialRadio.addEventListener('click', function() {
        if (viviendaSocialRadio.checked) {
            divViviendaParticular.style.display = 'none'
            divViviendaSocial.style.display = 'flex'
        }
    })
    usoComercialDepositoEtcRadio.addEventListener('click', function() {
        if (usoComercialDepositoEtcRadio.checked) {
            divUsoComercialDepositoEtc.style.display = 'flex'
            divUsoComercialBancosHoteles.style.display = 'none'
        }
    })
    usoComercialBancosHotelesRadio.addEventListener('click', function() {
        if (usoComercialBancosHotelesRadio.checked) {
            divUsoComercialDepositoEtc.style.display = 'none'
            divUsoComercialBancosHoteles.style.display = 'flex'
        }
    })
    construccionIndustrialFabricasRadio.addEventListener('click', function() {
        if (construccionIndustrialFabricasRadio.checked) {
            divConstruccionIndustrialFabricas.style.display = 'flex'
            divConstruccionIndustrialGalpones.style.display = 'none'
            divConstruccionIndustrialTinglados.style.display = 'none'
        }
    })
    construccionIndustrialGalponesRadio.addEventListener('click', function() {
        if (construccionIndustrialGalponesRadio.checked) {
            divConstruccionIndustrialFabricas.style.display = 'none'
            divConstruccionIndustrialGalpones.style.display = 'flex'
            divConstruccionIndustrialTinglados.style.display = 'none'
        }
    })
    construccionIndustrialTingladosRadio.addEventListener('click', function() {
        if (construccionIndustrialTingladosRadio.checked) {
            divConstruccionIndustrialFabricas.style.display = 'none'
            divConstruccionIndustrialGalpones.style.display = 'none'
            divConstruccionIndustrialTinglados.style.display = 'flex'
        }
    })
    construccionesVariasCineEtcRadio.addEventListener('click', function() {
        if (construccionesVariasCineEtcRadio.checked) {
            divConstruccionesVariasCineEtc.style.display = 'flex'
            divConstruccionesVariasClubesEtc.style.display = 'none'
        }
    })

    construccionesVariasClubesEtc.addEventListener('click', function() {
        if (construccionesVariasClubesEtc.checked) {
            divConstruccionesVariasCineEtc.style.display = 'none'
            divConstruccionesVariasClubesEtc.style.display = 'flex'
        }
    })





    resetCheckboxRadioInput();
})
