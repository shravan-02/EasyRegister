// const submitBtn = <HTMLInputElement>document.getElementById("submit-btn")

// submitBtn.addEventListener("click", () => {
//     let firstName = <HTMLInputElement>document.getElementById("firstname")
//     let middleName = <HTMLInputElement>document?.getElementById("middlename")
//     let lastName = <HTMLInputElement>document.getElementById("lastname")

//     console.log(firstName.value)
// })


const getFormVal = <HTMLFormElement>document.getElementById("form")
console.log(getFormVal)
getFormVal.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submitted")
    let firstName = <HTMLInputElement>document.getElementById("firstname")
    let middleName = <HTMLInputElement>document.getElementById("firstname")
    let lastName = <HTMLInputElement>document.getElementById("lastname")
    let email = <HTMLInputElement>document.getElementById("email")
    let phone = <HTMLInputElement>document.getElementById("phoneNo")
   
    let desigSelect = <HTMLSelectElement>document.getElementById("designation")
    let desigValue = desigSelect.options[desigSelect.selectedIndex].value
    
    let genderSelect = <HTMLSelectElement>document.getElementById("gender")
    let genderValue = genderSelect.options[genderSelect.selectedIndex].value


    console.log(firstName.value, middleName, lastName, email);

    // return firstName.value, middleName.value, lastName.value, email.value, phone.value, desigValue, genderValue;

    if( /^[a-zA-Z]+$/.test(firstName.value) === false){
        firstName.style.border = "1px solid red";
        console.log("false")
    }
    if( /^[a-zA-Z]+$/.test(middleName.value) === false){
        middleName.style.border = "1px solid red";
        console.log("false")
    }
    if( /^[a-zA-Z]+$/.test(lastName.value) === false){
        lastName.style.border = "1px solid red";
        console.log("false")
    }

    if(phone.value.length < 10){
        phone.style.border = "1px solid red";
    }

})  