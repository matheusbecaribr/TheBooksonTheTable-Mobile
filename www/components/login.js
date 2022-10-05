window.onload = ()=>{

    let btn = document.getElementById('entrar');
    let login = document.getElementById('login');
    let senha = document.getElementById('senha');

btn.addEventListener('click', ()=>{

    let formData = new FormData();
    formData.append('login', `${login.value}`);
    formData.append('senha', `${senha.value}`);
    fetch('https://thebooksonthetable.profrodolfo.com.br/useromobile.php',

    {
        body: formData,
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    }
        ).then(res=> {res.json().then(data=>{

            if(data.erro){
                alert('Usuário e/ou senha incorretos!');
            }else{
                location.href = 'acervo.html';
            }

        })})
    });
}