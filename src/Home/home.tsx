
import { Card } from 'primereact/card';
        
        
const Home = () => {
    return ( 
        <div className="content">
       
            <main className="main-home">
                <div className="main-title">
                    <h1>Personajes</h1>
                </div>
                <section>
                    <div className="home-cards">
                        <div className="home-card">
                            <Card title="personaje1" subTitle="Active" className="md:w-25rem">
                                <p>Status</p>
                                <p>Type</p>

                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Home;