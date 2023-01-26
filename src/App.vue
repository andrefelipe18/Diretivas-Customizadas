<template>
  <h1 v-texto="configTexto">Minha primeira diretiva customizada</h1>
  <div v-posicao:absolute="'75px'">
    Olá sou um binding de argumento e valor
  </div>
  <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse="'Você encontrará o código A na parte frontal do equipamento.'"> i</span>
  <br>
  <span>Código B: </span><input type="text"><span v-informacao:destacado.doisClicksMouse="'Você encontrará o código B na parte transeira do equipamento, abaixo da tampa de proteção.'"> i</span>
  <br>
  <span>Código B: (sair automaticamente)</span><input type="text"><span v-informacao:destacado.doisClicksMouse.sairAutomatico="'Você encontrará o código B na parte transeira do equipamento, abaixo da tampa de proteção.'"> i</span>
  <br>
  <p v-colorir="'red'">Colorindo esse paragrafo por meio de uma diretiva customizada local</p>
  <p v-colorir="'green'" v-aumentando-texto="'50px'">Aumentando esse paragrafo por meio de uma diretiva customizada IMPORTADA localmente</p>
</template>

<script>
import aumentandoTamanhoTexto from '@/directives/aumentandoTamanhoTexto'
export default {
  name: 'App',
  directives: {
    colorir: {
      created: function(el, binding){
        el.style.color = binding.value
      }
    },
    aumentandoTexto: aumentandoTamanhoTexto
  },
  data() {
    return {
      configTexto : { cor: 'blue', tamanhoFonte: '70px' }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
