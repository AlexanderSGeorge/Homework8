// Create form Element
const formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();
  const login = formElement.elements.login.value;
  
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())


    .then(user => {
      // createElements
      const pictureElement = document.createElement("img");
        pictureElement.src = user.avatar_url;
  

      const nameElement = document.createElement("div");
        nameElement.textContent = user.name;
      

      const websiteElement = document.createElement("a");
        websiteElement.href = user.blog;
        websiteElement.textContent = websiteElement.href;

      // Add info on the page
      const infosElement = document.getElementById("infos");
        infosElement.innerHTML = ""; // Remove previous user info
        infosElement.appendChild(pictureElement);
        infosElement.appendChild(nameElement);
        infosElement.appendChild(websiteElement);
    })
});
