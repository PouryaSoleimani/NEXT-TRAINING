//! USERS ROUTE
function usersHandler(Request, Response) {
  console.log("REQUEST METHOD => ", Request.method)
  console.log("REQUEST BODY => ", Request.url.slice(5))
  //?SWITCH CASE FOR DIFFERENT INCOMING METHODS
  switch (Request.method) {
    case "GET": { return Response.json("GET METHOD") }
    case "POST": { return Response.json("POST METHOD") }
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