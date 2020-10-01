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

if (item1.innerHTML === item2.innerHTML || item2.innerHTML === item3.innerHTML || item1.innerHTML === item3.innerHTML) {
    item1.innerHTML = randomitem(words);
    item2.innerHTML = randomitem(words);
    item3.innerHTML = randomitem(words);
}