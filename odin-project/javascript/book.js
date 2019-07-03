function Book(title, author, pages, isRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead ? true : false // expects a boolean, but defaults to false
  this.info = function(){
    var readStatus = isRead ? 'read' : 'not read yet'
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}` 
  }
}

theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295)

console.log(theHobbit.info())
