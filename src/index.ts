import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return  c.json({
    HeyKid: `I'm a personal api stop hitting ME like this 😒!`,
    Suggesting: 'Go to saidevdhal.xyz for more info!'
  })
})

app.get('/blogs', (c) => {
  return c.text('Blogs Hono!')
})

app.get('/products', (c) => {
  return c.text('Products Hono!')
})

app.get('/contents', (c) => {
  return c.text('Contents Hono!')
})

app.get('/blogs/categ', (c) => {
  return c.text('Blog Categories Hono!')
})

app.get('/products/categ', (c) => {
  return c.text('Product Categories Hono!')
})

app.get('/guestbook', (c) => {
  return c.text('Guest book Hono!')
})

export default app
