// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   return users;
// }

// async function listUsers() {
//   //data
//   const users = await getUsers();

//   //dom
//   users.forEach(addList);
// }

// function addList(user) {
//   const list = document.createElement("li");
//   list.innerText = user.name;
//   lists.appendChild(list);
// }

// window.addEventListener("load", listUsers);
// button.addEventListener("click", listUsers);

const button = document.getElementById("generateBtn");
const comment = document.getElementById("commentValue");
const commentValue = document.getElementById("inputComment");
const comment1 = document.getElementById("commentValue1");
const commentValue1 = document.getElementById("inputComment1");

function changeComment() {
  comment.value = commentValue.value;
  comment1.value = commentValue1.value;
}
