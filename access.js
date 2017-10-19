console.log("document:", document);
console.log("document.body:", document.body);

var body = document.body;
console.log("body.childNodes:", body.childNodes);

var bodyChildren = body.childNodes;
for (var i = 0; i < bodyChildren.length; i++) {

}

var bodyFirstChild = body.firstChild;
var bodyLastChild = body.lastChild;
console.log("bodyFirstChild:", bodyFirstChild);
console.log("bodyLastChild:", bodyLastChild);

var elem = bodyFirstChild;
while (elem) {
  console.log("elem:", elem);
  elem = elem.nextSibling;
}

var firstChildParent = bodyFirstChild.parentNode;
console.log("firstChildParent:", firstChildParent);

var photoCardContainer = document.getElementById('photo-card-container');
console.log("photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("photoCards:", photoCards);
console.log("photoCards[0]:", photoCards[0]);

// photoCards.forEach(function () {});

var links = document.getElementsByTagName('a');
console.log("links:", links);

var rightNavitem = document.querySelector('.navitem.right');
console.log("rightNavitem:", rightNavitem);

var firstPhotoCard = document.querySelector('.photo-card:first-child');
console.log("firstPhotoCard:", firstPhotoCard);

var allPersonImages = document.querySelectorAll('.img-container img');
console.log("allPersonImages:", allPersonImages);

console.log("firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML);
console.log("firstPhotoCard.textContent:", firstPhotoCard.textContent);

console.log("allPersonImages[0].src:", allPersonImages[0].src);
console.log("links[0].href:", links[0].href);

var loremCard = document.querySelector('.lorem-card');
console.log("loremCard.clientWidth:", loremCard.clientWidth);
console.log("loremCard.clientHeight:", loremCard.clientHeight);

console.log("loremCard.offsetWidth:", loremCard.offsetWidth);
console.log("loremCard.offsetHeight:", loremCard.offsetHeight);

console.log("loremCard.scrollWidth:", loremCard.scrollWidth);
console.log("loremCard.scrollHeight:", loremCard.scrollHeight);

console.log("loremCard.scrollLeft:", loremCard.scrollLeft);
console.log("loremCard.scrollTop:", loremCard.scrollTop);

console.log("window.scrollX:", window.scrollX);
console.log("window.scrollY:", window.scrollY);

console.log("loremCard.getBoundingClientRect():", loremCard.getBoundingClientRect());
