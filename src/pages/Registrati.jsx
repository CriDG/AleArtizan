import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './styles/Registrati.css';

export default function Registrati() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    const password = data.password;

    // Validazione password personalizzata
    const passwordValida =
      /^[A-Z]/.test(password) &&
      password.length >= 6 &&
      (password.match(/\d/g) || []).length >= 2 &&
      /[.,\-]/.test(password);

    if (!passwordValida) {
      alert("La password deve:\n- Iniziare con una lettera maiuscola\n- Avere almeno 6 caratteri\n- Contenere almeno 2 numeri\n- Includere almeno un simbolo tra . , -");
      return;
    }

    console.log("Dati inviati:", data);
    setSuccessMessage("Registrazione completata con successo!");
    reset();

    // Nasconde il messaggio dopo 5 secondi
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Registrazione utente</h2>

      {/* ✅ Messaggio di successo */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Nome */}
      <div>
        <label>Nome:</label>
        <input
          {...register('nome', { required: 'Il nome è obbligatorio' })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="text"
          onInvalid={(e) => e.preventDefault()}
          {...register('email', {
            required: "L'email è obbligatoria",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Formato email non valido'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label>Password:</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'La password è obbligatoria',
              minLength: {
                value: 6,
                message: 'Minimo 6 caratteri'
              }
            })}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Registrati!</button>
    </form>
  );
}
