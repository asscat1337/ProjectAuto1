let button = document.querySelector('.btn');
let pass = document.querySelector('.pass');
let login = document.querySelector('.login');
let fio = document.querySelector('.fio');
let form = document.querySelector('.form');
let selected = document.querySelector('.selected');

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
    let selectedValue = selected.value
    let passValue = pass.value;
    let loginValue = login.value;
    let fioValue = fio.value;
    console.log(selectedValue);
    
    let data = {
        "password":passValue,
        "login":loginValue,
        "fio":fioValue,
        "selected":selectedValue
    }
    
    fetch(url="/php/regist.php",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.status){
            renderText(data.status);
            form.reset();
        }
    });
})