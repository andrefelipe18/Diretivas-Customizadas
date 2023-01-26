export default {
    created: function(el, binding) {
        let tamanho = binding.value || '5em'
        el.style.fontSize = tamanho
    }
}