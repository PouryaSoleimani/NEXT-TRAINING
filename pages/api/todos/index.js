//^ TODOS API ROUTE =========================================================================================================================

//* FAKE DATABASE 
const todos = [
  { id: 1, title: 'GO TO GYM', isCompleted: false },
  { id: 2, title: 'READ A BOOK', isCompleted: false },
  { id: 3, title: 'WATCH TV', isCompleted: false },
]

//^ FUNCTION

function todosHandler(Request, Response) {
  switch (Request.method) {

    case "GET": {
      return Response.json({ message: "TODOS ROUTE , GET METHOD ", todos })
    }

    case "POST": {
      const { id, title, isCompleted } = Request.body
      todos.push({ id, title, isCompleted })
      return Response.json({ message: "TODOS ROUTE , POST METHOD ", todos })
    }

    default: {
      return { message: "TODOS ROUTE , DEFAULT METHOD" }
    }

  }
}