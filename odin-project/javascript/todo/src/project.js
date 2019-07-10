import Todo from "./todo";

class Project {
  constructor(title = 'Default', todos = []){
    this.todos = todos
  }

  addTodo(){
    this.todos.push(new Todo())
  }
}

export default Project
