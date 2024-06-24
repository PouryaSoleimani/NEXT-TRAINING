//^ USERS DYNAMIC ROUTE ================================================================================================================================================================
// IMPORTING DATABASE 
import { users } from './index'

function userDynamicHandler(Request, Response) {

  const ID = Request.query.id
  const mainUser = users.find(user => user.id == ID)

  switch (Request.method) {

    case "GET": {
      if (mainUser) {
        return Response.json({ message: `USER ID ${ID}`, mainUser })
      } else {
        return Response.status(404).json({ message: "404 | USER NOT FOUND" })
      }
    }

    default: {
      return { message: "USERS DYNAMIC ROUTE" }
    }

  }
}

export default userDynamicHandler