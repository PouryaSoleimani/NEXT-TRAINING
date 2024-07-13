//^ ADD USER PAGE ================================================================================================================================
import path from "path"
import fs from 'fs'



//===============================================================================================================================================
const addUserHandler = (req, res) => {
    //ACCESSING THE DATABASE
    const root = process.cwd()
    const dbPath = path.join(root, "data", "db.json")
    const dbBuffer = fs.readFileSync(dbPath)
    const dbParsed = JSON.parse(dbBuffer)
    const USERS = dbParsed.users
    // SWITCH CASE
    switch (req.method) {
        case "GET": { return res.json({ message: "ADD USER GET METHOD", users: USERS }) }
        case "PUT": {
            const { email, password } = req.body
            const newUser = { id: crypto.randomUUID(), email, password }
            USERS.push(newUser)
        }
        default: { return res.json({ message: "DEFAULT METHOD" }) }
    }

}
export default addUserHandler

// crypto.randomUUID()

// fs.writeFileSync( dbPath , newUser)

// const err = fs.writeFileSync( dbPath , JSON.stringify(newUser) )

// if(err) = {console.log(err)}