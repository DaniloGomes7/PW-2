function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){   
        alert('Login aceito')
        location.href = './html/home.html'
    }else{
    
        alert('Erro usuario ou senha incorretos');
    }


}