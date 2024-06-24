//^ USERS DYNAMIC ROUTE ================================================================================================================================================================
// IMPORTING DATABASE 
import { users } from './index'

function userDynamicHandler(Request, Response) {

  const ID = Request.query.id
  const mainUser = users.find(user => user.id == ID)

  switch (Request.method) {

    case "GET": {
      if (mainUser) {
        return Response.json({ message: "USERS DYNAMIC ROUTE", mainUser })
      } else {
        return Response.json({ message: "404 | USER NOT FOUND" })
      }
    }

    default: {
      return { message: "USERS DYNAMIC ROUTE" }
    }

  }
}
export default userDynamicHandler