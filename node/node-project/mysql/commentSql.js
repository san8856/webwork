const comment = {
  selectList: "select * from comments",
  selectByBid: "SELECT * FROM comments WHERE bid = ?",
  insertInfo: "INSERT INTO comments (writer, content, bid) VALUES (?, ?, ?)",
  deleteInfo: "DELETE FROM comments WHERE id = ?"
}
module.exports = comment; 