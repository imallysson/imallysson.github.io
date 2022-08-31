const triggers = document.querySelectorAll('ul.menu li a');
const highlight = document.createElement('span');

let selected = document.querySelector('ul.menu li a.selected');
highlightSelected();

document.querySelector('ul.menu').appendChild(highlight);

function setHighlightCoords(linkCoords) {
  highlight.classList.add('highlight');

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function highlightSelected() {
  const linkCoords = selected.getBoundingClientRect();
  selected.classList.add('selected');

  setHighlightCoords(linkCoords);
}

function mouseEnterMenu() {
  selected.classList.remove('selected');

  const linkCoords = this.getBoundingClientRect();

  setHighlightCoords(linkCoords);
}

function mouseLeaveMenu() {
  if (selected) {
    highlightSelected();
  } else {
    highlight.classList.remove('highlight');
  }
}

function mouseClickMenu() {
  selected.classList.remove('selected');

  selected = this;
  selected.classList.add('selected');

  highlightSelected();
}

triggers.forEach(a => a.addEventListener('mouseenter', mouseEnterMenu));
triggers.forEach(a => a.addEventListener('mouseleave', mouseLeaveMenu));
triggers.forEach(a => a.addEventListener('click', mouseClickMenu));
