//! USERS ROUTE
//& DATABASE
const users = [
  { username: 'POURYA SOLEIMANI', email: 'POURYA@GMAIL.COM', password: 'POURYA123' }
]


//^ FUNCITONS
function usersHandler(Request, Response) {
  console.log("REQUEST METHOD => ", Request.method)

  //?SWITCH CASE FOR DIFFERENT INCOMING METHODS
  switch (Request.method) {
    case "GET": { return Response.json("GET METHOD") }

    case "POST": {
      const { username, email, password } = Request.body
      users.push({ username, email, password })
      console.log("REQUEST BODY =>", Request.body)
      console.log(users)
      return Response.json("POST METHOD => USER REGISTERED SUCCESFULLY")
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