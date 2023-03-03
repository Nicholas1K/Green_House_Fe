import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../styles/News.css";
import { useEffect, useRef, useState } from "react";

const News = () => {
  //controllo form
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [eta, setEta] = useState("");

  //controllo funzioni
  const [controlloNome, setControlloNome] = useState("");
  const [controlloCognome, setControlloCognome] = useState("");
  const [controlloEmail, setControlloEmail] = useState("");
  const [controlloEta, setControlloEta] = useState("");
  const [abilitaBtn, setAbilitaBtn] = useState(true);

  //per invio dati
  const nomeRef = useRef("");
  const cognomeRef = useRef("");
  const emailRef = useRef("");
  const etaRef = useRef("");

  const verificaNome = (e) => {
    const nomeSelezionato = e.target.value;
    setNome(nomeSelezionato);

    if (/^[a-z]{4,}$/.test(nomeSelezionato)) {
      setControlloNome(true);
    } else {
      setControlloNome(false);
    }
  };

  const verificaCognome = (e) => {
    const cognomeSelezionato = e.target.value;
    setCognome(cognomeSelezionato);

    if (/^[a-z]{4,}$/.test(cognomeSelezionato)) {
      setControlloCognome(true);
    } else {
      setControlloCognome(false);
    }
  };

  const verificaEmail = (e) => {
    const emailSelezionata = e.target.value;
    setEmail(emailSelezionata);

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailSelezionata)
    ) {
      setControlloEmail(true);
    } else {
      setControlloEmail(false);
    }
  };

  const verificaEta = (e) => {
    const giornoSelezionato = e.target.value;
    setEta(giornoSelezionato);
    const giornoCorrente = new Date();

    if (giornoCorrente.getFullYear() - giornoSelezionato.split("-")[0] >= 18) {
      setControlloEta(true);
    } else {
      setControlloEta(false);
    }
  };

  //abilita bottone in caso le

  useEffect(() => {
    if (controlloNome && controlloCognome && controlloEmail && controlloEta) {
      setAbilitaBtn(false);
    } else {
      setAbilitaBtn(true);
    }
  }, [controlloNome, controlloCognome, controlloEmail, controlloEta]);

  function submitHandler(event) {
    event.preventDefault();

    console.log("dati inviati correttamente");

    const contact = {
      firstname: nomeRef.current.value,
      lastname: cognomeRef.current.value,
      email: emailRef.current.value,
      dateOfBirth: etaRef.current.value,
    };

    fetch("http://localhost:8080/api/user/create", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });
    return "/";
  }
  function refresh(){
    window.location.reload();
  }

  return (
    <>
      <Navbar />
      <div id="newscont" className="container">
        <form onSubmit={submitHandler} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              name="nome"
              value={nome}
              onChange={verificaNome}
              ref={nomeRef}
            />
            {nome.length > 1 && !controlloNome && (
              <span className="text-danger">nome errato</span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Cognome
            </label>
            <input
              type="text"
              className="form-control"
              name="cognome"
              value={cognome}
              onChange={verificaCognome}
              ref={cognomeRef}
            />
            {cognome.length > 1 && !controlloCognome && (
              <span className="text-danger">cognome errato</span>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputAddress2" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={verificaEmail}
              ref={emailRef}
            />
            {email.length > 1 && !controlloEmail && (
              <span className="text-danger"> email errata</span>
            )}
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                type="date"
                name="eta"
                value={eta}
                onChange={verificaEta}
                ref={etaRef}
              />
              {eta.length > 1 && !controlloEta && (
                <span className="text-danger">devi essere maggiorenne</span>
              )}
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success mb-2"
              disabled={abilitaBtn}
              onClick={refresh}
            >
              prenota
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default News;
