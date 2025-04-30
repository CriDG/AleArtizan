import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Home.css';

const Home = () => {
  const carouselImages = [
    'https://res.cloudinary.com/dsatempym/image/upload/v1742033505/diverse1_afjxlt.jpg',
    'https://res.cloudinary.com/dsatempym/image/upload/v1742033506/diverse2_yopmbx.jpg',
    'https://res.cloudinary.com/dsatempym/image/upload/v1742031391/diverse3_qpazry.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    adaptiveHeight: true,
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <div className="home">
      {/* Section Chi Siamo */}
      <section id="chi-siamo" className={`about-us ${isVisible ? 'show' : ''}`}>
        <div className="about-container">
          <img
            src="https://res.cloudinary.com/dsatempym/image/upload/v1742033733/482221446_612030938482941_3553248523246822369_n_ouqoin.jpg"
            alt="Chi siamo"
            crossOrigin="anonymous"
            className="about-image"
          />

          <div className="about-text">
            <h2>Chi siamo</h2>
            <h3>La nostra storia...</h3>
            <p>
              Loredana Gavriliu ha lavorato per la prima volta con il macramè
              quando sua figlia ha dovuto partecipare a un mercatino di Natale
              di beneficenza con un ornamento fatto a mano. Pian piano ha creato
              sempre più ornamenti di questo tipo e, incoraggiata dalla
              famiglia, ha trasformato la sua passione in una piccola attività,
              che oggi porta il nome di AleArtizan - Bambole di Macramè. "Su
              consiglio della mia famiglia, ho partecipato al mercatino di
              Mărțișor nella nostra città, dove questi ornamenti sono stati
              accolti molto bene. Questo ci ha dato la spinta per andare avanti
              e, da allora, da un anno e mezzo, realizziamo bambole di macramè",
              ha raccontato Loredana durante la trasmissione ZF Afaceri de la
              Zero, un progetto sostenuto da Banca Transilvania. Anche se
              realizza le bambole di macramè da sola, le nonne della famiglia la
              aiutano con altre componenti per i quadri, che possono essere
              regalati in qualsiasi occasione. Ad esempio, i quadri creati da
              Loredana raffigurano famiglie, turiste con trolley e cappelli,
              sposi, insegnanti, e l'artista cerca di far somigliare il più
              possibile i personaggi dei quadri alle persone a cui verranno
              donati.
            </p>
          </div>
        </div>
      </section>

      {/*Section cosa faciamo*/}
      <section
        id="cosa-facciamo"
        className={`gallery-section ${isVisible ? 'show' : ''}`}
      >
        <div className="gallery-container">
          <div className="gallery-text">
            <h2>Cosa facciamo...</h2>
            <p>
              Non tutti i regali di oggi sono commerciali e impersonali. Se hai
              la pazienza di cercare, troverai in Romania numerosi artigiani
              locali come AleArtizan, che porta un tocco nuovo e autentico
              attraverso le sue delicate creazioni di bambole in macramè. I
              quadri personalizzati di AleArtizan sono vere e proprie opere
              d'arte, perfette per essere regalate alle persone care. Ogni
              bambola AleArtizan è realizzata a mano con cura e attenzione ai
              dettagli, riflettendo la passione e la maestria dell’artigiana che
              si cela dietro il brand.
            </p>
            <h2>Regali unici per ogni occasione</h2>
            <p>
              Le bambole in macramè AleArtizan sono doni semplici, ma
              straordinariamente belli grazie alla loro unicità. Che tu stia
              cercando un regalo per un'occasione speciale o voglia
              semplicemente regalare un sorriso a una persona cara, AleArtizan
              ha la soluzione perfetta.
            </p>
          </div>

          {/* Slider dentro la nuova section */}
          <div className="gallery-carousel">
            <Slider {...sliderSettings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="gallery-slide">
                  <img src={image} alt={`Slide ${index + 1}`} crossOrigin="anonymous"  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;