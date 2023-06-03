$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  }); 

// получаем кнопку и модальное окно
var btn = document.getElementById("open-modal");
var modal = document.getElementById("modal");

// получаем элементы формы
var form = modal.querySelector("form");
var nameInput = form.querySelector("#name");
var emailInput = form.querySelector("#email");
var reviewInput = form.querySelector("#review");

// функция, которая открывает модальное окно при нажатии на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// функция, которая закрывает модальное окно при нажатии на крестик
var closeBtn = modal.querySelector(".close");
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// функция, которая отправляет форму на сервер и закрывает модальное окно
form.onsubmit = function(event) {
  event.preventDefault(); // предотвращаем отправку формы по умолчанию
  // здесь можно добавить код для отправки формы на сервер
  modal.style.display = "none"; // закрываем модальное окно
}