function createPhotoCard(photoURL, caption) {

  var photoCardSection = document.createElement('section');
  photoCardSection.classList.add('photo-card');

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imgContainerDiv);

  var img = document.createElement('img');
  img.classList.add('person-photo-img');
  img.src = photoURL;
  imgContainerDiv.appendChild(img);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  console.log("photoCardSection:", photoCardSection);

  photoCardSection.setAttribute('data-price', '500');

  return photoCardSection;

}

var newPhotoCard = createPhotoCard("http://placekitten.com/320/320/", "A cute kitty");

var photoCardContainer = document.getElementById('photo-card-container');

photoCardContainer.appendChild(newPhotoCard);
// photoCardContainer.insertBefore(newPhotoCard, photoCardContainer.firstChild);
// photoCardContainer.replaceChild(newPhotoCard, photoCardContainer.firstChild);

newPhotoCard.setAttribute('id', 'newly-added-photo-card');
console.log(newPhotoCard.getAttribute('data-price'));


var userSpecifiedContent = "<img src=x onerror=\"alert('Uh oh!')\">";
// photoCardContainer.innerHTML += "<div class=\"lorem-card\">" + userSpecifiedContent + "</div>";

// photoCardContainer.textContent += userSpecifiedContent;

var newDiv = document.createElement('div');
newDiv.classList.add('lorem-card');

// newDiv.style.color = 'orange';
// newDiv.style.border = '3px dashed purple';
newDiv.classList.add('ugly');

var newSpan = document.createElement('span');
newSpan.classList.add('ugly');

var newTextNode = document.createTextNode(userSpecifiedContent);
newSpan.appendChild(newTextNode);

newDiv.appendChild(newSpan);

// console.log("newDiv:", newDiv);

photoCardContainer.appendChild(newDiv);

newSpan.textContent = "Hi";

// newDiv.remove();
newDiv.parentNode.removeChild(newDiv);
