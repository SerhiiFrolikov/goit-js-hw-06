const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Будь-ласка заповніть усі поля!");
    } else {
        const loginFormData = {
        email: email.value,
        password: password.value,
    };

    console.log(loginFormData);
        event.currentTarget.reset();
}
}