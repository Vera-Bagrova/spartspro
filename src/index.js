import "./pages/index.css";
import { createCard } from './scripts/card.js'; 
import { initialCards } from './scripts/cards.js'; 

// DOM узлы
const header= document.querySelector(".header");
const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__links-list");
const content = document.querySelector('.content');
const cardsContainer = content.querySelector(".lots__list");


// Обработчик клика по кнопке меню
menuToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
  header.classList.toggle("active");
});

// Закрытие меню при клике вне его
document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
    header.classList.remove("active");
  }
});

// Выводим карточки на страницу
initialCards.forEach((elem) => {
  const card = createCard(elem, handleClick);

  cardsContainer.append(card);
});

// Функция-обработчик события клика по кнопки карточки
const handleClick = (src, name) => {
  /** Пока заглушка */
};
