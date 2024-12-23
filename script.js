let messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

let deleteBtns = document.querySelectorAll(".delete")

for (let i = 0 ; i< deleteBtns.length;i++){
  deleteBtns[i].addEventListener('click',function(){
    this.parentNode.remove();
    messagesCount = document.querySelectorAll('p').length;
    document.querySelector('#count').textContent = messagesCount;

  })
}

document.querySelector("#btn-add").addEventListener("click",function(){
  let message = document.querySelector("#add-message").value
  const newMes = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>${message}</p>
    </div>
    <span class="delete">✖</span>
  </div>`;
  document.querySelector('#msg-container').innerHTML += newMes;
  messagesCount = document.querySelectorAll('p').length;
  document.querySelector('#count').textContent = messagesCount;
  document.querySelector("#add-message").value = "";

  deleteBtns = document.querySelectorAll(".delete")

  for (let i = 0 ; i< deleteBtns.length;i++){
    deleteBtns[i].addEventListener('click',function(){
      this.parentNode.remove();
      messagesCount = document.querySelectorAll('p').length;
      document.querySelector('#count').textContent = messagesCount;

    })
  }
})

document.querySelector("#btn-search").addEventListener("click",function(){
  let textToCompare = document.querySelector("#search-message").value.toLowerCase();
  const allNames = document.querySelectorAll("h6")
  const regex = new RegExp(textToCompare,"i")
  for (let i = 0 ; i < allNames.length ; i++){
    if (!allNames[i].textContent.match(regex)) {
      allNames[i].parentElement.parentElement.style = "display : none"
    }
    else {
      allNames[i].parentElement.parentElement.style = "display : flex"
    }
  }
})

