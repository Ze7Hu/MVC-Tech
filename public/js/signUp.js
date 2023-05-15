const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ username: username, password: password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);