async function loginFormHandler(event) {
    event.preventDefault();
  //The code defines two functions loginFormHandler and signupFormHandler, that handle the submit events of two HTML forms, one for user login and the other for user sign up.
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  //The loginFormHandler function is executed when the submit event of the login form is triggered. It first prevents the default form submit behavior using event.preventDefault(). Then it retrieves the values of the email and password inputs using document.querySelector and the value.trim() property. If both values are present, the function sends a HTTP POST request to the "/api/users/login" endpoint with the email and password values in the request body, formatted as JSON and with the content type header set to "application/json". If the response from the server is successful (status code in the 200-299 range), the function replaces the current document's location with the "/dashboard/" URL. If the response is not successful, the function displays an alert with the response's status text.
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
    //The signupFormHandler function works similarly to loginFormHandler, but with the difference that it sends a request to the "/api/users" endpoint instead of "/api/users/login", and the request body includes values for username, email, and password inputs.
  

    //This line of code retrieves the value of an input field in an HTML document with the id of "username-signup", and removes any extra whitespace from the beginning or end of the value using the trim() method. The result is stored in the username variable.
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        //This code is part of a sign-up form handler function. It checks if all required fields (username, email, and password) have values, and if they do, makes a POST request to the /api/users endpoint with the form data stringified as the request body. The Content-Type header is set to 'application/json' to indicate the format of the request body.
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        //If the fetch request returns a response with a status of ok (HTTP status code in the 200-299 range), the page is redirected to /dashboard/. If the response is not ok, an alert with the response's status text is shown to the user.
        headers: { 'Content-Type': 'application/json' }

      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  //This line of code adds a submit event listener to an HTML element with the class "login-form". When the form is submitted, the "loginFormHandler" function will be called and executed.
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);