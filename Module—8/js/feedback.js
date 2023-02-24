console.log(localStorage);

const refs = {
    form: document.querySelector('form.feedback-form'),
    textarea: document.querySelector('form [name="message"]')
}

// console.log(refs.form);
// console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', onTextInput)

function onFormSubmit(e) {} 

function onTextInput(e) {
    const value = e.currentTarget.value

    console.log(value);
}