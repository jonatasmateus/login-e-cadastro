function validarLogin() {
    var email_login = formLogin.email_login.value;
    var senha_login = formLogin.senha_login.value;

    if (email_login == "") {
        alert("Preencha o campo com o seu e-mail.")
        formCadastro.email_cadastro.focus();
        return false;
    } else if (senha_login == "" || senha_login.length < 6) {
        alert("Preencha o campo com sua senha para logar! (mínimo de 6 e máximo de 8 caracteres)");
        formLogin.senha_login.focus();
        return false;
    } else {
        alert(`Bem vindo ao sistema ${email_login}`);
    }
}

function validarCadastro() {
    var nome_cadastro = formCadastro.nome_cadastro.value;
    var email_cadastro = formCadastro.email_cadastro.value;
    var senha_cadastro = formCadastro.senha_cadastro.value;

    if (nome_cadastro == "") {
        alert("Preencha o campo com o seu nome.")
        formCadastro.nome_cadastro.focus();
        return false;
    } else if (email_cadastro == "") {
        alert("Preencha o campo com o seu e-mail.")
        formCadastro.email_cadastro.focus();
        return false;
    } else if (senha_cadastro == "" || senha_cadastro.length < 6) {
        alert("Preencha o campo com sua senha! (mínimo de 6 e máximo de 8 caracteres)");
        formLogin.senha_cadastro.focus();
        return false;
    } else {
        alert(`Usuário cadastrado com sucesso. \n O e-mail ${email_cadastro} terá que ser validado. \n Favor confirmar o cadastro no seu e-mail.`)
    }
}