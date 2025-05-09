const book = {
  selectList: "select * from books",
  selectById: "select * from books WHERE id = ?",
  insertInfo: "insert books (title, sub_title, introduction, isbn, writer, publisher, image, publication_date, price, page) values(?,?,?,?,?,?,?,?,?,?)"
}

module.exports = book