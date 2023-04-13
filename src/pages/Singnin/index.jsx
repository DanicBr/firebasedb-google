import { useState } from "react";
import { GoogleLogo } from "@phosphor-icons/react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";

import "./styles.scss";

export function SignIn() {
  const [user, setUser] = useState({});
  const { photoURL } = user;

  function handleGoogleSingIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="user">
        {photoURL && <img src={photoURL} alt="Foto do usuario" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, auntenticaçao com a google
        você <br />
        facilita a vida do usuario permitindo utilizar sua aplciaçao sem fazer
        cadastro
      </span>

      <button type="button" className="button" onClick={handleGoogleSingIn}>
        <GoogleLogo />
        Entrar com a google
      </button>
    </div>
  );
}
