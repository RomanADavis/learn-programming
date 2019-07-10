const menu = function(){
  const page = document.createElement('div')
  const span = document.createElement('span')
  page.innerHTML = "Here's the menu."
  page.appendChild(span)
  return page
}

export default menu 
