//^ USERS DYNAMIC ROUTE ======================================================================================================
//IMPORTING DATABASE
import { users } from './index.js'

function userDynamicHandler(req, res) {

  const mainUser = users.filter(user => { return user.id.toString() === req.query.id })

  switch (req.method) {

    case "GET": {
      if (mainUser.length) {
        return res.json({ message: `RESPONSE => ${req.query.id}`, user: mainUser })
      } else {
        return res.json({ message: "404 | USER NOT FOUND" })
      }
    }

    default: {
      return res.json({ message: "USERS DYNAMIC ROUTE" })
    }

  }
}

export default userDynamicHandler