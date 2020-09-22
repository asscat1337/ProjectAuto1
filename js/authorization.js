let login = document.querySelector('.login');
let password = document.querySelector('.pass');
let button = document.querySelector('.btnOk');

const renderText = (text)=>{
    let body = document.querySelector('body');
    let div = document.createElement('div');
    body.append(div);

    div.textContent = text;

    setTimeout(()=>{
        div.remove();
    },1500)
}



button.addEventListener('click',(event)=>{
    event.preventDefault();


    let loginValue = login.value;
    let passValue = password.value;


    if(loginValue =="" && passValue==""){
        renderText("Заполните пустые поля");
    }
    let json = {
        "login":loginValue,
        "password":passValue
    };
    fetch(url="../php/Auth.php",{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(json)

    })  
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        if(data.position){
            window.location.href = '../index.php';
            document.cookie = `user=${data.login}`
        }
        // if(data.position=="admin"){
        //     window.location.href = '../template/admin.php';
        //     document.cookie = `user=${data.login}`
        // }
        // else if(data.position=="Врач кт"){
        //     window.location.href = '../index.php';
        //     document.cookie = `user=${data.login}`
        // }else if(data.position=="Врач пульмонолог"){
        //     window.location.href = '../template/doctorPulmo.php';
        //     document.cookie = `user=${data.login}`
        // }
        // else if(data.position =="Ренген лаборант"){
        //     window.location.href = '../index.php';
        //     document.cookie = `user=${data.login}`
        // }
    })
})



