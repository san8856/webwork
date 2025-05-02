const customer = {
  selectList: "select * from customers",
  selectByid: "select * from customers WHERE id = ?",
  insertInfo: "insert customers (name, email, phone) values(?,?,?)",
  updateInfo: "update customers set ? WHERE id = ?",
  deleteInfo: "DELETE from customers WHERE id = ?"
}
module.exports = customer;