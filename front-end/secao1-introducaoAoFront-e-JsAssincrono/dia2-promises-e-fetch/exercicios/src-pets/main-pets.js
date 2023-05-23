import './style-cats.css';

const randomDogButton = document.getElementById('randomDog');
const randomCatButton = document.getElementById('randomCat');
const surpriseButton = document.getElementById('surprise');
const img = document.querySelector('#card');

const dogAPI = 'https://dog.ceo/api/breeds/image/random';
const catAPI = 'https://api.thecatapi.com/v1/images/search';

function findDog() {
  return fetch(dogAPI)
    .then((result) => result.json())
    .then((data) => {
      return data.message;
    });
}

function findCat() {
  return fetch(catAPI)
    .then((result) => result.json())
    .then((data) => {
      const [object] = data;
      return object.url;
    });
}

function displayImage(imageUrl) {
  img.src = imageUrl;
}

function surpriseMe() {
  Promise.race([findDog(), findCat()])
    .then((imageUrl) => {
      displayImage(imageUrl);
      // Imagem exibida com sucesso
    })
    .catch((error) => {
      console.error(error);
    });
}

randomDogButton.addEventListener('click', () => {
  findDog().then((imageUrl) => {
    displayImage(imageUrl);
  });
});

randomCatButton.addEventListener('click', () => {
  findCat().then((imageUrl) => {
    displayImage(imageUrl);
  });
});

surpriseButton.addEventListener('click', surpriseMe);
