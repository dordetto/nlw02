import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1266501153505894406/lbqnlnSH_400x400.jpg"
          alt="Fábio Dordetto"
        />
        <div>
          <strong>Fábio Dordetto</strong>
          <span>Tecnologia</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de TI do Mundo moderno.
        <br />
        Apaixonado por botões de liga e desliga!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
