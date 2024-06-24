//^ PRODUCTS ROUTE ======================================================================================================================================
import fs from 'fs'
import path from 'path'

//!FAKE DATABASE
const allProductsFake = [
  { id: 1, title: "Watch", price: 220 },
  { id: 2, title: "Laptop", price: 980 },
  { id: 3, title: "Keyboard", price: 80 },
  { id: 4, title: "Mouse", price: 50 },
]


function productHandler(Req, Res) {
  switch (Req.method) {

    case "GET": {
      console.log("DIRNAME",__dirname)
      return Res.json({
        message: 'PRODUCTS ROUTE / GET ',
      })
    }

    case "POST": {
      const { id, title, price } = Req.body
      allProducts.push({ id, title, price })
      return Res.json({ message: "PRODUCT ADDED SUCCESSFULLY !", data: allProducts })
    }

    case "DELETE": {
      const { id, title, price } = Req.body
      allProducts.pop({ id, title, price })
      return Res.json({ message: "PRODUCT REMOVED SUCCESSFULLY !", data: allProducts })
    }

    default: {
      return Res.json({ message: "DEFAULT METHOD :)" })
    }

  }

}

export default productHandler