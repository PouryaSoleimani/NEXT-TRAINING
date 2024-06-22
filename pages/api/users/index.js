//! USERS ROUTE
function usersHandler(Request, Response) {
  return Response.json({
    message: "WELCOME TO USERS ROUTE",
    user: { id: 1, firstName: "Pourya", lastName: "Soleimani" },
    user2: { id: 2, firstName: "Ali", lastName: "Mahdavi" },
    user3: { id: 3, firstName: "Mohammad", lastName: "Karimi" },
  })
}

export default usersHandler