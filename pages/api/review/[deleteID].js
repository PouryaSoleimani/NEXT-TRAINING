//! DELETE USER API ROUTE ====================================================================================================================
import fs from 'fs'
import path from 'path'

function deleteUserHandler(request, response) {
    switch (request.method) {
        case "DELETE": {
            const root = process.cwd()
            const dbPath = path.join(root , "data" , "db.json")
            const { id } = request.body
            
        }
        default:
    }

}