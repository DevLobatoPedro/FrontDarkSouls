const url = "https://www.youtube.com/shorts/0TA_1csZ_Mw"
const btn = document.querySelector('#mp4')

const icon = document.getElementById("icon")

const btnDs1 = document.getElementById("btnDs1");
const btnDs2 = document.getElementById("btnDs2");
const btnDs3 = document.getElementById("btnDs3");
const btnBloodborne = document.getElementById("btnBloodborne");
const btnElden = document.getElementById("btnElden");

const menuDiv1 = document.getElementById("menuDiv1");
const menuDiv2 = document.getElementById("menuDiv2");
const menuDiv3 = document.getElementById("menuDiv3");
const menuDiv4 = document.getElementById("menuDiv4");
const menuDiv5 = document.getElementById("menuDiv5");
let isMenuVisible = false;

function refreshPage() {
  location.reload();
}

function openTab(url){
    const newWin = window.open(url)
    newWin.focus()
}

btn.addEventListener('click', () => {
    openTab(url)
})

function hideMenus() {
    menuDiv1.style.display = "none";
    menuDiv2.style.display = "none";
    menuDiv3.style.display = "none";
    menuDiv4.style.display = "none";
    menuDiv5.style.display = "none";
  }

/*function showMenu(menu) {
    hideMenus()
    if (menu.style.display === "none") {
      menu.style.display = "block";
      console.log('bloco');
    } else if(menu.style.display === "block" && event.target !== menu) {
      menu.style.display = "none";
      console.log('desbloco');
    } else{
        menu.style.display = "none";
    }
  }*/

  function showMenu(menu) {
    hideMenus();
    
    if (!isMenuVisible) {
      menu.style.display = "block";
      isMenuVisible = true;
    } else {
      menu.style.display = "none";
      console.log('desbloco');
      isMenuVisible = false;
    }
  }

btnDs1.addEventListener("click", function() {
    showMenu(menuDiv1, event);
  });
  
btnDs2.addEventListener("click", function() {
    showMenu(menuDiv2);
  });
  
btnDs3.addEventListener("click", function() {
    showMenu(menuDiv3);

});
  
btnBloodborne.addEventListener("click", function() {
    showMenu(menuDiv4);
  });
  
btnElden.addEventListener("click", function() {
    showMenu(menuDiv5);
  });