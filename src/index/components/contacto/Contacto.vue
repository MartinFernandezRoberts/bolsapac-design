<template>
  <div class="pr-2 my-4  md:-mt-10 text-right">
    <h1 class="mr-4 font-mukta text-lg text-right font-mukta w800 ">
        Contacto y Ubicación
    </h1>
   </div>
  <div class="md:flex md:flex-row md:pt-5 w-full"> 
    
    <form class="flex flex-col md:-mt-5 w-72 mx-auto contact-form"  @submit.prevent="sendEmail" >
      

      <label class="font-mukta w800 md:mt-0 mt-1">Nombre:</label>
      <input type="text" placeholder="Ingrese su nombre..." required v-model="nombre" name="nombre">
      
      <label class="font-mukta w800 md:mt-0 mt-1">Correo:</label>
      <input type="email" required placeholder="correo@ejemplo.cl" v-model="email" name="email">

      <label class="font-mukta w800 md:mt-0 mt-1">Teléfono:</label>
      <input type="tel" required placeholder="+56 9 12341234" v-model="tel" name="tel">
      
      <label class="font-mukta w800 mt-2">Comentarios:</label>
      <textarea required placeholder="Comentarios" v-model="comentario" name="mensaje">
      </textarea>
      
      <input type="submit" value='Enviar Comentario.' class="rounded-md border border-green my-4"  >
      
    </form>



  <div class="md:flex md:mx-auto my-auto border-gray-800 border border-solid">
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3005827583575!2d-70.6416548851949!3d-33.623447480724806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d83135b81d3d%3A0x13853695d127df09!2sBolsapac!5e0!3m2!1ses-419!2scl!4v1618882667556!5m2!1ses-419!2scl"
    width="400"
    height="300"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    
    >
    </iframe>
  </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'Contacto',
    data() {
      return{
        email: '',
        nombre: '',
        tel: '',
        comentario: ''

      }
    },
    methods: {
    sendEmail: (e) => {
        emailjs.sendForm('service_a4mfyze', 'template_2jdaaof', e.target, 'user_uNcT90SfTIHEpTCucIJom')
        .then((result) => {
            console.log('Éxito!', result.status, result.text);
      
        }, (error) => {
            console.log('No se ha podido enviar el mensaje...', error);
        });
    
    },
    resetInput(){
      this.nombre = ''
      this.email = ''
      this.comentario = ''
      this.tel = ''
    }
  }
}






</script>