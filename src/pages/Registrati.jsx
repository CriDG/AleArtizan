import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/Registrati.css' 

export default function Registrati() {
  const {
    register: registerReg,
    handleSubmit: handleSubmitReg,
    reset: resetReg,
    formState: { errors: errorsReg },
  } = useForm()
  const {
    register: registerLog,
    handleSubmit: handleSubmitLog,
    formState: { errors: errorsLog },
  } = useForm()
  const navigate = useNavigate()

  // Handler per la parte di REGISTRAZIONE
  const onSubmitRegister = (data) => {
    const stored = localStorage.getItem('users')
    const users = stored ? JSON.parse(stored) : []

    if (users.find((u) => u.email === data.email)) {
      alert('❌ Email già registrata.')
      return
    }

    const newUser = {
      id: Date.now().toString(),
      email: data.email,
      password: data.password,
      wishlist: [],
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    localStorage.setItem('currentUser', JSON.stringify(newUser))
    alert('✅ Registrazione avvenuta con successo!')
    resetReg()
    navigate('/home')
  }

  // Handler per la parte di LOGIN
  const onSubmitLogin = (data) => {
    const stored = localStorage.getItem('users')
    const users = stored ? JSON.parse(stored) : []

    const found = users.find(
      (u) => u.email === data.email && u.password === data.password
    )
    if (!found) {
      alert('❌ Credenziali errate.')
      return
    }

    localStorage.setItem('currentUser', JSON.stringify(found))
    alert('✅ Login avvenuto con successo!')
    navigate('/home')
  }

  return (
    <div className="registrati-container">
      <h2 className='page-title'>Accedi o Registrati</h2>
      <div className="forms-wrapper">

        {/* FORM REGISTRAZIONE */}
        <div className="form-box">
          <h3 className="form-title">Registrati</h3>

          <form onSubmit={handleSubmitReg(onSubmitRegister)}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                {...registerReg('email', {
                  required: 'L’email è obbligatoria',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato email non valido',
                  },
                })}
              />
              {errorsReg.email && (
                <span className="error-message">{errorsReg.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                {...registerReg('password', {
                  required: 'La password è obbligatoria',
                  minLength: {
                    value: 6,
                    message: 'Minimo 6 caratteri',
                  },
                })}
              />
              {errorsReg.password && (
                <span className="error-message">{errorsReg.password.message}</span>
              )}
            </div>
            <button type="submit" className="btn-primary">
              Registrati
            </button>
          </form>
        </div>

        {/* FORM LOGIN */}
        <div className="form-box">
          <h3 className="form-title">Accedi</h3>
          <form onSubmit={handleSubmitLog(onSubmitLogin)}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                {...registerLog('email', {
                  required: 'L’email è obbligatoria',
                })}
              />
              {errorsLog.email && (
                <span className="error-message">{errorsLog.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                {...registerLog('password', {
                  required: 'La password è obbligatoria',
                })}
              />
              {errorsLog.password && (
                <span className="error-message">{errorsLog.password.message}</span>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Accedi
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
