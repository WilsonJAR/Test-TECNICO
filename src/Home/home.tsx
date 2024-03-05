
import { useState, useEffect } from "react";
import allCharacter from "../data/cardData";
import './home.css'
import { Card } from "primereact/card";
import imagen from '../assets/fondo rick 1.svg'

        
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

  console.log(characters)

    return ( 
        <div className="content">
            <main className="main-home">
                <div className="main-title">
                    <h1>Personajes</h1>
                </div>
                <section>
                    <div className="home-cards">
                        {characters.map((data, key)=>(
                        <Card title={data.name} subTitle={data.status} header={()=>(<img src={data.image}/>)} className="md:w-25rem">
                          <p className="desripition">{data.species}</p>
                          <p className="type">{data.type}</p>
                        </Card>
                        ))}
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Home;