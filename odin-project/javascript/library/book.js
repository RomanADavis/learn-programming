const Library = function(books){
  this.books = books ? books : []
}

Library.prototype.addBook = function(book){
  this.books.push(book)
}

Library.prototype.table = function(){
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
  ${headers}
  ${newBookInput}
  ${content}
</table>`)
}

Library.prototype.toggleRead = function(title){
  this.books.forEach((book, index) => {
    if(book.title == title){
      return book.toggleRead()
    }
  })
}

Library.prototype.remove = function(title){
  title = title.replace("'", "&#39;")
  this.books = this.books.filter(book => {
    return book.title !== title
  })
}

const Book = function(title, author, pages, isRead){
  this.title = title.replace("'", "&#39;")
  this.author = author.replace("'", "&#39;")
  this.pages = pages
  this.isRead = isRead ? true : false // expects a boolean, but defaults to false
}

Book.prototype.info = function(){
  var readStatus = isRead ? 'read' : 'not read yet'
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}` 
}

Book.prototype.toggleRead = function(){
  this.isRead = !this.isRead
}
