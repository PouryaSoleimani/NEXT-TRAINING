//^ ADD USER PAGE ================================================================================================================================
import path from "path"
import fs from 'fs'



//
const addUserHandler = (req, res) => {
    const root = process.cwd()
    const dbPath = path.join(root, "data", "db.json")
    const dbBuffer = fs.readFileSync(dbPath)
    const dbParsed = JSON.parse(dbBuffer)
    

}