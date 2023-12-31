import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { HOME_URL, REGISTER_URL } from "../../urls/urls";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const onFail = (_error) => {
    console.log("LOGIN FAILED, Try Again");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(HOME_URL),
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Bienvenido!</h1>
        <p className={styles.welcomeTxt}>
          Inicia sesión para disfrutar tus peliculas y series favoritas!
        </p>

        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eg. john@email.com"
            onChange={onChange}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={onChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleClick}
        >
          Iniciar con google
        </button>

        <Link to={REGISTER_URL} className={styles.loginRedirect}>
          ¿No tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Regístrate</span>
        </Link>
      </form>
    </div>
  );
}