const home = function(){
  function image(){
    const element = document.createElement('div')
    element.id = 'image'
    const image = document.createElement('img')
    image.src = 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'

    element.appendChild(image)

    return element
  }

  function headline(){
    const element = document.createElement('div')
    element.id = 'headline'
    const span = document.createElement('span')
    span.innerHTML = "Here's the headline."
    element.appendChild(span)
    return element
  }

  function copy(){
    const element = document.createElement('div')
    const span = document.createElement('span')
    span.innerHTML = "Here's some copy."
    element.appendChild(span)
    return element
  }

  const page = document.createElement('div')

  page.appendChild(image())
  page.appendChild(headline())
  page.appendChild(copy())

  return page
}

export default home