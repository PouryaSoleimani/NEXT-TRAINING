//^ USERS API ROUTE ==============================================================================================================================================
import fs from 'fs'
import path from 'path'







// FUNCTION  =====================================================================================================================================================
function usersHandler(Req, Res) {
  switch (Req.method) {
    case "GET": {
      const root = process.cwd()
      const dataBasePath = path.join(root, "data", "db.json")
      const databaseBufferType = fs.readFileSync(dataBasePath)
      const parsedDataBase = JSON.parse(databaseBufferType)
      const usersArray = parsedDataBase.users // AND HERE WE HAVE REACHED THE USERS ARRAY IN OUR {db.json} FILE

      return Res.json({ message: "USERS API | GET METHOD", usersArray })

    }


    case "POST": { return Res.json({ message: "USERS API | POST METHOD" }) }
    case "PUT": { return Res.json({ message: "USERS API | PUT METHOD" }) }
    case "DELETE": { return Res.json({ message: "USERS API | DELETE METHOD" }) }
    default: { return Res.json({ message: "USERS API | DEFAULT METHOD" }) }


  }
}
export default usersHandler