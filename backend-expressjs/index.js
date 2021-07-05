const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) // { "test": 1 }
app.use(express.urlencoded()) // ?test=1

app.post('/email-contato', (req, res) => {
  const email = {
    subject: 'Contato recebido no site',
    from: req.body.email,
    name: req.body.nome,
  }
  console.log(email)
  // TODO: send email
  res.json({
    ok: true,
  })
})
app.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})
const port = process.env.PORT || 3001
app.listen(port, (err) => {
  if (err) {
    console.log('erro ao iniciar servidor na porta', port, err)
  } else {
    console.log('servidor rodando...', port)
  }
})
