$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  }); 

// // JavaScript-код для модального окна

// // Получаем кнопку "Оставить отзыв"
// var openModalBtn = document.getElementById("openModal");

// // Получаем модальное окно
// var modal = document.getElementById("modal");

// // Получаем кнопку для закрытия модального окна
// var closeBtn = document.getElementsByClassName("close")[0];

// // При клике на кнопку "Оставить отзыв" открываем модальное окно
// openModalBtn.onclick = function() {
//   modal.style.display = "block";
// };

// // При клике на кнопку "Закрыть" закрываем модальное окно
// closeBtn.onclick = function() {
//   modal.style.display = "none";
// };

// // При клике вне модального окна закрываем его
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };


// получаем кнопку и модальное окно
var btn = document.getElementById("reviewBtn");
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