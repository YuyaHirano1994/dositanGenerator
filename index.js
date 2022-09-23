
const button = document.getElementById("generateBtn");
const comment = document.getElementById("commentValue");
const commentValue = document.getElementById("inputComment");
const comment1 = document.getElementById("commentValue1");
const commentValue1 = document.getElementById("inputComment1");

function changeComment() {
  comment.value = commentValue.value;
  comment1.value = commentValue1.value;
}
