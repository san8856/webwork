const book = {
  selectList: "select * from books",
  selectById: "select * from books WHERE id = ?",
  insertInfo: "insert books (title, introduction, isbn, writer, publisher, image, publication_date, price, page) values(?,?,?,?,?,?,?,?,?)"
}

module.exports = book