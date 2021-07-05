import { useState } from 'react'

const Home = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const onChangeNome = (evt) => {
    setNome(evt.target.value)
  }
  const onChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }
  const sendEmail = async (evt) => {
    evt.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/email-contato', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
      })
      const json = await response.json()
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }

    return false
  }

  return (
    <div>
      {success && <p>E-mail enviado com sucesso!</p>}
      {!success && (
        <form onSubmit={sendEmail} method='post'>
          <h1>Formulário de Contato</h1>
          <input type='text' name='nome' value={nome} onChange={onChangeNome} />
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChangeEmail}
          />
          <button>Enviar</button>
        </form>
      )}
    </div>
  )
}
export default Home
