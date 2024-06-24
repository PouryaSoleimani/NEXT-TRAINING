// TODOS API ROUTE ============================================================================================================================================ 



// FUNCTION ============================================================================================================================================ 
function todosHandler(Req, Res) {

  switch (Req.method) {

    case "GET": { return Res.json({ message: "TODOS ROUTE  |  GET METHOD" }) }
    case "POST": { return Res.json({ message: "TODOS ROUTE  |  POST METHOD" }) }
    case "PUT": { return Res.json({ message: "TODOS ROUTE  |  PUT METHOD" }) }
    case "DELETE": { return Res.json({ message: "TODOS ROUTE  |  DELETE METHOD" }) }
    default: { return Res.json({ message: "TODOS ROUTE  |  DEFAULT METHOD" }) }
    
  }
}
export default todosHandler