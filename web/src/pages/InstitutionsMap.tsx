import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import "../styles/pages/institutions-map.css";

import mapMarkerImg from "../assets/images/map-marker.svg";

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

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

            <Map
                center={[-22.836890,-43.306710]}
                zoom={15}
                style={{ width: "100%", height: "100%" }} 
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                    icon={mapIcon}
                    position={[-22.836890,-43.306710]} 
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Institution's name
                        <Link to="">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="" className="create-institution">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default InstitutionsMap;