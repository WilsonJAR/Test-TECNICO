
import { useState, useEffect } from "react";
import allCharacter from "../data/cardData";
import { Card } from "primereact/card";
import { Title, HeaderHome, CardDisplay, InfoText } from "../styles";


        
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
              <HeaderHome>
                <Title>Personajes</Title>
    
              </HeaderHome>
                
                <section>
                    <CardDisplay>
                        {characters.map((data, key)=>(
                        <Card title={data.name} subTitle={data.status} header={()=>(<img src={data.image}/>)} className="md:w-25rem">
                          <InfoText className="desripition">Species: {data.species}</InfoText>
                          <InfoText className="type">Type: {data.type}</InfoText>
                        </Card>
                        ))}
                    </CardDisplay>
                </section>
        </div>
     );
}
 
export default Home;