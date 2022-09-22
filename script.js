// submitBtn.addEventListener("click", () => {
//     let firstName = <HTMLInputElement>document.getElementById("firstname")
//     let middleName = <HTMLInputElement>document?.getElementById("middlename")
//     let lastName = <HTMLInputElement>document.getElementById("lastname")
//     console.log(firstName.value)
// })
// const getFormVal = <HTMLFormElement>document.getElementById("form")
// console.log(getFormVal)
// getFormVal.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("submitted")
//     let firstName = <HTMLInputElement>document.getElementById("firstname")
//     let middleName = <HTMLInputElement>document.getElementById("middlename")
//     let lastName = <HTMLInputElement>document.getElementById("lastname")
//     let email = <HTMLInputElement>document.getElementById("email")
//     let phone = <HTMLInputElement>document.getElementById("phoneNo")
//     let desigSelect = <HTMLSelectElement>document.getElementById("designation")
//     let desigValue = desigSelect.options[desigSelect.selectedIndex].value
//     let genderSelect = <HTMLSelectElement>document.getElementById("gender")
//     let genderValue = genderSelect.options[genderSelect.selectedIndex].value
//     console.log(firstName.value, middleName, lastName, email);
//     // return firstName.value, middleName.value, lastName.value, email.value, phone.value, desigValue, genderValue;
//     if( /^[a-zA-Z]+$/.test(firstName.value) === false){
//         firstName.style.border = "1px solid red";
//         console.log("false")
//     }
//     if( /^[a-zA-Z]+$/.test(middleName.value) === false){
//         middleName.style.border = "1px solid red";
//         console.log("false")
//     }
//     if( /^[a-zA-Z]+$/.test(lastName.value) === false){
//         lastName.style.border = "1px solid red";
//         console.log("false")
//     }
//     if(phone.value.length < 10){
//         phone.style.border = "1px solid red";
//     }
// })
var title = document.getElementById("devrevTitle");
var firstName = document.getElementById("firstname");
var middleName = document.getElementById("middlename");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var phone = document.getElementById("phoneNo");
var desigSelect = document.getElementById("designation");
var desigValue = desigSelect.options[desigSelect.selectedIndex].value;
var genderSelect = document.getElementById("gender");
var genderValue = genderSelect.options[genderSelect.selectedIndex].value;
var addressValue = document.getElementById("address-value");
function firstNameValidate() {
    var labelEl = document.getElementById("nameError");
    var rowDisable = document.getElementById("emailPhoneRow");
    var submitBtn = document.getElementById("submit-btn");
    if (/^[a-zA-Z]+$/.test(firstName.value) === false &&
        firstName.value.length > 0) {
        firstName.style.border = "1px solid red";
        rowDisable.style.display = "none";
        labelEl.style.display = "flex";
        title.style.color = "red";
    }
    else {
        firstName.style.border = "none";
        rowDisable.style.display = "flex";
        labelEl.style.display = "none";
        title.style.color = "#ffffff98";
    }
}
function middleNameValidate() {
    var labelEl = document.getElementById("nameError");
    var rowDisable = document.getElementById("emailPhoneRow");
    if (/^[a-zA-Z]+$/.test(middleName.value) === false &&
        middleName.value.length > 0) {
        middleName.style.border = "1px solid red";
        rowDisable.style.display = "none";
        labelEl.style.display = "flex";
        title.style.color = "red";
    }
    else {
        middleName.style.border = "none";
        rowDisable.style.display = "flex";
        labelEl.style.display = "none";
        title.style.color = "#ffffff98";
    }
}
function lastNameValidate() {
    var labelEl = document.getElementById("nameError");
    var rowDisable = document.getElementById("emailPhoneRow");
    if (/^[a-zA-Z]+$/.test(lastName.value) === false &&
        lastName.value.length > 0) {
        lastName.style.border = "1px solid red";
        rowDisable.style.display = "none";
        labelEl.style.display = "flex";
        title.style.color = "red";
    }
    else {
        lastName.style.border = "none";
        rowDisable.style.display = "flex";
        labelEl.style.display = "none";
        title.style.color = "#ffffff98";
    }
}
function phoneValidate() {
    console.log("blur");
    var labelEl = document.getElementById("phoneError");
    var rowDisable = document.getElementById("desigGenderRow");
    if (phone.value[0] !== "9" &&
        phone.value[0] !== "8" &&
        phone.value[0] !== "7" &&
        phone.value[0] !== "6" &&
        phone.value.length > 0) {
        phone.style.border = "1px solid red";
        rowDisable.style.display = "none";
        labelEl.style.display = "flex";
        title.style.color = "red";
    }
    else {
        phone.style.border = "none";
        rowDisable.style.display = "flex";
        labelEl.style.display = "none";
        title.style.color = "#ffffff98";
    }
}
var submitBtn = document.getElementById("form");
submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    var newEmp = { firstName: "".concat(firstName.value), middleName: "".concat(middleName.value), lastName: "".concat(lastName.value), email: "".concat(email.value), phone: "".concat(phone.value), desigValue: "".concat(desigValue), genderValue: "".concat(genderValue), addressValue: "".concat(addressValue) };
    console.log(newEmp);
    title.textContent = "Form Submitted";
});
var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
});
