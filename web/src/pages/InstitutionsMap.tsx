import { useEffect, useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../assets/images/map-marker.svg";

import Map from "../components/Map";

import "../styles/pages/institutions-map.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Institution {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function InstitutionsMap() {
    const [institutions, setInstitutions] = useState<Institution[]>([]);

    useEffect(() => {
        api.get("institutions").then(response => {
            setInstitutions(response.data);
        });
    }, []);

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

            <Map>
                {institutions.map(institution => {
                    return (
                        <Marker
                            key={institution.id }
                            icon={mapIcon}
                            position={[institution.latitude, institution.longitude]} 
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {institution.name}
                                <Link to={`/institutions/${institution.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/institutions/create" className="create-institution">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default InstitutionsMap;