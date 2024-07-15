//^ ADD-USER-2 API ROUTE ===========================================================================================================
import fs from 'fs'
import path from 'path'

function addUserHandler2(request, response) {
    const root = process.cwd()
    const dbPath = path.join(root, "data", "db.json")
    const dbBuffered = fs.readFileSync(dbPath)
    const dbParsed = JSON.parse(dbBuffered.toString())
    const usersList = dbParsed.users

    switch (request.method) {
        case "GET": { return response.status(200).json({ message: "ADD USER 2 || GET METHOD", data: usersList }) }
        case "POST" : {
            
        }
        default: { return response.status(200).json({ message: "ADD USER 2 || DEFAULT METHOD" }) }
    }
}

export default addUserHandler2