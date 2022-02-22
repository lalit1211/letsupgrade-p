const getData = async () => {
  const { data } = await axios(
    'https://reqres.in/api/users?page=2'
  );

  console.log(data.data);

  data.data.forEach((element) => {
    const card =
      document.createElement('div');
    //# <div></div>
    card.classList.add('card'); //  Styling
    // # <div class="card"></div>
    card.innerHTML = `
    <img class="img" src="${element.avatar}" />
    <div class="m-title">${element.first_name} ${element.last_name} </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    `;
        // . in above; why p tag is not showing?????
    //# <div  class="card">${element.name}</div>
    const container =
      document.getElementById(
        'card-container'
      );
    container.appendChild(card);  
  });
};

getData();









// `---learning code-----------------------------------------------------------------------------------------------------------
// const isEven = (num) => {
//   const res = new Promise(
//     (res, rej) => {
//       // ... time consuming operation -->
//       if (num % 2 === 0) {
//         res('Its a even number');
//       } else {
//         rej("It's not a even number");
//       }
//     }
//   );
//   return res;
// };

// result.then((data) => {
//   console.log(data);
// });

// result.catch((error) => {
//   console.log(error);
// });

// const gettingIsEvenOrNot = async () => {
// try {
//   const result = await isEven(11);
//   console.log(result);
// } catch (failed) {
//   console.log(failed);
// }
// };

// gettingIsEvenOrNot();

// const getData = async () => {
//   const res = await fetch(

//   );

//  console.log(res);
// };

//  'https://jsonplaceholder.typicode.com/users'