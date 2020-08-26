function appendLinkToHeading (heading) {
  if (heading.id) {
    var anchor = document.createElement('a');
    anchor.setAttribute('class', 'anchor')
    anchor.setAttribute('href', '#' + heading.id)
    anchor.setAttribute('aria-hidden', 'true')
    anchor.setAttribute('tabindex', '-1')
    heading.insertBefore(anchor, heading.firstChild)
  }
}

for (var i = 1; i <= 6; i++) {
  headings = document.querySelectorAll('body > .content h' + i)

  for (var j = 0; j < headings.length; j++)
    appendLinkToHeading(headings[j])
}
