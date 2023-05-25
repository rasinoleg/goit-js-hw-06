const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload on form submission
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    alert('All fields must be filled in.');
  } else {
    const formData = {
      email: email,
      password: password
    };
    console.log(formData);
    form.reset();
  };
});







// const form = document.querySelector('.login-form')

// form.addEventListener('submit', handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault()
//     const {
//         elements: { email, password },
//     } = event.currentTarget

//     if (email.value === '' || password.value === '') {
//         return alert('Please fill in all the fields!')
//     }
//     const userDetails = { email: email.value, Password: password.value }
    
//     console.log(userDetails)
//     event.currentTarget.reset()
// }