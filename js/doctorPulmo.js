

// let link = document.createElement('a');
// let btnDowload = document.createElement('button');
// pulmoContent.insertAdjacentElement('beforeend',btnDowload);
// btnDowload.insertAdjacentElement('beforeend',link);


// link.textContent = 'Загрузить файл';

renderText =(text)=>{
    let div = document.createElement('div');
    pulmoContent.insertAdjacentElement('beforebegin',div);
    div.textContent = text;
}

let  divFio,
     divTel,
     divDate,
     status;    
window.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
            fetch(url='./php/pulmoBack.php',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
        })
        .then(response=>{
            console.log(response);
            if(response.status === 200){
                return response.text();
            }
        })
        .then(data=>{
            if(data=="0"){
                let controller = new AbortController();
                let signal  = controller.signal;
                signal.addEventListener('abort',()=>console.log("abort"));
                controller.abort();
                console.log(signal.aborted);
            }else{
                console.log(data);
                let pulmoContent = document.querySelector('.pulmo__content');
                pulmoContent.insertAdjacentHTML("beforebegin",data);
                let btnUpload = document.querySelector('.btnUpload');
    
    
                btnUpload.addEventListener('click',(event)=>{
                    event.preventDefault();
            
                    let target = event && event.target || event.srcElement;
                    window.location.href="../php/unloadFile.php?file="+target.innerHTML;
            })
            }
})
    },10000)
 
})
let buttonExit = document.querySelector('.buttonExit');
		buttonExit.addEventListener('click',()=>{
			document.location.href = "./auth/authPage.php"
		})
