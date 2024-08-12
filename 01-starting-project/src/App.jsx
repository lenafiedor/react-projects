import {useState} from "react";

import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from "./components/TabButton.jsx";

function App() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (
                            <CoreConcept key={conceptItem.title} {...conceptItem} />
                        ))}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isActive={selectedTopic === 'components'}
                                   onClick={() => handleClick('components')}>Components
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'jsx'}
                                   onClick={() => handleClick('jsx')}>JSX
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'props'}
                                   onClick={() => handleClick('props')}>Props
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'state'}
                                   onClick={() => handleClick('state')}>State
                        </TabButton>
                    </menu>
                    {!selectedTopic ? (
                        <p>Please select a topic.</p>
                    ) : (
                        <div id='tab-content'>
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
