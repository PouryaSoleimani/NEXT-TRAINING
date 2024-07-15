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
            const usersList = dbParsed.users
            //DELETE USER
            const { deleteID } = request.query
            const mainUser = usersList.find(user => user.id == String(deleteID))
            const newUsers = usersList.filter(user => user.id !== mainUser.id)
            // WRITE FILE
            const error = fs.writeFileSync(dbPath, JSON.stringify({ ...dbParsed, users: newUsers }))
            if (!error) {
                return response.status(201).json({ message: "USER REMOVED SUCCESSFULLY", newUsers })
            } else {
                return response.status(404).json({ message: "404 | USER NOT FOUND" })
            }

        }
        default: { return response.json({ message: "DELETE USERS DYNAMIC ROUTE" }) }
    }

}
export default deleteUserHandler