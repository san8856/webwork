const board = {
  selectList: "select * from board",
  selectByid: "select * from board WHERE id = ?",
  insertInfo: "insert board (title, writer, content, created_date) values(?,?,?,now())",
  updateInfo: "update board set ? WHERE id = ?",
  deleteInfo: "delete from board WHERE id = ?"
}

module.exports = board