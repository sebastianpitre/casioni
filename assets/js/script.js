function enviarMensaje(mensaje) {
    // Reemplaza "1234567890" con el número al que deseas enviar el mensaje
    var numeroDestino = "+573002858611";
    var mensajeWhatsapp = encodeURIComponent(mensaje);
    var url = "https://wa.me/" + numeroDestino + "?text=" + mensajeWhatsapp;
    window.open(url);
  }
