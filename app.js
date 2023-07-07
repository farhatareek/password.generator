let btn =document.querySelector(".btn")
let screen = document.querySelector(".input-gn")
let copyBtn = document.querySelector(".copy-btn")

//we can use this method but math.random() not the perfect method for passwords security

// function gnPassword(length=14) {
//     let numbers = "ABFHSKWPEYTCBCDAPSJDSGD1234567890abcdefghijklmnopqrstuvwxyz+=()!@#$%&";
//     let paas =""
//     for (let i = 0; i < length; i++) {
//     let randomNaums = Math.floor(Math.random() * numbers.length)
//     paas += numbers.substring(randomNaums , randomNaums +1)

//     }
//     screen.value = paas
// }

function gnPassword(length=14) {
    let numbers = "ABFHSKWPEYTCBCDAPSJDSGD1234567890abcdefghijklmnopqrstuvwxyz+=()!@#$%&";
    let paas =""
    let crypto = new Uint32Array(length)
    window.crypto.getRandomValues(crypto)
    for (let i = 0; i < length; i++) {
    paas += numbers[crypto[i] % numbers.length]
    }
    screen.value = paas
}

function copy() {
    let val = screen.value
    if(val <= 0){
        alert("generte the password before copy")
    }else{
        navigator.clipboard.writeText(val)
    }
    
}

btn.addEventListener("click" , (e)=>{
    e.preventDefault()
    gnPassword()
})
copyBtn.addEventListener("click" , (el)=>{
    el.preventDefault()
    copy()
    
})