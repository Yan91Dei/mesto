const popupEdit = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__info_button_edit');
const buttonClouse = document.querySelector('.popup__clouse');
const buttonSave = document.querySelector('.popup__button_save');
const formEdit = document.querySelector('.form__edit')
const profileName = document.querySelector('.profile__info_name');
const profileWork = document.querySelector('.profile__info_work');
const inputName = document.querySelector('.popup__input_name');
const inputActivity = document.querySelector('.popup__input_activity');




buttonEdit.addEventListener('click', function(){
 popupEdit.classList.add('popup_opened');

  inputName.value = profileName.textContent
  inputActivity.value = profileWork.textContent


});

buttonClouse.addEventListener('click', function(){
  popupEdit.classList.remove('popup_opened');
});

buttonSave.addEventListener('click', function(){
  popupEdit.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.



  profileName.textContent = inputName.value;
  profileWork.textContent = inputActivity.value;


  // Получите значение полей inputName и InputActivity из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', formSubmitHandler);
