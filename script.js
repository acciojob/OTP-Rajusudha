//your JS code here. If required.
const inputes=document.querySelectorAll('.otp-card-inputes input')
const button=document.querySelector('otp-card button')
inputes.forEach(input=>{
    letlastInputStatus=0
    input.onkeyup=(e)=>{
    const currentElement=e.target
    constnextElement=input.nextElememtSibling
    const prevElement=input.previousElimentSibling
    if(prevElement && e.keycode===8){
        if(letlastInputStatus===1){
            prevElement.focus()
        }
        button.setAttribute('disabled',true);
        lastInputStatus=1
    }else{
        const reg=/^[0-9]+$/
        if(!reg.test(currentElement.value)){
            currentElement.value=currentElement.value(/D/9);
        } else{ if(currentElement.value){
            if(nextElememt){
                nextElememt.focus()
            } else{
                button.removeAttribute('disabled')
                lastInputStatus=0
            
            }
        }
        }
    }
    }
})