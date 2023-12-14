var myElements = document.getElementsByClassName('displayParagraph');
var toggleButtons = document.getElementsByClassName('toggleButton');
var faqHeadings = document.getElementsByClassName('faq-heading');
var currentlyOpenElement = null;

console.log(myElements);
console.log(toggleButtons);

for (let i = 0; i < toggleButtons.length; i++) {
  faqHeadings[i].addEventListener('click', function() {
    var currentElement = myElements[i];
    var currentButton = toggleButtons[i];

    // Close the currently open element, if any 
    if (currentlyOpenElement && currentlyOpenElement !== currentElement) {
      currentlyOpenElement.style.height = '0';
      currentlyOpenElement.style.display = 'none';
      toggleButtonImage(previousButton, 'plus'); // Change image to "plus"
    }

    // Toggle the height and display property of the clicked element
    if (currentElement.style.height === '0px' || currentElement.style.height === '') {
      console.log("hmmm");
      currentElement.style.display = 'block';
      currentElement.style.height = currentElement.scrollHeight + 'px';
      toggleButtonImage(currentButton, 'minus'); // Change image to "minus"
      currentlyOpenElement = currentElement; // Update the currently open element
      previousButton = currentButton; // update the formal open button
    } else {
      console.log("yayy")
      currentElement.style.height = '0';
      toggleButtonImage(currentButton, 'plus'); // Change image to "plus"
      currentlyOpenElement = null; // No element is open
    }
  });
}

function toggleButtonImage(button, state) {
  // Toggle between "plus" and "minus" images
  button.src = state === 'plus' ? 'assets/images/icon-plus.svg' : 'assets/images/icon-minus.svg';
}
