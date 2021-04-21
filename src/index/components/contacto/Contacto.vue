<template>
  <div class=" pr-2 -mt-10 md:block hidden text-right">
    <h1 class="pr-4 font-mukta text-lg text-right font-mukta w800 ">
        Contacto
    </h1>
   </div>
  <div class="md:flex md:flex-row md:pt-5 w-full"> 
    <form class="flex flex-col w-72 mx-auto">
      
      <label>Nombre:</label>
      <input type="text" required v-model="name" class="border border-solid">
      
      <label>Correo:</label>
      <input type="email" required v-model="email" class="border border-solid">

      <label>Teléfono:</label>
      <input type="tel" required v-model="tel" class="border border-solid">
      
      <label>Comentarios:</label>
      <textarea required v-model="comentario" class="border border-solid">
      </textarea>
    </form>

  <div class="md:flex md:mx-auto">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3005827583575!2d-70.6416548851949!3d-33.623447480724806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d83135b81d3d%3A0x13853695d127df09!2sBolsapac!5e0!3m2!1ses-419!2scl!4v1618882667556!5m2!1ses-419!2scl"
    width="400"
    height="300"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
    </iframe>
  </div>
  </div>
</template>

<script>
export default {
    name: 'Contacto',
    data() {
      return{
        email: '',
        name: '',
        tel: '',
        comentario: ''
      }
    }
}
</script>