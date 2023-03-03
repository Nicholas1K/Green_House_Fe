import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useEffect, useRef, useState } from "react";
import "../styles/Prenota.css"

const Prenota = () => {
  //useState di controllo form
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  //useState per le funzioni
  const [controlloNome, setControlloNome] = useState("");
  const [controlloCognome, setControlloCognome] = useState("");
  const [controlloEmail, setControlloEmail] = useState("");
  const [controlloData, setControlloData] = useState("");
  const [abilitaBtn, setAbilitaBtn] = useState(true);
  
  //useRef invio dati
  const cittaRef = useRef("");
  const regioneRef = useRef("");
  const indirizzoRef = useRef("");
  const nomeRef = useRef("");
  const cognomeRef = useRef("");
  const telefonoRef = useRef("");
  const emailRef = useRef("");
  const appuntamentoRef = useRef("");

  const verificaName = (e) => {
    const nomeSelezionato = e.target.value;
    setNome(nomeSelezionato);

    if (/^[a-z]{4,}$/.test(nomeSelezionato)){
      setControlloNome(true);
    }else{
      setControlloNome(false);
    }
  };
  const verificaCognome = (e)=>{
    const cognomeSelezionato = e.target.value;
    setCognome(cognomeSelezionato);

    if(/^[a-z]{4,}$/.test(cognomeSelezionato)){
      setControlloCognome(true);
    }else{
      setControlloCognome(false);
    };
  }
  const verificaEmail = (e) => {
    const emailSelezionata = e.target.value;
    setEmail(emailSelezionata);

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailSelezionata)){
      setControlloEmail(true);
    }else{
      setControlloEmail(false);
    };
  };
  const verificaData = (e) => { //l'appuntamento non può essere preso per un giorno già trascorso
    const giornoSelezionato = e.target.value;
    setData(giornoSelezionato);
    const giornoCorrente = new Date();

    if(new Date(giornoSelezionato).getTime() <= giornoCorrente.getTime()){
      setControlloData(false);
    }else{
      setControlloData(true);
    };
  }

  // funzione per abilitare il bottone di invio dati

  useEffect(() => {
    if (controlloNome && controlloCognome && controlloEmail && controlloData) {
      setAbilitaBtn(false);
    } else {
      setAbilitaBtn(true);
    }
  }, [controlloNome,controlloCognome,controlloEmail,controlloData]);

  function submitHandler(event) {
    event.preventDefault();

    console.log("dati inviati correttamente");

    const contact = {
      //le props devono corrispondere allo stesso nome di quelle sul backend
      city: cittaRef.current.value,
      region: regioneRef.current.value,
      address: indirizzoRef.current.value,
      firstName: nomeRef.current.value,
      lastName: cognomeRef.current.value,
      telephonNumber: telefonoRef.current.value,
      email: emailRef.current.value,
      meetingTime: appuntamentoRef.current.value,
    };
    

    //fetch per la post visto che vive all'interno di una funzione non può essere anche lei una funzione 
       fetch(
        "http://localhost:8080/api/reservation/create",
        {
          method: "POST",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        }
      );
      return "/"
    
  }
  

  return (
    <>
      <Navbar />
      <div id="formcont" className="container">
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
              onChange={verificaName}
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
              <span className="text-danger">nome errato</span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress" className="form-label">
              Telefono
            </label>
            <input type="text" className="form-control" ref={telefonoRef} />
          </div>
          <div className="col-md-6">
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
              <span className="text-danger">email non corretta</span>
            )}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputCity" className="form-label">
              Città
            </label>
            <input type="text" className="form-control" ref={cittaRef} />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Regione
            </label>
            <input type="text" className="form-control" ref={regioneRef} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              Indirizzo
            </label>
            <input type="text" className="form-control" ref={indirizzoRef} />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                type="datetime-local"
                name="data"
                value={data}
                onChange={verificaData}
                ref={appuntamentoRef}
              />
              {data.length > 1 && !controlloData && (
                <span className="text-danger">
                  la data non deve essere inferiore o uguale a oggi
                </span>
              )}
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success mb-2"
              disabled={abilitaBtn}
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
export default Prenota;
