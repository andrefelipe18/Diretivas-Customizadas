export default {
    created(el, binding){
        const possiveisPosicoes = ['relative', 'absolute', 'fixed']

        if(possiveisPosicoes.includes(binding.arg)){
            el.style.position = binding.arg
            el.style.top = binding.value 
        }

    }
}