//^ PRODUCTS ROUTE ======================================================================================================================================

//!FAKE DATABASE
const allProducts = [
  { id: 1, title: "Watch", price: 220 },
  { id: 2, title: "Laptop", price: 980 },
  { id: 3, title: "Keyboard", price: 80 },
  { id: 4, title: "Mouse", price: 50 },
]


function productHandler(Req, Res) {
  switch (Req.method) {
    case "GET": return Res.json({ message: 'PRODUCTS ROUTE', data: allProducts })
    case "POST": {
      const { id, title, price } = Req.body
      allProducts.push({ id, title, price })
      return Res.json({ message: "PRODUCT ADDED SUCCESSFULLY !", data: allProducts })
    }

    default: return Res.json({ message: "DEFAULT METHOD :)" })
  }

}

export default productHandler