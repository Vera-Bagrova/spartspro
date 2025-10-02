// Получаем Темплейт карточки
const getTemplate = () => {
  return document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);
};

// Категории товаров и соответствующие классы
export const categories = {
  "in stock": "card__mark_inStock",
  "on request": "card__mark_onRequest",
};

// Функция создания карточки (принимает в качестве параметров данные карточки, функции обработки её событий)
export const createCard = (cardData, openPopup) => {
  const cardElement = getTemplate();
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardMark = cardElement.querySelector(".card__mark");
  const cardText = cardElement.querySelector(".card__text");
  const cardButton = cardElement.querySelector(".card__button");

  /**  присваиваем значения элементов клонированного шаблона */
  cardImage.src = cardData.img;
  cardImage.alt = cardData.title;
  cardTitle.textContent = cardData.title;
  cardText.textContent = cardData.text;

  if (cardData.category) {
    cardMark.classList.add(categories[cardData.category]);
  }

  /** обработчик клика по кнопке, по которому будет вызван переданный в аргументах колбэк */
  cardButton.addEventListener("click", () => {
    // openPopup(cardData.img, cardData.title);
  });

  return cardElement;
};
