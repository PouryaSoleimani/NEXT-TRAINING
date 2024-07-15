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
            //DELETE USER
            const { deleteID } = request.query
            const MAINUSER = USERSLIST.find(user => user.id == String(deleteID))
            const NEWUSERS = USERSLIST.filter(user => user.id !== MAINUSER.id)

            return response.status(200).json({ NEWUSERS })

        }
        default: { return response.json({ message: "DELETE USERS DYNAMIC ROUTE" }) }
    }

}
export default deleteUserHandler