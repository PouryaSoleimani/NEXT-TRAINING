//! DELETE USER API ROUTE ====================================================================================================================
import fs from 'fs'
import path from 'path'

function deleteUserHandler(request, response) {
    switch (request.method) {
        case "DELETE": {
            //ACCESSING DATABASE
            const root = process.cwd()
            const dbPath = path.join(root, "data", "db.json")
            const dbBuffered = fs.readFileSync(dbPath)
            const dbParsed = JSON.parse(dbBuffered.toString())
            const USERSLIST = dbParsed.users
            // DELETE USER
            const { id } = request.query
            return response.status(200).json({ id : request.query })
            //     const MAINUSER = USERSLIST.find(user => String(user.id) !== String(id))
            //     if (MAINUSER) {
            //         return response.status(200).json({ message: "DELETE USER", data: MAINUSER })
            //     } else {
            //         return response.status(404).json({ message: "USER NOT FOUND" })
            //     }
        }
        default: { return response.json({ message: "DELETE USERS DYNAMIC ROUTE" }) }
    }

}
export default deleteUserHandler