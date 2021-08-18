import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiClock, FiInfo } from "react-icons/fi";
import { Marker } from "react-leaflet";

import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

import "../styles/pages/institution.css";

interface IInstitution {
    name: string;
    about: string;
    latitude: number;
    longitude: number;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
        id: number;
        url: string;
    }>;
}

interface InstitutionParams {
    id: string;
}

export default function Institution() {
    const params = useParams<InstitutionParams>();
    const [institution, setInstitution] = useState<IInstitution>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        api.get(`institutions/${params.id}`).then(response => {
            setInstitution(response.data);
        });
    }, [params.id]);
    
    if (!institution) {
        return <p>Loading...</p>;
    }

    return (
        <div id="page-institution">
            <Sidebar />

            <main>
                <div className="institution-details">
                    {
                        activeImageIndex < institution.images.length
                        ? (
                            <img src={institution.images[activeImageIndex].url} alt={institution.name} />
                        ) 
                        : null
                    }
                    
                    <div className="images">
                        {institution.images.map((image, index) => {
                            return (
                                <button 
                                    key={image.id} 
                                    className={activeImageIndex === index
                                        ? "active"
                                        : ""} 
                                    type="button"
                                    onClick={() => {
                                        setActiveImageIndex(index);
                                    }}
                                >
                                    <img src={image.url} alt={institution.name} />
                                </button>
                            );
                        })}
                    </div>

                    <div className="institution-details-content">
                        <h1>{institution.name}</h1>
                        <p>
                            {institution.about}
                        </p>

                        <div className="map-container">
                            <Map
                                interactive={false}
                                center={[institution.latitude, institution.longitude]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                            >
                                <Marker interactive={false} icon={mapIcon} position={[institution.latitude, institution.longitude]} />
                            </Map>

                            <footer>
                                <a
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${institution.latitude},${institution.longitude}`}
                                >
                                    See directions on Google Maps
                                </a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Visit Instructions</h2>
                        <p>{institution.instructions}</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                Monday to Friday <br />
                                {institution.opening_hours}
                            </div>
                            { institution.open_on_weekends
                                ? (
                                    <div className="open-on-weekends">
                                        <FiInfo size={32} color="#39CC83" />
                                        Open on <br />
                                        weekends
                                    </div>
                                )
                                : (
                                    <div className="open-on-weekends dont-open">
                                        <FiInfo size={32} color="#ff669d" />
                                        Closed on <br />
                                        weekends
                                    </div>
                                )
                            }
                        </div>

                        {/*<PrimaryButton type="button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Contact
                        </PrimaryButton>*/}
                    </div>
                </div>
            </main>
        </div>
    );
}