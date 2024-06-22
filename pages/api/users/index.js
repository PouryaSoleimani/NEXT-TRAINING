//^ USERS API ROUTE
//* FAKE DATABASE
const users = [
  { username: "pourya", password: "pourya123" },
  { username: "majid", password: "majid" }
]


//^ FUNCITONS
function usersHandler(Request, Response) {
  console.log("REQUEST METHOD => ", Request.method)

  //?SWITCH CASE FOR DIFFERENT INCOMING METHODS
  switch (Request.method) {
    case "GET": { return Response.json({ message: 'GET METHOD', data: users }) }

    case "POST": {
      const { username, password } = Request.body
      users.push({ username, password })
      return Response.json({ message: "USER REGISTERED SUCCESSFULLY", data: users })
    }

    case "PUT": { return Response.json("PUT METHOD") }
    case "PATCH": { return Response.json("PATCH METHOD") }
    case "DELETE": { return Response.json("DELETE METHOD") }
    default: { return Response.json("DEFAULT MODE") }
  }


  //? GET METHOD RESPONSE
  // return Response.json({
  //   message: "WELCOME TO USERS ROUTE", 
  //   user: { id: 1, firstName: "Pourya", lastName: "Soleimani" },
  //   user2: { id: 2, firstName: "Ali", lastName: "Mahdavi" }, 
  //   user3: { id: 3, firstName: "Mohammad", lastName: "Karimi" },
  // })
}

export default usersHandler