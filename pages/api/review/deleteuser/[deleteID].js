//! DELETE USER API ROUTE ====================================================================================================================
import fs from 'fs'
import path from 'path'

function deleteUserHandler(request, response) {
    switch (request.method) {
        case "DELETE": {
            const root = process.cwd()
            const dbPath = path.join(root, "data", "db.json")
            const dbBuffered = fs.readFileSync(dbPath)
            const dbParsed = JSON.parse(dbBuffered.toString())
            const USERSLIST = dbParsed.users
            const { id } = request.body
            const MAINUSER = USERSLIST.filter(user => user.id !== id)
            if (MAINUSER) {
                return response.status(200).json({ message: "DELETE USER", data: MAINUSER })
            }else { 
                return response.status(404).json({message : "USER NOT FOUND"})
            }
        }
        default:
    }

}
export default deleteUserHandler