
export function generarPDF(solicitante, ubicacion, tipoObra, tipoConstruccion, superficieObra, referencia, importe20, importe21, importe25, importe26, importe29, importe31, importeTotal) {
    const {jsPDF} = window.jspdf
    const pdf = new jsPDF("p", "pt", "a4")
    // fetch('montserrat-base64.txt').then(response => response.text()).then(montserratBase64 => {
    //     // Add custom font to the PDF
    //     doc.addFileToVFS("Montserrat-Regular.ttf", montserratBase64);
    //     doc.addFont("Montserrat-Regular.ttf", "Montserrat", "normal");
    
    //     // Set font to Montserrat
    //     doc.setFont("Montserrat");})
    // // pdf.text(50, 20, "Esto es el header")
    // // pdf.text(10, 30, "Esto es un parafo")
    
    
    //Header
    pdf.setFillColor(0,127,198)
    pdf.rect(0,0,295,70,"F")
    pdf.setFillColor(185,185,185)
    pdf.rect(295,0,395,30,"F")
    pdf.setFillColor(197,197,197) 
    pdf.rect(295,30,395,40,"F")
    pdf.setFontSize(30)
    pdf.setTextColor(255,255,255)
    pdf.text("Liquidación",65,45)
    pdf.setFontSize(11).split
    pdf.setTextColor(0,0,0)
    pdf.text('Según ordenanza tarifaria 2024',300,45)
    pdf.text('"Capitulo 10: Derechos de construcción"',300,60)

    //aca va fecha, solicitante, etc
    pdf.setFillColor(0,127,198)
    pdf.rect(295,80,5,175,"F")
    pdf.setFillColor(197,197,197) 
    pdf.rect(20,105,255,20,"F")
    pdf.rect(20,145,255,20,"F")
    pdf.rect(20,185,255,20,"F")
    pdf.rect(20,225,255,20,"F")
    pdf.rect(320,105,255,20,"F")
    pdf.rect(320,145,255,20,"F")
    pdf.rect(320,185,255,35,"F")
    pdf.text("Fecha: ",20,100)
    pdf.text(`${sacarFecha()}`,25,120)
    pdf.text("Solicitante: ",20,140)
    pdf.text(`${solicitante}`,25,160)
    pdf.text("Ubicacion de la obra: ",20,180)
    pdf.text(`${ubicacion}`,25,200)
    pdf.text("Referencia: ",20,220)
    pdf.text(`${referencia}`,25,240)
    pdf.text("Tipo de obra: ",320,100)
    pdf.text(`${tipoObra}`,325,120)
    pdf.text("Superficie de obra en m2: ",320,140)
    pdf.text(`${superficieObra}`,325,160)
    pdf.text("Tipo de construcción/es: ",320,180)
    const cantLineasTipoConstruccion = pdf.splitTextToSize(`${tipoConstruccion}`,245)
    let alturaTipoConstruccion = 200
    cantLineasTipoConstruccion.forEach(linea => {
        pdf.text(linea,325,alturaTipoConstruccion)
        alturaTipoConstruccion += 15
    })


    //Linea azul
    pdf.setFillColor(0,127,198)
    pdf.rect(0,260,595,15,"F")

    //Formatear importes
    const importe20Formateado = formatearNumero(importe20)
    const importe21Formateado = formatearNumero(importe21)
    const importe25Formateado = formatearNumero(importe25)
    const importe26Formateado = formatearNumero(importe26)
    const importe29Formateado = formatearNumero(importe29)
    const importe31Formateado = formatearNumero(importe31)
    const importeTotalFormateado = formatearNumero(importeTotal)


    //Articulos
    pdf.text("Corresponde a cada articulo la siguiente suma: ",20,300)

    pdf.setFillColor (185,185,185)
    pdf.rect(20,320,115,20,"F")
    pdf.rect(135,340,140,20,"F")
    pdf.rect(20,360,115,20,"F")
    pdf.rect(135,380,140,20,"F")
    pdf.rect(20,400,115,20,"F")
    pdf.rect(135,420,140,20,"F")
    pdf.rect(20,440,115,20,"F")
    pdf.rect(135,460,140,20,"F")
    // pdf.rect(135,500,140,20,"F")

    pdf.setFillColor (197,197,197) 
    pdf.rect(135,320,140,20,"F")
    pdf.rect(20,340,115,20,"F")
    pdf.rect(135,360,140,20,"F")
    pdf.rect(20,380,115,20,"F")
    pdf.rect(135,400,140,20,"F")
    pdf.rect(20,420,115,20,"F")
    pdf.rect(135,440,140,20,"F")
    // pdf.rect(20,460,115,20,"F")
    pdf.rect(135,480,140,20,"F")

    pdf.text("Articulo",25,335)
    pdf.text("Importe",140,335)
    pdf.text("20°",25,355)
    pdf.text(`$${importe20Formateado}`,140,355)
    pdf.text("21°",25,375)
    pdf.text(`$${importe21Formateado}`,140,375)
    pdf.text("25°",25,395)
    pdf.text(`$${importe25Formateado}`,140,395)
    pdf.text("26°",25,415)
    pdf.text(`$${importe26Formateado}`,140,415)
    pdf.text("29°",25,435)
    pdf.text(`$${importe29Formateado}`,140,435)
    // pdf.text("30°",25,455)
    // pdf.text(`${importe30}`,140,455)
    pdf.text("31°",25,455)
    pdf.text(`$${importe31Formateado}`,140,455)
    pdf.text("Total",140,475)
    pdf.text(`$${importeTotalFormateado}`,140,495)

    const urlImagen = "imgs/logo_anguil_40.jpg"
    console.log(urlImagen)
    
    pdf.addImage(urlImagen,'JPEG',315,300,250,250)

    const nombre = `Liquidacion ${sacarFecha()}.pdf`
    pdf.save(nombre)
}

function sacarFecha() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    const fecha = `${day}-${month}-${year}`;
    return fecha
}

function formatearNumero(num) {
    // Convert the number to a string and split it by the decimal point
    let [integerPart, decimalPart] = num.toString().split('.');
  
    // Add a period every three digits in the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Combine the integer part and decimal part, replacing the original decimal point with a comma
    return decimalPart ? `${integerPart},${decimalPart}` : integerPart;
  }