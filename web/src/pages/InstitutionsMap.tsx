import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/institutions-map.css";

import mapMarkerImg from "../assets/images/map-marker.svg";

function InstitutionsMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Choose an institution on the map</h2>
                    <p>The children are waiting for your visit :)</p>
                </header>

                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-institution">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default InstitutionsMap;