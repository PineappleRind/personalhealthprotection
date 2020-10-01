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