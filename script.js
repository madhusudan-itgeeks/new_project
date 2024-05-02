
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTI3MzYzMjAsImV4cCI6MTc0NDI5MzkyMH0.QtqDtH7puliRZH8qsF9v4Qxuu4ZWcYGxozZ_X_zCRqc';

// fetch('https://mobilify.itgeeks.com/public/admin/partner/list', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
//   body: JSON.stringify({
//     limit: 10,
//     offset: 0,
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));



function callApi() {
    // const token = 'your-bearer-token';
    console.log('hello')
  
    fetch('https://mobilify.itgeeks.com/public/admin/partner/list', {
      method: 'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        limit: 10,
        offset: 0,
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  const button = document.getElementById('my-button');

button.addEventListener('click', () => {
  callApi();
});