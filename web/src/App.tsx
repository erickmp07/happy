import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./assets/images/logo.svg";

function App() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Bring happiness to the world</h1>
                    <p>Visit residential institutions for children and change their day.</p>
                </main>

                <div className="location">
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </div>

                <a href="" className="enter-app">
                    &gt;
                </a>
            </div>
        </div>
    );
}

export default App;
