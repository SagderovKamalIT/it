document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#order__form");
  const phoneInput = document.getElementById("phone");

  // Маска для ввода телефона
  if (phoneInput) {
    Inputmask("+7 (999) 999-99-99").mask(phoneInput);
  }

  if (form) {
    form.addEventListener("submit", submitForm);
  } else {
    console.log("Форма не найдена");
  }

  async function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const formButton = document.querySelector('.order__btn');
    const formSendResult = document.querySelector('.form__send-result');

    if (formSendResult) {
      formSendResult.textContent = '';
    }

    // Очистим старые ошибки под полями
    document.querySelectorAll('.form__error').forEach(span => {
      span.textContent = '';
    });

    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value.trim().replace(/\s+/g, ' ');
    });

    const errors = validateForm(formDataObject);

    if (errors.length > 0) {
      console.log("Ошибки валидации:", errors);

      // Показ ошибок под полями
      errors.forEach(error => {
        const errorSpan = document.querySelector(`.form__error[data-for="${error.field}"]`);
        if (errorSpan) {
          errorSpan.textContent = error.message;
        }
      });

      // Общая ошибка
      if (formSendResult) {
        formSendResult.textContent = 'Пожалуйста, исправьте ошибки в форме.';
        formSendResult.style.color = 'red';
      }

      return;
    }

    // Если ошибок нет — отправка данных
    sendFormData(form, formButton, formSendResult, formDataObject);
  }

  async function sendFormData(form, formButton, formSendResult, formDataObject) {
    try {
      formButton.textContent = 'Отправка...';
      formButton.disabled = true;

      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        formSendResult.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
        formSendResult.style.color = 'green';
        form.reset();
      } else if (response.status === 422) {
        const errors = await response.json();
        console.log(errors);
        throw new Error('Ошибка валидации данных');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error.message);
      formSendResult.textContent = 'Письмо не отправлено! Попробуйте позже.';
      formSendResult.style.color = 'red';
    } finally {
      formButton.textContent = 'Отправить'; 
      formButton.disabled = false;
    }
  }

  function validateForm(formData) {
    const { name, phone } = formData;
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    const errors = [];

    if (!name) {
      errors.push({ field: 'name', message: 'Пожалуйста, введите ваше ФИО.' });
    } else if (name.length < 5 || name.length > 50) {
      errors.push({ field: 'name', message: 'Введите корректное ФИО. Пример: Иванов Иван Иванович' });
    }

    if (!phone) {
      errors.push({ field: 'phone', message: 'Пожалуйста, введите номер телефона.' });
    } else if (!phoneRegex.test(phone)) {
      errors.push({ field: 'phone', message: 'Введите корректный номер. Пример: +7 (999)999-99-99' });
    }

    return errors;
  }
});
