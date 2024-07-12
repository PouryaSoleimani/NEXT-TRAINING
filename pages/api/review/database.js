//^ FS AND PATH ROUTE ===========================================================================================================
import fs from 'fs'
import path from 'path'

function databaseHandler(request, response) {
    const root = process.cwd()
    const database = path.join(root, "db", "db.json")
    const DB = fs.readFileSync(database)
    console.log(DB)

    switch (request.method) {
        case "GET": { return response.json({ message: "FS AND PATH" }) }
        default: { return response.json({ message: "FS AND PATH" }) }

    }
}

export default databaseHandler