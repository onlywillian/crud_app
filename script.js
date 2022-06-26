const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault(); 

    const values = form.querySelectorAll('input');

    fetch('http://localhost:3333/database/users/new', {
        method: "POST",
        body: JSON.stringify({
            name: values[0].value,
            lastName: values[1].value,
            email: values[2].value,
            password: values[3].value,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => { return response.json() })
    .then(json => console.log(json));
});