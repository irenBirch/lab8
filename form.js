// Об'єкт для збереження даних форми
let formData = {
  email: "",
  message: "",
};

// Отримання елемента форми
let feedbackForm = document.querySelector(".feedback-form");
// Обробника події "input" до форми
feedbackForm.addEventListener("input", storeInputData);
// Функція для обробки подій введення даних у форму
function storeInputData(event) {
  let targetElem = event.target;
  let inputEmail = document.querySelector(".feedback-form input[type='email']");
  let inputMessage = document.querySelector(
    ".feedback-form textarea[name='message']"
  );
  // Оновлення даних у formData, якщо змінюється одне з полів форми
  if (targetElem === inputEmail || targetElem === inputMessage) {
    formData.email = inputEmail.value.trim();
    formData.message = inputMessage.value.trim();
  }
  // Збереження об'єкту formData в локальне сховище
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  console.log(localStorage.getItem("feedback-form-state"));
}

// Oбробник події "submit" до форми
feedbackForm.addEventListener("submit", submitInputData);
// Функція для обробки відправки форми
function submitInputData(event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки
  // Отримуємо значення полів форми
  let formElements = feedbackForm.elements;
  let userEmail = formElements["email"].value.trim();
  let userMessage = formElements["message"].value.trim();
  // Перевіряємо, чи обидва поля форми заповнені
  if (userEmail === "" || userMessage === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.clear();
    formData.email = "";
    formData.message = "";
    feedbackForm.reset();
  }
}
// Обробник події "load" для завантаження даних зі сховища
window.addEventListener("load", loadFormData);
// Функція для завантаження даних із локального сховища при завантаженні сторінки
function loadFormData() {
  let savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    //localStorage.clear();
    let userData = JSON.parse(savedData);
    let emailField = document.querySelector(
      ".feedback-form input[type='email']"
    );
    let messageField = document.querySelector(
      ".feedback-form textarea[name='message']"
    );
    // Заповнення полів форми збереженими даними
    emailField.value = userData.email;
    messageField.value = userData.message;
    // Оновлення об'єкта formData з даними зі сховища
    formData.email = userData.email;
    formData.message = userData.message;
  }
}
