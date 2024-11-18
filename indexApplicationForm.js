const formApplication = document.forms.formApplication;
const inputDateFrom = formApplication.elements.user_date_from;
const inputDateTo = formApplication.elements.user_date_to;
const inputName = formApplication.elements.user_name;
const inputMail = formApplication.elements.user_email;
const inputTel = formApplication.elements.user_tel;
const age=formApplication.elements.age;

const maskOptions = {
  mask: "+{7} ( 0 0 0 ) 0 0 0 - 0 0 - 0 0",
};
const mask = IMask(inputTel, maskOptions);

function validName(e) {
  const name = /^([A-Za-zА-Яа-яЁёs]+\s)*[A-Za-zА-Яа-яЁёs]+$/;
  return name.test(e);
}

function validEmail(e) {
  const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return mail.test(e);
}

formApplication.addEventListener("submit", (e) => {
  if (!validName(inputName.value) || inputName.value == 0) {
    e.preventDefault();
    inputName.style.color = "red";
    inputName.focus();
    inputName.addEventListener("change", () => {
      inputName.style.color = "black";
    });
  } else if (validName(inputName.value)) {
    inputName.style.color = "black";
  }

  if (mask.typedValue.length < 11) {
    e.preventDefault();
    inputTel.style.color = "red";
    inputTel.focus();
  } else if (mask.typedValue.length == 11) {
    inputTel.style.color = "black";
  }

  if (!validEmail(inputMail.value)) {
    e.preventDefault();
    inputMail.style.color = "red";
    inputMail.focus();
  }

  if(inputDateTo.value<inputDateFrom.value){   
    e.preventDefault();
    inputDateTo.style.color = "red";
    inputDateTo.focus();
  }

  // age.forEach(btn=>{
  //   console.log(btn.value)
  // })
});

inputDateFrom.setAttribute("min", new Date().toISOString().split("T")[0]);
inputDateTo.setAttribute("min", new Date().toISOString().split("T")[0]);
