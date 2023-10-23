const form = document.querySelector("form")
const fresp = document.querySelector("h3")

//ouvinte

form.addEventListener("submit",(e) =>{
    e.preventDefault()

    const permitida = Number(form.inPermitida.value)
    const condutor = Number(form.inPermitida.value)
    let leve = permitida + (permitida * 0.2)
    alert(permitida+Condutor+Leve)

    if(condutor <= permitida){
        resp.innerText = `Situação: Sem Multa`

    } else if(condutor <= leve){
        resp.innerText = `Situação: Multa Leve`
    }

      else {
        resp.innerText = `Situação: Multa Grave`
    }
})