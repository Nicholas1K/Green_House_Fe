import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../styles/PannelliF.css";

const AcquaR = () => {
  return (
    <>
      <Navbar />
      <div id="supercont" className="container">
        <h1>RECUPERO ACQUE PIOVANE</h1>
        <img
          className="card-img mt-5"
          src="immagini green house/FIG-3 recuper acqua.png"
          alt="Stufe a pellet"
        />
        <h2 className="mt-5">Tutto ciò che c’è da sapere</h2>
        <p className="mt-5">
          Esistono diversi dispositivi di recupero dell’acqua piovana; tutti
          rispondono allo stesso principio di funzionamento. Partendo dal tetto,
          ecco gli elementi principali: Sistema di drenaggio Sistema di grondaie
          per il recupero dell’acqua che scende dal tetto Sistema di filtraggio
          per proteggere da elementi esterni, come foglie Tubi di caduta, che
          collegano il dispositivo della grondaia con i serbatoi di raccolta; I
          raccoglitori Il recuperatore
        </p>
        <h2 className="mt-5">
          Come riutilizzare l’acqua piovana per uso domestico?
        </h2>
        <p className="mt-5">
          Non tutte le nostre attività domestiche richiedono l’utilizzo
          dell’acqua potabile! L’acqua piovana, in quanto priva di calcare e con
          un ph basso, se depurata attraverso un sistema di recupero ben
          progettato, può essere riutilizzata per: scarichi WC lavatrice
          lavaggio auto, pavimenti, animali domestici irrigazione piante
          ornamentali, prati e zone verdi condizionatori e pompe di calore
        </p>
        <img
          className="card-img mt-5"
          src="immagini green house/grafico uso acqua.png"
          alt="Stufe a pellet"
        />
        <h2 className="mt-5">
          Quale sistema di raccolta scegliere per coperture di grandi
          dimensioni?
        </h2>
        <p className="mt-5">
          La soluzione ideale in caso di edifici di grandi dimensioni è il
          sistema sifonico Wavin Quickstream unito ai serbatoi da interro Wavin
          Q-Bic Plus. Il sistema sifonico Wavin QuickStream è particolarmente
          adatto a questo tipo di applicazioni in quanto: I collettori non
          richiedendo alcuna pendenza poiché la depressione sviluppata
          all’interno del sistema garantisce un ottimo drenaggio anche in caso
          di eventi meteorici di particolare intensità. Ottimizza la
          disposizione degli impianti complementari (antincendio, aria
          condizionata) Riduce le tubazioni di scarico interrate Riduce il
          numero, lunghezza e diametri delle tubazioni Richiede un minor numero
          di punti di captazione Riduce la possibilità di perdite Richiede poca
          manutenzione Risulta facile da installare È costituito da materiali
          stabili e duraturi Rispetto ad una soluzione convenzionale, questa
          tipologia di impianto assicura l'efficace allontanamento delle acque
          senza sovraccarichi alle strutture del tetto né allagamenti
          all’interno degli edifici. Infatti importanti edifici di grandi
          dimensioni, come le sedi Ikea e l’aeroporto Marco Polo di Venezia,
          hanno adottato i sistemi Wavin per garantire una raccolta dell’acqua
          piovana efficiente e sicura.
        </p>
        <video className="card-img" width="750" height="540" controls>
          <source
            src="video/recupero acqua piovana per casa e giardino _ GRAF.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Footer />
    </>
  );
};
export default AcquaR;
