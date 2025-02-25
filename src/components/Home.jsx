import { motion } from "framer-motion";
import "./Home.css"; // Stili

const images = [
    "https://i.postimg.cc/525h5mKV/prezentare1.jpg",
    "https://i.postimg.cc/fbB1pRhq/prezentare2.jpg",
    "https://i.postimg.cc/W42Q5JxJ/prezentare3.jpg",
    "https://i.postimg.cc/MTHgSJ66/prezentare4.jpg",
    "https://i.postimg.cc/FR68FCzj/prezentare5.jpg",
];

const Home = () => {
    return (
        <div className="gallery-container">
            <motion.div 
                className="gallery-track"
                animate={{ x: ["0%", "-100%"] }} // Sposta le immagini a sinistra
                transition={{ 
                    repeat: Infinity, 
                    duration: 20, // 🔄 Velocità dello scorrimento (puoi aumentarla o ridurla)
                    ease: "linear"
                }}
            >
                {/* Duplichiamo il set di immagini per creare l'effetto infinito */}
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Home;
