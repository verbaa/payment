const cardCheck = document.getElementById("card-input"),
    month = document.querySelector("#month"),
    firstName = document.querySelector("#author"),
    lastName = document.querySelector("#surname");




document.querySelector(".header__logo").onclick = function () {
    window.location.href = 'index.html'
};



cardCheck.addEventListener('keyup', function () {
    let minLeng = document.querySelector('.min-length');
    let successCardImg = document.querySelector(".card__success-img");
    let denyCardImg = document.querySelector(".card__deny-img");
    if (cardCheck.value.length <= 15) {
        cardCheck.style.cssText = ("border: 1px solid #E24C2C; ");
        minLeng.style.cssText = ("visibility: visible");
        denyCardImg.style.cssText = ("visibility: visible");
        successCardImg.style.cssText = ('visibility: hidden');

    } else {
        cardCheck.style.cssText = ("border: 1px solid #2F7E74;");
        minLeng.style.cssText = ("visibility: hidden");
        denyCardImg.style.cssText = ('visibility: hidden');
        successCardImg.style.cssText = ('visibility: visible');
        cardCheck.required = true;

    }

});

month.addEventListener('change', function () {
    let successMonthImg = document.querySelector(".month__success-img");
    if (month.value === " ") {
        month.style.cssText = ("border-color: #E24C2C; color:#333333;");
        successMonthImg.style.cssText = ('visibility: hidden');

    } else {
        month.style.cssText = ("border-color: #2F7E74; color:#333333;");
        successMonthImg.style.cssText = ('visibility: visible');
    }
})
let year = document.querySelector("#years");


year.addEventListener('change', function () {
    let successYearsImg = document.querySelector(".years__success-img");

    if (year.value === " ") {

        successYearsImg.style.cssText = ('visibility: hidden');
        year.style.cssText = ("border-color: #E24C2C; color:#333333;");
    } else {
        year.style.cssText = ("border-color: #2F7E74; color:#333333;");
        successYearsImg.style.cssText = ('visibility: visible');
    }
});

firstName.addEventListener('keyup', function () {
    let successFirstNameImg = document.querySelector(".first-name__success-img");
    if (firstName.value === " ") {
        successFirstNameImg.style.cssText = ('visibility: hidden');
    }
    else {
        successFirstNameImg.style.cssText = ('visibility: visible');
    }
});

lastName.addEventListener('keyup', function () {
    let successLastNameImg = document.querySelector(".last-name__success-img");
    if (lastName.value === " ") {
        successLastNameImg.style.cssText = ('visibility: hidden');
    }
    else {
        successLastNameImg.style.cssText = ('visibility: visible');
    }
});



