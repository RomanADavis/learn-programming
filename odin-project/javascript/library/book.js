const Library = function(books){
  this.books = books ? books : []

  this.addBook = function(book){
    this.books.push(book)
  }

  this.table = function(){
    const headers = 
  `<tr>
    <td>Title</td>
    <td>Author</td>
    <td>Pages</td>
    <td>Read</td>
    <td>Delete</td>
  </tr>`

    const newBookInput = 
  `<tr>
    <td><input id='titleInput'/></td>
    <td><input id='authorInput'/></td>
    <td><input id='pagesInput' /></td>
    <td><input type='checkbox' id='isReadInput'>I've read it</td>
    <td><button onClick='addBook()'>Add Book</button></td>
  </tr>`

    const content = this.books.map(book => {
      return (
  `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button onClick='toggleRead("${book.title}")'>${book.isRead ? "Read" : "Not Read"}</button></td>
    <td><button onClick='remove("${book.title}")'>Remove</button></td>
  </tr>`
      )
    }).join('\n')

    return (
`<table>
  ${newBookInput}
  ${headers}
  ${content}
</table>`)
  }

  this.toggleRead = function(title){
    this.books.forEach((book, index) => {
      if(book.title == title){
        return book.toggleRead()
      }
    })
  }

  this.remove = function(title){
    this.books = this.books.filter(book => book.title != title)
  }
}

const Book = function(title, author, pages, isRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead ? true : false // expects a boolean, but defaults to false
  
  this.info = function(){
    var readStatus = isRead ? 'read' : 'not read yet'
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}` 
  }

  this.toggleRead = function(){
    this.isRead = !this.isRead
  }
}
