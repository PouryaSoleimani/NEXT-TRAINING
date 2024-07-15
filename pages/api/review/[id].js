//^ DYNAMIC API ROUTE =================================================================================================================
import db from "../../../data/db.json"

function dynamicHandler(req, res) {

    const { id } = req.query;
    const usersArray = db.users
    const mainUser = usersArray.find(user => { return user.id === +id })

    switch (req.method) {

        case "GET": {

            if (mainUser) {
                return res.status(200).json({ message: ` ID => ${id}`, mainUser })
            } else {
                return res.status(404).json({ message: ` ID => User with id:${id} Not Found` })
            }
        }
        

        default: { return res.json({ message: "DEFAULT" }) }
    }
}
export default dynamicHandler  