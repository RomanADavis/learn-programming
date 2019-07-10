class Todo {
  constructor(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.complete = false
  }

  complete(){
    this.complete = !this.complete
  }
}

export default Todo