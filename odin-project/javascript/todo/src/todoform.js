class TodoForm{
  constructor(project){
    this.project = project
    this.title = ''
    this.description = ''
    this.dueDate = Date.now()
    this.priority = ''
  }

  submit(){
    this.project.addTodo(this.title, this.description, this.dueDate, this.priority)
  }

  changeTitle(event){
    
  }

  changeDescription(event){

  }

  changeDueDate(event){

  }

  changePriority(event){

  }

  titleInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    label.innerHTML = 'Title'
    
    input.setAttribute('type', 'text')
    input.onchange = this.changeTitle

    component.appendChild(label)
    component.appendChild(input)

    return component
  }

  descriptionInput(){
    const component = document.createElement('div')
    const label = document.createElement('label')
    const textarea = document.createElement('textarea')

    label.innerHTML = 'Description'
    textarea.onchange = this.changeDescription

    component.appendChild(label)
    component.appendChild(textarea)
    return component
  }

  dueDateInput(){

  }

  priorityInput(){
    
  }

  submitButton(){
    const submitButton = document.createElement('button')
    submitButton.innerHTML = 'Submit'
    submitButton.onclick = this.submit()
    return submitButton
  }

  render(){
    const component = document.createElement('div')
    const form = document.createElement('form')

    form.appendChild(this.titleInput())
    form.appendChild(this.descriptionInput())
    form.appendChild(this.dueDateInput())
    form.appendChild(this.priorityInput())
    form.appendChild(submitButton)
    
    component.appendChild(form)
    return component
  }
}