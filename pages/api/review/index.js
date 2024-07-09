//^ REVIEW API ROUTE ============================================================================================================
function reviewHandler(req, res) {
    console.log(req.method)
    console.log(req.body)
    
    switch (req.method) {

        case "GET": { return res.json({ message: "REVIEW GET MODE" }) }
        case "POST": { return res.json({ message: "REVIEW POST MODE" }) }
        case "PUT": { return res.json({ message: "REVIEW PUT MODE" }) }
        case "DELETE": { return res.json({ message: "REVIEW DELETE MODE" }) }
        default: { return res.json({ message: "REVIEW DEFAULT MODE" }) }

    }
}
export default reviewHandler