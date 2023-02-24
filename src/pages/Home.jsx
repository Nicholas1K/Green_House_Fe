import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      
        <img
          src="immagini cool/Green.png"
          id="card-logo"
          className="card-img"
          alt="greenhouse"
        />
      
      <div id="principalcont" className="container mt-5">
        <h1 className="mt-5"> Green House </h1>
        <h2 className="mt-2"> TRASFORMIAMO LA TUA CASA </h2>
        <p className="mt-5">
          La nostra azienda Green House trasforma la tua normale casa in una
          casa eco-sostenibile e auto-sostenibile, questo comporta differenti
          vantagi in primis aiuta l'ambiente per dare un futuro migliore ai
          nostri figli e farli vivere in un ambiente più green non è da
          sottovalutare l'enorme risparmio che si ottiene nel tempo evitando di
          usare le utenze fornite da terzi e produrci noi in autonomia il nostro
          sostentamento di energia e acqua, come lo facciamo?
          <br />
          I pannelli solari, ad esempio, possono aiutare a ridurre i costi di
          energia elettrica, mentre il riciclo dell'acqua può aiutare a ridurre
          i costi di acqua potabile. Inoltre, le stufe a pellet possono aiutare
          a ridurre le emissioni di anidride carbonica.
          <br />
          una casa eco sostenibile può aiutare a ridurre l'impatto ambientale
          complessivo, poiché le tecnologie sostenibili possono aiutare a
          ridurre l'utilizzo di risorse non rinnovabili.
        </p>
        <img
          src="immagini green house/casa-eco-friendly.jpeg"
          className="card-img"
          alt="greenhouse"
        />
        <h2 className="mt-5">
          EFFICIENZA ENERGETICA PER UNA CASA ECO-FRIENDLY
        </h2>
        <p className="mt-5">
          State pensando di acquistare un nuovo frigorifero o una lavatrice?
          Ricordate di leggere bene l’etichetta: comprare un elettrodomestico di
          classe energetica A consente di limitare i consumi energia. I benefici
          sono numerosi: si riducono gli sprechi, si risparmia una fetta di
          budget in bolletta e soprattutto si ha un impatto ambientale ridotto.
          <br />
          Una casa eco-friendly deve basarsi sul consumo consapevole delle
          risorse energetiche e deve privilegiare l’approvvigionamento di tali
          risorse da fonti rinnovabili. Ecco perché per rendere la vostra casa
          più green sarà necessario dotarsi di un impianto solare termico oppure
          di un sistema di pannelli fotovoltaici.
          <br />
          Anche l’illuminazione gioca un ruolo importante: scegliete lampadine
          LED o a basso consumo che vi aiuteranno a consumare meno energia.
        </p>
        <img
          src="immagini green house/interrutore green.png"
          className="card-img mb-3"
          alt="greenhouse"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
