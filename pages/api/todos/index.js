// TODOS API ROUTE ============================================================================================================================================ 
import path from "path"
import fs from 'fs'


// FUNCTION ============================================================================================================================================ 
function todosHandler(Req, Res) {
  switch (Req.method) {

    case "GET": {

      const root = process.cwd() // ACCESSING PROJECTS ROOT FOLDER    
      const dataBasePath = path.join(root, "data", "db.json") // ACCESSING DATABASE FILE
      const bufferTypeDataBase = fs.readFileSync(dataBasePath) // READING THE FILE {db.json}
      const parsedDataBase = JSON.parse(bufferTypeDataBase) // PARSING THE FILE FROM BUFFER TO JSON
      const todos = parsedDataBase.todos // ACCESSING THE USERS ARRAY FROM {db.json} FILE

      return Res.json({ message: "TODOS ROUTE  |  GET METHOD", todos }) // RETURNING THE {todos} IN RESPONSE

    }


    case "POST": { return Res.json({ message: "TODOS ROUTE  |  POST METHOD" }) }
    case "PUT": { return Res.json({ message: "TODOS ROUTE  |  PUT METHOD" }) }
    case "DELETE": { return Res.json({ message: "TODOS ROUTE  |  DELETE METHOD" }) }
    default: { return Res.json({ message: "TODOS ROUTE  |  DEFAULT METHOD" }) }
  }
}
export default todosHandler 