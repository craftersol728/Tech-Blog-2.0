async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    //This line of code is selecting the textarea element with the attribute name "post-content" and getting its value. The value of the textarea will be stored in the variable post_content.
    const post_content = document.querySelector('textarea[name="post-content"]').value;
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    //The code above is splitting the URL of the current window into an array of strings using the '/' character as a separator. The last element of the resulting array is then assigned to the 'id' variable. The purpose of this code is to extract the final value of the URL, which could be an id of a resource (for example a post id in a blog application).
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

      //document.querySelector('#post-form').addEventListener('submit', editPostHandler);
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);