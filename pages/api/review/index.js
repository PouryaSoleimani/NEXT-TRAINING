//^ REVIEW API ROUTE ============================================================================================================
function reviewHandler(req, res) {
    switch (req.method) {
        case "GET": { return res.json({ message: "REVIEW GET" }) }
        case "POST": { return res.json({ message: "REVIEW POST" }) }
        case "PUT": { return res.json({ message: "REVIEW PUT" }) }
        case "DELETE": { return res.json({ message: "REVIEW DELETE" }) }
        default: { return res.json({ message: "REVIEW DEFAULT" }) }
    }
}
export default reviewHandler