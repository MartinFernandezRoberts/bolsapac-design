<template>
     <div id="bola"></div>
        <div id="contenedor">
            <button id="btn1">deus</button>
            <button id="btn2">tuex</button>
            <button id="btn3">lacon</button>
            <button id="btn4">tsumare</button>
        </div>

        <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
            crossorigin="anonymous"
        ></script>

        <script>
            $('#btn1').click(hey);
            $('#btn2').click(hey);
            $('#btn3').click(hey);
            $('#btn4').click(hey);

            function hey(e) {
                $('#bola').remove();
                const btn = e.target;
                const bola = document.createElement('div');
                bola.id = 'bola';
                btn.appendChild(bola);
            }
        </script>
</template>

<script>
export default {
    name:'Selector'
}
</script>

<style scoped>
            #contenedor {
                margin: 50px 30vw;
                display: flex;
                justify-content: space-between;
            }

            button {
                position: relative;
            }

            #bola {
                width: 10px;
                height: 10px;
                background-color: red;
                border: black 2px solid;
                border-radius: 10px;
                position: absolute;
                top: 0;
                left: -20px;
            }
</style>