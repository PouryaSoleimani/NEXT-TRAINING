//^ USERS ROUTE
const handler = (Request, Response) => {
  return Response.json({ user: { id: 1, name: "pourya", email: 'pourya@gmail.com' } })
}
export default handler