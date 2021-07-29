import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logoImg from "../assets/images/logo.svg";

function Landing() {
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

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;