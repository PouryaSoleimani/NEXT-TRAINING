import path from "path"
import fs from 'fs'

const pathHandler = (req, res) => {
    const root = process.cwd()
    const dataBasePath = path.join(root, "data", "db.json")
    const DataBaseBuffer = fs.readFileSync(dataBasePath)
    const DataBaseParsed = JSON.parse(DataBaseBuffer)
    const PRODUCTS = DataBaseParsed.products

    switch (req.method) {
        case "GET": { return res.json({ message: "TEST ROUTE", products: PRODUCTS }) }
        default: { return res.json({ message: "DEFAULT MODE" }) }
    }
}
export default pathHandler