function enviarMensaje(mensaje) {
    // Reemplaza "1234567890" con el número al que deseas enviar el mensaje
    var numeroDestino = "+573225330092";
    var mensajeWhatsapp = encodeURIComponent(mensaje);
    var url = "https://wa.me/" + numeroDestino + "?text=" + mensajeWhatsapp;
    window.open(url);
  }