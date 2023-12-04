const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
      body: JSON.stringify({ name, description, needed_funding }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogpost');
    } else {
      alert('Failed to create blogpost');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/blogpost');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};



//   const homepage = async () => {
//     const response = await fetch('/profile', {
//       method: 'GET',
//     //   headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
// const dashboard = async () => {
//     const response = await fetch('/blogpost', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
 
 
document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);

document.querySelector('.project-list').addEventListener('click', delButtonHandler);

// document.querySelector('#homepage').addEventListener('click', newFormHandler);
// document.querySelector('#dashboard').addEventListener('click', dashboard);