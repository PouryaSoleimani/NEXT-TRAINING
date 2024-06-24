//^ USERS DYNAMIC ROUTE ======================================================================================================
//IMPORTING DATABASE
import { users } from './index.js'

function userDynamicHandler(req, res) {

  const mainUser = users.filter(user => { return user.id === req.query.id })

  switch (req.method) {

    case "GET": {
      return res.json({ message: `RESPONSE => ${req.query.id}`, user: mainUser })
    }

    default: {
      return res.json({ message: "USERS DYNAMIC ROUTE" })
    }

  }
}

export default userDynamicHandler