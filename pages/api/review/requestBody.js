//^ REVIEW API ROUTE ===============================================================================================================
const usersList = [
    { id: 1, firstname: "pourya", lastname: "soleimani" }
]

function postHandler(request, response) {

    console.log(request.body) //GETTING REQUEST BODY
    console.log(request.method) // GETTING REQUEST METHOD


    switch (request.method) {

        case "GET":
            { return response.json({ message: "REVIEW ROUTE || GET METHOD", usersList }) }

        case "POST":
            {
                const user = request.body
                usersList.push(user)
                return response.json({ message: "REVIEW ROUTE || POST METHOD", user: user, usersList: usersList })
            };

        case "PUT":
            { return response.json({ message: "REVIEW ROUTE || PUT METHOD" }) }
        case "DELETE":
            { return response.json({ message: "REVIEW ROUTE || DELETE METHOD" }) }
        default:
            { return response.json({ message: "REVIEW ROUTE || DEFAULT METHOD" }) }

    }
}

export default postHandler