import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


updateMessage();
function onFormInput() {
  const formdata = { email: form.email.value, message: form.message.value };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formdata));
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.target.email.value;
  const message = e.target.message.value;

  if (email !== '' && message !== '') {
    const FormData = { email, message };
    e.target.reset();
    console.log(FormData);
  } else {
    alert('Все поля должны быть заполнены');
  }
    
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}


function updateMessage() {
    const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedMessageParsed = JSON.parse(savedMessage);


    if (savedMessage) {
        form.email.value = savedMessageParsed.email;
        form.message.value = savedMessageParsed.message;
    }

}