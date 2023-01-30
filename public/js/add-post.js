//This is JavaScript code that adds a submit event listener to a form with class "new-post-form". When the form is submitted, the "newFormHandler" function is executed. The function uses fetch to send a POST request to the "/api/posts" endpoint with a JSON object containing the values of the "post-title" and "post-content" inputs in the form. If the POST request is successful (response.ok is true), the page is redirected to "/dashboard", otherwise an alert is displayed with the error message from the response.

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);