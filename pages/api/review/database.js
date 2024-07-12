//^ FS AND PATH ROUTE ===========================================================================================================
import fs from 'fs'
import path from 'path'

function databaseHandler(request, response) {
    const root = process.cwd()
    const database = path.join(root, "data", "db.json")
    const DatabaseBuffer = fs.readFileSync(database)
    const databaseParsed = JSON.parse(DatabaseBuffer)
    const PRODUCTS = databaseParsed.users

    switch (request.method) {
        case "GET": { return response.json({ message: "FS AND PATH", db: PRODUCTS }) }
        default: { return response.json({ message: "FS AND PATH" }) }

    }
}

export default databaseHandler