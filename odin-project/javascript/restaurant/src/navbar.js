import navigation from './navigation'

const navbar = function(options) {
  const navlink = function(name, isActive){
    const element = document.createElement('li')
    const link = document.createElement('a')

    link.innerHTML = name
    link.onclick = () => navigation.loadPage(name)
    link.class = isActive ? 'active' : ''
    
    element.appendChild(link)
    
    return element
  }

  const element = document.createElement('ul')
  const pages = ['home', 'menu', 'about']
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

export default navbar