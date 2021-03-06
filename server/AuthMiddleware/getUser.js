const db = require('../dbConnection')
const QueryMaker = require('../QueryMaker')
const queryMaker = new QueryMaker();

const getUser = async (user, password) => {
  const userQuery = queryMaker.select("*")
    .from("User")
    .equals("username", `"${user}"`)
    .andEquals("password", `"${password}"`)
    .make()
  console.log(userQuery)
  const [rows] = await db.query(userQuery)
  console.log(rows)
  return rows[0]
}


module.exports = getUser