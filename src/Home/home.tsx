
import { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Title, HeaderHome, CardDisplay, InfoText } from "../styles";
import { ajax } from "rxjs/ajax";
import { pluck } from "rxjs";

        
const Home = () => {
    const [characters, setCharacters] = useState([]);

    const getData = () => {
      return ajax
        .get("https://rickandmortyapi.com/api/character")
        .pipe(
          pluck("response"),
        )
        .subscribe((res: any) => {
          setCharacters(res.results);
        });
      }
      
      
      useEffect(()=> {
        getData();
      }, []);


    return ( 
        <div className="content">
              <HeaderHome>
                <Title>Personajes</Title>
    
              </HeaderHome>
                
                <section>
                    <CardDisplay>
                        {characters.map((data: any, key)=>(
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