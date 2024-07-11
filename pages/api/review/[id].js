//* DYNAMIC API ROUTE ======================================================================================================
import db from "../../../data/db.json"

function dynamicHandler(req, res) {
    const { id } = req.query;
    const usersArray = db.users
    const mainUser = usersArray.find(user => { return user.id === +id })
    switch (req.method) {
        case "GET": { return res.json({ message: ` ID => ${id}`, mainUser }) }
        default: { return res.json({ message: "DEFAULT" }) }
    }
}
export default dynamicHandler