//* DYNAMIC API ROUTE ======================================================================================================
import db from './../../../data/db.json'

function dynamicHandler(req, res) {
    const { id } = req.query
    const mainUser = db.users.find(user => user.id = +id)

    switch (req.method) {
        case "GET": { return res.json({ message: "API DYNAMIC ROUTE", id: id, mainUser }) }



        default: { return res.json({ message: "API DYNAMIC ROUTE", id: id }) }
    }
}
export default dynamicHandler   