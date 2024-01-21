//Select the output elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

//Select the input elements
const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");

//Select the error elements
const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

let isValid = false

submitBtn.addEventListener('click', calculateAge)

inputDay.addEventListener('input', e => {
  if (inputDay.value > 31) {
    errorDay.innerHTML = "Must be a valid date";
    isValid = false;
    return;
  }
  else {
    isValid = true;
    errorDay.innerHTML = "";
  }
  if (+inputDay.value === 0) {
    isValid = false
    errorDay.innerHTML = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.innerHTML = "";
  }
})

inputDay.addEventListener('input', e => {
  if (inputDay.value > 31) {
    errorDay.innerHTML = "Must be a valid date";
    isValid = false;
    return;
  }
  else {
    isValid = true;
    errorDay.innerHTML = "";
  }
  if (+inputDay.value === 0) {
    isValid = false
    errorDay.innerHTML = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.innerHTML = "";
  }
});

inputMonth.addEventListener('input', e => {
  if (inputMonth.value > 12) {
    errorMonth.innerHTML = "Must be a valid month";
    isValid = false;
    return;
  }
  else {
    isValid = true;
    errorMonth.innerHTML = "";
  }
  if (+inputMonth.value === 0) {
    isValid = false
    errorMonth.innerHTML = "This field is required";
    isValid = false;
    return;
  } else {
    errorMonth.innerHTML = "";
  }
});

inputYear.addEventListener('input', e => {
  if (inputYear.value > 2024) {
    errorYear.innerHTML = "Must be a valid year";
    isValid = false;
    return;
  }
  else {
    isValid = true;
    errorYear.innerHTML = "";
  }
  if (+inputYear.value === 0) {
    isValid = false
    errorYear.innerHTML = "This field is required";
    isValid = false;
    return;
  } else {
    errorYear.innerHTML = "";
  }
});

function calculateAge() {
  if (isValid) {
    let birthday = `${inputDay.value}/${inputMonth.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayobj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayobj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    outputDay.innerHTML = ageDay;
    outputMonth.innerHTML = ageMonth;
    outputYear.innerHTML = ageYears;
  } else {
    alert("error")
  }
}

