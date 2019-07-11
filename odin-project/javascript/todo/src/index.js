import TodoForm from './todoform'
import Project from './project'

window.onload = function(){
  const todoForm = new TodoForm(new Project())
  const content = document.getElementById('content')

  content.appendChild(todoForm.render())
  console.log('loaded')
}