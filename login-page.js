function validar(formulario) {

    var username = formulario.username.value
    var password = formulario.password.value
    var msg = document.getElementById('msg')


        if (username === 'roscresc' && password === 'Roger*2019') {
            window.alert('Login Aprovado')
        } else {
            
            msg.style.color = 'red'
            msg.innerText = `\u{2757}  Usuário ou senha estão Incorretos`
            return false;
        }


    formulario.submit()
}