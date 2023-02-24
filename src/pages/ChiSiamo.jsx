import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../styles/PannelliF.css";

const ChiSiamo = () => {
  return (
    <>
      <Navbar />
      <div id="supercont" className="container">
        <h1>Green House</h1>
        <img
          className="card-img mt-5"
          src="immagini green house/transizione-ecologica.jpeg"
          alt="riciclo verde"
        />
        <h2 className="mt-5">la nostra visione</h2>
        <p className="mt-5">
          La nostra azienda cerca di offrire la soluzione migliore per
          trasformare completamente la tua casa in una casa Eco sostenibile e
          Auto sostenibile, queste sono le parole magiche per aiutare il nostro
          pianeta e le nostre tasche, facendo in modo di utilizzare l'energia
          che la natura ci da e usare sempre meno le fonti di energia prodotte
          dall'essere umano, che oltre ad avere di anno in anno costi sempre più
          elevati, producono Co2 per la produzione e il trasporto delle fonti di
          energia offerte ai clienti in questo modo aumentando l'inquinamento,
          per non parlare dei costi inspiegabili e incomprensibili in bolletta.
        </p>
        <h2 className="mt-5"> Casa Eco Sostenibile</h2>
        <p className="mt-5">
          Cosa significa trasformare la tua casa in Eco sostenibile? significa
          prenere l'energia dalla natura come usare l'energia solare per
          produrre energia elettrica, usare stufe a pellet per avere un
          riscaldamento green e riciclare l'acqua piovana per utilizzarla per
          lavatrice, lavastoviglie, wc e irrigazione piante, volendo si può
          anche filtrare e fare diventare potabile, Incredibile vero?! Questo ci
          porta all'altra parola magica ovvero Auto sostenibile, si perchè in
          questa maniera sarai sempre meno legato/a alle utenze e si può
          addirittura arrivare a svincolarsi completamente da bollette e servizi
          terzi.
        </p>
        <h2 className="mt-5"> Siamo pronti ad aiutarti</h2>
        <p className="mt-5">
          Fissa un appuntamento con uno dei nostri ingegnieri, possiamo arrivare
          in tutta Italia, e saremo felici di trasformare la tua casa e la tua
          vita in Green così tu e il pianeta sarete felici, e il futuro sarà più
          pulito e bello, grazie a te e quelli come te che decidono di
          migliorare attivamente il mondo.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default ChiSiamo;
