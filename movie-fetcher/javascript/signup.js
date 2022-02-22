import user  from '../database/user.js';

// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let password = document.getElementById('password');







document.getElementById('signup').addEventListener('click', ( ) =>{
    const userObj =  {
        // name: name.value,
        // email: email.value,
        // password: password.value,
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
    }
    console.log(userObj);
    user.push(userObj);
    console.log(user);
})
// console.log(user);
// console.log(userObj);

document.getElementById('signup').addEventListener('click',() => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    user.push(userObj);
    return;
});


// user.push(userObj);
console.log(user);