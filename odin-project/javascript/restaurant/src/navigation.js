import home from './home'
import menu from './menu'
import navbar from './navbar'

const navigation = {
  pages: {
    'home': home(),
    'menu': menu()
  },

  loadPage : function(page){
    const content = document.getElementById('content')
    page = navigation.pages[page]
    content.innerHTML = '' // clear and redraw the page
    content.appendChild(navbar())
    content.appendChild(page)
  }
}

export default navigation
