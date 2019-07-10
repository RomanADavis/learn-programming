const about = function(){
  const element = document.createElement('div')
  const span = document.createElement('span')
  span.innerHTML = "Here's the about page for the restaurant."
  element.appendChild(span)
  return element
}

export default about