//^ ADD-USER-2 API ROUTE ===========================================================================================================
import fs from 'fs'
import path from 'path'

function addUserHandler2(request, response) {
    const root = process.cwd()
    const dbPath = path.join(root, "data", "db.json")
    const dbBuffered = fs.readFileSync(dbPath)
    const dbParsed = JSON.parse(dbBuffered.toString())
    const USERSLIST = dbParsed.users

    switch (request.method) {
        case "GET": { return response.status(200).json({ message: "ADD USER 2 || GET METHOD", data: USERSLIST }) }
        case "POST": {

            const { username, password } = request.body

            const newUser = { id: crypto.randomUUID(), username, password }

            USERSLIST.push(newUser)

            const ERROR = fs.writeFileSync(dbPath, JSON.stringify(dbParsed, null, 2))

            if (ERROR) {
                response.status(500).json({ message: "INVALID PARAMETERS ..." })
            } else {
                response.status(201).json({ message: "USER CREATED", data: USERSLIST })
            }
        }
        default: { return response.status(200).json({ message: "ADD USER 2 || DEFAULT METHOD" }) }
    }
}

export default addUserHandler2