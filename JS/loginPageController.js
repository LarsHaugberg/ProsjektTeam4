function login(){
    let attempt = ''
for (let i = 0; i < model.data.users.length; i++) {
    if(model.inputs.loginPage.userName == model.data.users[i].name)
    {
        if(model.inputs.loginPage.password == model.data.users[i].password){
            model.app.currentUser = model.data.users[i].name
            alert("Login Sucess")
            model.inputs.loginPage.userName = ''
            model.inputs.loginPage.password = ''
            attempt = 'Sucess'
            updateView()
        } 
    } 
}
if(attempt != 'Sucess')  {alert('Login failed')}
}
