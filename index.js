const buttonEdit = document.querySelector('.profile__info_button_edit');
const popupEdit = document.querySelector('.popup');
const buttonClouse = document.querySelector('.popup__clouse');
const inputName = document.querySelector('.popup__input_name');
const inputActivity = document.querySelector('.popup__input_activity');
const profileName = document.querySelector('.profile__info_name');
const profileWork = document.querySelector('.profile__info_work');

buttonEdit.addEventListener('click', function() {
  popupEdit.classList.add('popup_opened');
  console.log("работает");
  inputName.value = profileName.textContent;
  inputActivity.value = profileWork.textContent;

});

// garage.classList.add('jaguar');

buttonClouse.addEventListener('click', function(){
  popupEdit.classList.remove('popup_opened');
  console.log("Закрыл");

})

const formEdit = document.querySelector('.form__edit');
const buttonSave = document.querySelector('.popup__button_save');

// buttonSave.addEventListener('click',function(){


//   console.log("SAVEE");

// })

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  profileName.textContent = inputName.value
  profileWork.textContent = inputActivity.value

  popupEdit.classList.remove('popup_opened');
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
};
formEdit.addEventListener('submit', formSubmitHandler);
console.log(formEdit);
