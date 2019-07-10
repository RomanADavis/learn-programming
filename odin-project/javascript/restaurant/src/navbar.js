export default function(options) {
  const navlink = function(name, isActive){
    const element = document.createElement('li')
    const link = document.createElement('a')

    element.innerHTML = name
    element.onclick = `navigation.loadPage("${name}")`
    element.class = isActive ? 'active' : ''

    return element
  }

  const element = document.createElement('ul')
  const pages = ['home', 'menu']
  let links
  if(options && options.active){
    links = pages.map(page => navlink(page, options.active === page))
  }else{
    links = pages.map(page => navlink(page, page === 'home'))
  }

  links.forEach(link => element.appendChild(link))

  element.className = 'navigation'

  return element
}
