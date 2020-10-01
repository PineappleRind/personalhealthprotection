let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');

let words = ['How to Clean Your Groceries Properly', 'Which Supplements Should I Take?', 'What a pandemic can teach you about simple living'];

function randomitem(words) {
    return words[Math.floor(Math.random()*words.length)];
}

item1.innerHTML = randomitem(words);
item2.innerHTML = randomitem(words);
item3.innerHTML = randomitem(words);

if (item1.innerHTML === item2.innerHTML) {
    item3.innerHTML = 'How to Clean Your Groceries Properly';
    item2.innerHTML = 'Which Supplements Should I Take?';
    item1.innerHTML = 'What a pandemic can teach you about simple living';
}
else if (item2.innerHTML === item3.innerHTML) {
    item3.innerHTML = 'How to Clean Your Groceries Properly';
    item2.innerHTML = 'Which Supplements Should I Take?';
    item1.innerHTML = 'What a pandemic can teach you about simple living';
}
else if (item1.innerHTML === item3.innerHTML) {
    item3.innerHTML = 'Which Supplements Should I Take?';
    item2.innerHTML = 'How to Clean your Groceries Properly';
    item1.innerHTML = 'What a pandemic can teach you about simple living';
}
else {
    console.log('No iterations of fixes for algoritm')
}

window.onscroll = function(){
    progressBar();
    stickyList();
};


function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (scroll / height) * 100;
  let progressBar = document.getElementById("progressBar");
  let progressText = document.getElementById("progressText");
  progressBar.style.width = scrolled + "%";
  progressText.innerHTML = "Progress: " + parseInt(scrolled)  + "%";
  if (scrolled > 99) {
      progressText.innerHTML = 'Thanks for reading!';
      progressBar.style.background = 'linear-gradient(to right, #f7ce94, #f0f794)';
      progressBar.style.opacity = '1';
      progressBar.style.cursor = 'auto';
  } else {
    progressText.innerHTML = "Progress: " + parseInt(scrolled)  + "%";
  }
}

var articleList = document.getElementById("articleList");
var sticky = articleList.offsetTop;
let article = document.getElementById("articleContent");
function stickyList() {
  if (window.pageYOffset + 100 > sticky) {
    articleList.style.position = 'fixed';
    articleList.style.top = '100px';
    articleList.style.height = '400px';
    articleList.style.display = 'block';
  } else {
    articleList.style.position = 'relative';
    articleList.style.top = '';
    articleList.style.height = 'fit-content';
  }

  var x = window.matchMedia("(max-width: 800px)");
  if (x.matches) {
     articleList.style.position = 'relative';
    articleList.style.top = '';
     articleList.style.height = 'fit-content';
  }
}
