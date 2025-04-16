export default function contacto() {
  return `<section class="contacto">
    <div class="contenedor-formulario">
      <form action="forms.php" method="POST">
        <label for="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre" required />
        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" name="correo" required />
        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono" />
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        <div class="checkbox">
          <input type="checkbox" id="terminos" name="terminos" required />
          <label for="terminos">Acepto los <a href="#">términos</a></label>
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  </section>`;
}