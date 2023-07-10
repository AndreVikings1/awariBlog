const form = document.getElementById('form')
const btn = document.getElementById('btn-forms')
const alerta = document.getElementById('alerta')
const result = []

   btn.addEventListener('click', (event)=>{
    event.preventDefault();
       const nome = form.elements['nome']
       const email = form.elements['email']
       const msg = form.elements['msg']

       dados = {
            nome: nome.value,
            email: email.value,
            msg : msg.value
       }

       dadosDaTela(dados)

       
   })
    //   <div class="alerta">
   function dadosDaTela(dados) {

       alerta.classList.add('alerta')
       const elemento = document.createElement('p')
         alerta.appendChild(elemento)

         const btnConfirmar = document.createElement('button')
         btnConfirmar.classList.add('btn-confirmar')
         btnConfirmar.innerHTML += ` Confirmar`
        

      // <button class="btn-confirmar">Confirmar</button>

       elemento.innerHTML += `
            Nome: ${dados.nome} <br>
            Email:${dados.email} <br>
            Mensagem: ${dados.msg}
       `
       alerta.appendChild(btnConfirmar)
       btnConfirmar.addEventListener('click', envioDeDados)
     
   }

   function envioDeDados() {
     location.reload()
   }