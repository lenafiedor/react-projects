import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {

    return (
        <>
            <Header/>
            <CoreConcepts />
            <main>
                <Examples />
            </main>
        </>
    );
}

export default App;
