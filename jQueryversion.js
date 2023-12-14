$(document).ready(function () {
  var myElements = $('.displayParagraph');
  var toggleButtons = $('.toggleButton');
  var currentlyOpenElement = null;

  console.log(myElements);
  console.log(toggleButtons);

  toggleButtons.click(function () {
    var currentIndex = toggleButtons.index(this);
    var currentElement = myElements.eq(currentIndex);
    var currentButton = toggleButtons.eq(currentIndex);

    // Close the currently open element, if any
    if (currentlyOpenElement && currentlyOpenElement.get(0) !== currentElement.get(0)) {
      currentlyOpenElement.css({ 'height': '0', 'display': 'none' });
      toggleButtonImage(currentButton, 'plus'); // Change image to "plus"
    }

    // Toggle the height and display property of the clicked element
    if (currentElement.css('height') === '0px' || currentElement.css('height') === '') {
      console.log("hmmm");
      currentElement.css({ 'display': 'block', 'height': currentElement.prop('scrollHeight') + 'px' });
      toggleButtonImage(currentButton, 'minus'); // Change image to "minus"
      currentlyOpenElement = currentElement; // Update the currently open element
    } else {
      console.log("yayy");
      currentElement.css('height', '0');
      toggleButtonImage(currentButton, 'plus'); // Change image to "plus"
      currentlyOpenElement = null; // No element is open
    }
  });

  function toggleButtonImage(button, state) {
    // Toggle between "plus" and "minus" images
    button.attr('src', state === 'plus' ? 'assets/images/icon-plus.svg' : 'assets/images/icon-minus.svg');
  }
});
