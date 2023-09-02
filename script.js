let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

let nameInput = document.getElementById("name");
let showName = document.getElementById("showName");

let emailInput = document.getElementById("email");
let showEmail = document.getElementById("showEmail");

let websiteInput = document.getElementById("webSite");
let showWebsite = document.getElementById("showWebsite");

let imageLinkInput = document.getElementById("imageLink");
let showImageLink = document.getElementById("showImageLink");

let radioInput = document.getElementsByName("gender");
let showGender = document.getElementById("showGender");

let skillInput = document.getElementsByName("skill");
let showSkill = document.getElementById("showSkill");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  showName.innerHTML = nameInput.value;
  showEmail.innerHTML = emailInput.value;
  showWebsite.innerHTML = websiteInput.value;
  showImageLink.innerHTML = imageLinkInput.value;

  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      showGender.innerHTML = radioInput[i].value;
    }
  }
  let skills = [];
  for(let n=0;n<skillInput.length;n++){
    if(skillInput[n].checked == true){
     skills.push(skillInput[n].value);
    }
  }
  showSkill.innerHTML = skills.toString();
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  nameInput.value = "";
  emailInput.value = "";
  websiteInput.value = "";
  imageLinkInput.value = "";
});
