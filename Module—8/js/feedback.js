// console.log(localStorage);

const refs = {
    form: document.querySelector('form.feedback-form'),
    textarea: document.querySelector('form [name="message"]')
}

const STORAGE_KEY = 'feedback-msg'

// console.log(refs.form);
// console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', onTextInput)

populateTextarea()

function onFormSubmit(e) {
    e.preventDefault()
     
        console.log('send form');

    e.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
} 

function onTextInput(e) {
    const message = e.currentTarget.value
    localStorage.setItem(STORAGE_KEY,message)

    console.log(message);
}

function populateTextarea(e) {
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    if(saveMessage) {
        console.log(saveMessage);

        refs.textarea.value = saveMessage
    }
}