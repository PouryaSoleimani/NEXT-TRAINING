//* DYNAMIC API ROUTE ======================================================================================================
function dynamicHandler(req, res) {
    if (req.method === "GET") {
        return res.json({ message: id })
    }
}
export default dynamicHandler