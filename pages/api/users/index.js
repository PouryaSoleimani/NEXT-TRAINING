//! USERS ROUTE
function usersHandler(Request, Response) {
  return Response.json({ message: "WELCOME TO USERS ROUTE" }, { id: 1, firstName: "Pourya", lastName: "Soleimani" })
}

export default usersHandler