
import { useState, useEffect } from "react";
import allCharacter from "../data/cardData";
import './home.css'

        
const Home = () => {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allCharacter();
        setCharacters(data.results); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


    return ( 
        <div className="content">
            <main className="main-home">
                <div className="main-title">
                    <h1>Personajes</h1>
                </div>
                <section>
                    <div className="home-cards">
                        {characters.map((data, key)=>(
                        <div key={key.id} className="home-card">
                            <img src={data.image} alt="" />
                            <h1 className="title">{data.name}</h1>
                            <h2 className="subtitle">{data.status}</h2>
                            <p className="desripition">{data.species}</p>
                            <p className="type">{data.type}</p>
                        </div>
                        ))}

                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Home;