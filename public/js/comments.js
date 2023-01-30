async function commentFormHandler(event) {
    event.preventDefault();
  //https://flaviocopes.com/form-events/
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  //This is code for a comment form handler function that is triggered when a form with a class of "comment-form" is submitted. The function retrieves the value of the comment text entered in the textarea with the name attribute "comment-body". It also retrieves the post_id from the URL of the current page, which is assumed to be in the format "/posts/:id".
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  //The function then sends a POST request to the "/api/comments" endpoint with the comment_text and post_id as the request body in JSON format. If the request is successful, the page is reloaded. If not, an alert with the error status text is displayed.
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);