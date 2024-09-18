const formApplication = document.forms.formApplication;
const inputs = document.querySelectorAll(".input-application");
const inputDateFrom = formApplication.elements.user_date_from;
const inputDateTo = formApplication.elements.user_date_to;
const inputMail = formApplication.elements.user_email;
const inputTel = formApplication.elements.user_tel;

const maskOptions = {
  mask: "+{7} ( 0 0 0 ) 0 0 0 - 0 0 - 0 0",
};
const mask = IMask(inputTel, maskOptions);

inputTel.addEventListener("blur", () => {
  if (mask.typedValue.length < 11) {
    inputTel.style.color = "red";
    inputTel.focus();
  } else if (mask.typedValue.length == 11) {
    inputTel.style.color = "black";
  }
});

inputMail.addEventListener("blur", () => {
  inputMail.style.color = "black";
  if (!inputMail.value.includes("@") || !inputMail.value.includes(".")) {
    inputMail.style.color = "red";
    inputMail.focus();
  }
});

inputDateFrom.setAttribute("min", new Date().toISOString().split("T")[0]);
inputDateTo.setAttribute("min", new Date().toISOString().split("T")[0]);

console.log(inputs)
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.boxShadow = " 0px 0px 0px 1px $gray_300 inset";
    input.style.color = "$black";
  })
})