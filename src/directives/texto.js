export default {
    created(el, binding){
      console.log(binding)
      el.style.color = binding.value.cor
      el.style.fontSize = binding.value.tamanhoFonte
    }
}