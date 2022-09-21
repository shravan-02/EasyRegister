// const submitBtn = <HTMLInputElement>document.getElementById("submit-btn")
// submitBtn.addEventListener("click", () => {
//     let firstName = <HTMLInputElement>document.getElementById("firstname")
//     let middleName = <HTMLInputElement>document?.getElementById("middlename")
//     let lastName = <HTMLInputElement>document.getElementById("lastname")
//     console.log(firstName.value)
// })
var getFormVal = document.getElementById("form");
console.log(getFormVal);
getFormVal.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted");
    var firstName = document.getElementById("firstname");
    var middleName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phoneNo");
    var desigSelect = document.getElementById("designation");
    var desigValue = desigSelect.options[desigSelect.selectedIndex].value;
    var genderSelect = document.getElementById("gender");
    var genderValue = genderSelect.options[genderSelect.selectedIndex].value;
    console.log(firstName.value, middleName, lastName, email);
    // return firstName.value, middleName.value, lastName.value, email.value, phone.value, desigValue, genderValue;
    if (/^[a-zA-Z]+$/.test(firstName.value) === false) {
        firstName.style.border = "1px solid red";
        console.log("false");
    }
    if (/^[a-zA-Z]+$/.test(middleName.value) === false) {
        middleName.style.border = "1px solid red";
        console.log("false");
    }
    if (/^[a-zA-Z]+$/.test(lastName.value) === false) {
        lastName.style.border = "1px solid red";
        console.log("false");
    }
    if (phone.value.length < 10) {
        phone.style.border = "1px solid red";
    }
});
