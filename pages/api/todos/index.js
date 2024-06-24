// TODOS API ROUTE ============================================================================================================================================ 
import path from "path"
import fs from 'fs'


// FUNCTION ============================================================================================================================================ 
function todosHandler(Req, Res) {

  switch (Req.method) {

    case "GET": {
      const root = process.cwd()
      const dataBasePath = path.join(root, "data", "db.json")
      const bufferTypeDataBase = fs.readFileSync(dataBasePath)
      const parsedDataBase = JSON.parse(bufferTypeDataBase)
      const todos = parsedDataBase.todos

      return Res.json({ message: "TODOS ROUTE  |  GET METHOD", todos })
    }



    case "POST": { return Res.json({ message: "TODOS ROUTE  |  POST METHOD" }) }
    case "PUT": { return Res.json({ message: "TODOS ROUTE  |  PUT METHOD" }) }
    case "DELETE": { return Res.json({ message: "TODOS ROUTE  |  DELETE METHOD" }) }
    default: { return Res.json({ message: "TODOS ROUTE  |  DEFAULT METHOD" }) }

  }
}
export default todosHandler