<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $correo = htmlspecialchars(trim($_POST["correo"]));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));

    if (!isset($_POST["terminos"])) {
        echo "Debes aceptar los términos y condiciones.";
        exit;
    }

    $to = "bgonzalez81@uan.edu.co"; 
    $subject = "Nuevo mensaje desde el formulario de contacto";
    $body = "Has recibido un nuevo mensaje desde el sitio web.\n\n";
    $body .= "Nombre: $nombre\n";
    $body .= "Correo: $correo\n\n";
    $body .= "Mensaje:\n$mensaje\n";

    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        
        header("Location: gracias.html");
        exit;
    } else {
        echo "Hubo un problema al enviar tu mensaje. Intenta nuevamente más tarde.";
        exit;
    }
} else {
    echo "Acceso no autorizado.";
    exit;
}
?>