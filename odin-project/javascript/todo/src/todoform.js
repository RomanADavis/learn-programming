export default class TodoForm{
  constructor(project){
    this.project = project
    this.title = ''
    this.description = ''
    this.dueDate = Date.now()
    this.priority = ''
  }

  titleInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label.innerHTML = 'Title'
    input.setAttribute('type', 'text')
    input.onchange = event => this.title = event.value

    component.appendChild(label)
    component.appendChild(input)
    return component
  }

  descriptionInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const textarea = document.createElement('textarea')

    label.innerHTML = 'Description'
    textarea.onchange = event => this.description = event.value

    component.appendChild(label)
    component.appendChild(textarea)
    return component
  }

  dueDateInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const dateInput = document.createElement('input')

    label.innerHTML = 'Due Date'
    dateInput.setAttribute('type', 'date')
    dateInput.onchange = event => this.dueDate = event.value

    component.appendChild(label)
    component.appendChild(dateInput)
    return component
  }

  priorityInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const prioritySelect = document.createElement('select')
    const priorities = ['', 'Green', 'Yellow', 'Red']

    label.innerHTML = 'Priority'
    prioritySelect.onChange = event => this.priority = event.value
    priorities.forEach(priority => {
      let option = document.createElement(option)
      option.value = priority
      option.innerHTML = priority
      prioritySelect.appendChild(option)
    })

    component.appendChild(label)
    component.appendChild(prioritySelect)
    return component
  }

  submitButton(){
    const submitButton = document.createElement('button')
    submitButton.innerHTML = 'Submit'
    submitButton.onclick = () => this.project.addTodo(this.title, this.description, this.dueDate, this.priority)
    return submitButton
  }

  render(){
    const component = document.createElement('div')
    const form = document.createElement('form')

    form.appendChild(this.titleInput())
    form.appendChild(this.descriptionInput())
    form.appendChild(this.dueDateInput())
    form.appendChild(this.priorityInput())
    form.appendChild(this.submitButton())
    
    component.appendChild(form)
    return component
  }
}