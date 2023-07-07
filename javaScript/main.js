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

        
   }
