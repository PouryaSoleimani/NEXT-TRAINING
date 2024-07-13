//^ ADD USER PAGE ================================================================================================================================
import path from "path"
import fs from 'fs'



//===============================================================================================================================================
const addUserHandler = (req, res) => {
    const root = process.cwd()
    const dbPath = path.join(root, "data", "db.json")
    const dbBuffer = fs.readFileSync(dbPath)
    const dbParsed = JSON.parse(dbBuffer)
    const USERS = dbParsed.users

    switch (req.method) {
        case "GET": { return res.json({ message: "ADD USER GET METHOD", users: USERS }) }
        default: { return res.json({ message: "DEFAULT METHOD" }) }
    }

}

export default addUserHandler