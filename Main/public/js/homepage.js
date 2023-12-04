const homepage = async () => {
    const response = await fetch('/profile', {
      method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
const dashboard = async () => {
    const response = await fetch('/blogpost', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };


document.querySelector('#homepage').addEventListener('click', homepage);
document.querySelector('#dashboard').addEventListener('click', dashboard);