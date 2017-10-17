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
