const el = {
  form: document.querySelector(".login-form"),
};

function onSendForm(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email !== "" && password !== "") {
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert("Please fill in all empty fields.");
  }
}

el.form.addEventListener("submit", onSendForm);
