import React, { useState } from "react";
import "./login.css";
import { RiCloseLargeLine } from "react-icons/ri";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Se connecter");
  return (
    <div className="login">
      <form className="login-cantainer">
        <div className="login-title">
          {currentState}
          <RiCloseLargeLine
            className="log"
            size={25}
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        <div className="login-inputs">
          {currentState === "Se connecter" ? (
            <>
              <input type="email" placeholder="Email " required />
              <input type="password" placeholder="Mot de passe " required />
            </>
          ) : (
            <>
              <input type="text" placeholder="Nom" required />
              <input type="email" placeholder="Email " required />
              <input type="email" placeholder="Numero de Telephone " required />
              <input type="password" placeholder="Mot de passe " required />
            </>
          )}
        </div>
        <button type="submit" className="login-btn">
          {currentState === "S'inscrire" ? "Créer un compte" : "Se connecter"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>
            En continuant, j'accepte les conditions d'utilisation et la
            politique de confidentialité.
          </p>
        </div>
        {currentState === "Se connecter" ? (
          <p>
            Créer un nouveau compte ?
            <span
              onClick={() => {
                setCurrentState("S'inscrire");
              }}
            >
              {" "}
              S'inscrire
            </span>
          </p>
        ) : (
          <p>
            Vous avez déjà un compte ?
            <span
              onClick={() => {
                setCurrentState("Se connecter");
              }}
            >
              {" "}
              Se connecter
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
