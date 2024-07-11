//^ REVIEW API ROUTE ===============================================================================================================
const usersList = [
    { id: 1, firstname: "pourya", lastname: "soleimani" },
    { id: 2, firstname: "reza", lastname: "hoseini" },
    { id: 3, firstname: "ali", lastname: "mohammadi" }
]

function postHandler(request, response) {

    console.log(request.body) //GETTING REQUEST BODY
    console.log(request.method) // GETTING REQUEST METHOD

    switch (request.method) {

        case "GET": { return response.json({ message: "REVIEW ROUTE || GET METHOD", data: usersList }) }
        case "POST": {
            const user = request.body;
            usersList.push(user);
            return response.json({ message: "REVIEW ROUTE || POST METHOD", user: user, data: usersList })
        }
        case "PUT": { return response.json({ message: "REVIEW ROUTE || PUT METHOD" }) }
        case "DELETE": { return response.json({ message: "REVIEW ROUTE || DELETE METHOD" }) }
        default: { return response.json({ message: "REVIEW ROUTE || DEFAULT METHOD" }) }
    }
}

export default postHandler