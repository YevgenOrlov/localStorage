let formData = {}; //пустой массив куда складывать данные из форм
const form = document.querySelector("form"); //в константу присваиваем  саму форму с кот работать
// данные из  input username  по ай ди  имени
const LS = localStorage; //константа равная локал сторадж

form.addEventListener("input", function (event) {
  //  перехватываем событие на форме
  //   console.log(event.target.value); //получение и вывод  из инпута данных
  //   console.log(event.target.name); //получение и вывод  из инпута  названия  username
  formData[event.target.name] = event.target.value; //помещаем данные ключ name:value
  // в массив formData
  //   console.log(formData);// проверка получения данных в formData
  LS.setItem("formData", JSON.stringify(formData)); //cохранение данных внутри localStorage
  // под ключем formData с переводом их в строчные данные
});

if (LS.getItem("formData")) {
  //проверка информации в localStorage,
  formData = JSON.parse(LS.getItem("formData")); // если она есть перевод в обьект
  console.log(formData); // проверка в консоли перевода из строки в обьект
  console.log(form.elements); //обращение к форме для проверки элементов, где в виде ключей лежат имена
  //form.elements[name] обращение к элементу в форме по имени, но можно и по ключу, как ниже
  for (let key in formData) {
    // по ключу из формдаты в цикле получаем значения и записываем их поэлементно
    form.elements[key].value = formData[key];
  }
}
