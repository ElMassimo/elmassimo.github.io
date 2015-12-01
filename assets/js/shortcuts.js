LEFT = 37; UP = 38; RIGHT = 39; DOWN = 40;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case LEFT: goToNextPost(); break;
    case UP: if(scrolledToTop()) { goToNextPost() } break;
    case RIGHT: goToPreviousPost(); break;
    case DOWN: if(scrolledToBottom()) { goToPreviousPost() } break;
  }
};

function clickById(id) {
  var el = document.getElementById(id);
  if (el) el.click()
}

function goToPreviousPost() {
  clickById('previous-post')
}

function goToNextPost() {
  clickById('next-post')
}

function scrolledToTop() {
  return window.scrollY == 0
}

function scrolledToBottom() {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
}
