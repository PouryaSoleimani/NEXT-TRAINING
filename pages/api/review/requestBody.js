//^ REVIEW API ROUTE ===============================================================================================================

function postHandler(request, response) {
    switch (request.method) {
        case "GET": { return response.json({ message: "REVIEW ROUTE || GET METHOD" }) }
        case "POST": {
            const user = request.body

            return response.json({ message: "REVIEW ROUTE || POST METHOD", user: user })
        }
        case "PUT": { return response.json({ message: "REVIEW ROUTE || PUT METHOD" }) }
        case "DELETE": { return response.json({ message: "REVIEW ROUTE || DELETE METHOD" }) }
        default: { return response.json({ message: "REVIEW ROUTE || DEFAULT METHOD" }) }

    }
}

export default postHandler