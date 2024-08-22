
export function generarPDF(solicitante, nomenclatura, partida, objetoMensura, calculoA1, calculoA2, calculoB1, calculoB2, calculoB3, calculoB4, calculoB5, calculoC, calculoD1, calculoD2, calculoE, costoTotal)
{
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
    pdf.text('"Capitulo 10: Derechos de catastro"',300,60)

    //aca va fecha, solicitante, etc
    pdf.setFillColor(0,127,198)
    pdf.rect(295,80,5,175,"F")
    pdf.setFillColor(197,197,197) 
    pdf.rect(20,105,255,20,"F")
    pdf.rect(20,145,255,20,"F")
    pdf.rect(20,185,255,20,"F")
    pdf.rect(320,105,255,20,"F")
    pdf.rect(320,145,255,20,"F")
    // pdf.rect(320,145,255,20,"F")
    // pdf.rect(320,185,255,35,"F")
    pdf.text("Fecha: ",20,100)
    pdf.text(`${sacarFecha()}`,25,120)
    pdf.text("Solicitante: ",20,140)
    pdf.text(`${solicitante}`,25,160)
    pdf.text("Nomenclatura Catastral: ",20,180)
    pdf.text(`${nomenclatura}`,25,200)
    pdf.text("Partida: ",320,100)
    pdf.text(`${partida}`,325,120)
    pdf.text("Objeto de Mensura: ",320,140)
    pdf.text(`${objetoMensura}`,325,160)


    //Linea azul
    pdf.setFillColor(0,127,198)
    pdf.rect(0,260,595,15,"F")

    //Formatear importes
    const calculoA1Formateado = formatearNumero(calculoA1)
    const calculoA2Formateado = formatearNumero(calculoA2)
    const calculoB1Formateado = formatearNumero(calculoB1)
    const calculoB2Formateado = formatearNumero(calculoB2)
    const calculoB3Formateado = formatearNumero(calculoB3)
    const calculoB4Formateado = formatearNumero(calculoB4)
    const calculoB5Formateado = formatearNumero(calculoB5)
    const calculoCFormateado = formatearNumero(calculoC)
    const calculoD1Formateado = formatearNumero(calculoD1)
    const calculoD2Formateado = formatearNumero(calculoD2)
    const calculoEFormateado = formatearNumero(calculoE)
    const importeTotalFormateado = formatearNumero(costoTotal)


    //Articulos
    pdf.text("Corresponde a cada articulo el siguiente importe: ",20,300)

    pdf.setFillColor (185,185,185)
    pdf.rect(20,320,115,20,"F")
    pdf.rect(135,340,140,20,"F")
    pdf.rect(20,360,115,20,"F")
    pdf.rect(135,380,140,20,"F")
    pdf.rect(20,400,115,20,"F")
    pdf.rect(135,420,140,20,"F")
    pdf.rect(20,440,115,20,"F")
    pdf.rect(135,460,140,20,"F")
    pdf.rect(20,480,115,20,"F")
    pdf.rect(135,500,140,20,"F")
    pdf.rect(20,520,115,20,"F")
    pdf.rect(135,540,140,20,"F")
    // pdf.rect(20,560,115,20,"F")
    pdf.rect(135,580,140,20,"F")

    pdf.setFillColor (197,197,197) 
    pdf.rect(135,320,140,20,"F")
    pdf.rect(20,340,115,20,"F")
    pdf.rect(135,360,140,20,"F")
    pdf.rect(20,380,115,20,"F")
    pdf.rect(135,400,140,20,"F")
    pdf.rect(20,420,115,20,"F")
    pdf.rect(135,440,140,20,"F")
    pdf.rect(20,460,115,20,"F")
    pdf.rect(135,480,140,20,"F")
    pdf.rect(20,500,115,20,"F")
    pdf.rect(135,520,140,20,"F")
    pdf.rect(20,540,115,20,"F")
    pdf.rect(135,560,140,20,"F")

    pdf.text("Articulo",25,335)
    pdf.text("Importe",140,335)
    pdf.text("19° - a1",25,355)
    pdf.text(`$${calculoA1Formateado}`,140,355)
    pdf.text("19° - a2",25,375)
    pdf.text(`$${calculoA2Formateado}`,140,375)
    pdf.text("19° - b1",25,395)
    pdf.text(`$${calculoB1Formateado}`,140,395)
    pdf.text("19° - b2",25,415)
    pdf.text(`$${calculoB2Formateado}`,140,415)
    pdf.text("19° - b3",25,435)
    pdf.text(`$${calculoB3Formateado}`,140,435)
    pdf.text("19° - b4",25,455)
    pdf.text(`$${calculoB4Formateado}`,140,455)
    pdf.text("19° - b5",25,475)
    pdf.text(`$${calculoB5Formateado}`,140,475)
    pdf.text("19° - c1",25,495)
    pdf.text(`$${calculoCFormateado}`,140,495)
    pdf.text("19° - d1",25,515)
    pdf.text(`$${calculoD1Formateado}`,140,515)
    pdf.text("19° - d2",25,535)
    pdf.text(`$${calculoD2Formateado}`,140,535)
    pdf.text("19° - e1",25,555)
    pdf.text(`$${calculoEFormateado}`,140,555)
    pdf.text("Total",140,575)
    pdf.text(`$${importeTotalFormateado}`,140,595)

    const urlImagen = "imgs/logo_anguil_40.jpg"
    
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

    // Limit the decimal part to a maximum of three digits
    if (decimalPart) {
        decimalPart = decimalPart.slice(0, 3);
    }

    // Combine the integer part and decimal part, replacing the original decimal point with a comma
    return decimalPart ? `${integerPart},${decimalPart}` : integerPart;
  }