function answer(choice) {
  var response = document.getElementById("response");
  if (choice === 'yes') {
    window.location.href = 'maze.html';
  } else if (choice === 'no') {
    response.innerText = "Wrong answer, try again.";
  }
}
