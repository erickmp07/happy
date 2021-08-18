import { ChangeEvent, FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Marker } from 'react-leaflet';
import { LeafletMouseEvent } from "leaflet";
import { useHistory } from "react-router-dom";

import Map from "../components/Map";
import PrimaryButton from "../components/PrimaryButton";
import Sidebar from "../components/Sidebar";

import "../styles/pages/create-institution.css";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

export default function InstitutionsMap() {
    const history = useHistory()

    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0
    });

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    
    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng
        });
    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagesPreview);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { latitude, longitude } = position;

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));

        images.forEach(image => {
            data.append("images", image);
        });

        await api.post("institutions", data);

        alert("Institution created.");

        history.push("/app")
    }

    return (
        <div id="page-create-institution">
            <Sidebar />

            <main>
                <form onSubmit={handleSubmit} className="create-institution-form">
                    <fieldset>
                        <legend>Data</legend>

                        <Map 
                            style={{ width: '100%', height: 280 }}
                            onclick={handleMapClick}
                        >

                            { position.latitude !== 0 && (
                                <Marker 
                                    interactive={false} 
                                    icon={mapIcon} 
                                    position={[
                                        position.latitude, 
                                        position.longitude
                                    ]} 
                                />
                            ) }
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Name</label>
                            <input 
                                id="name" 
                                value={name} 
                                onChange={event => setName(event.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">About <span>Maximum 300 characters</span></label>
                            <textarea 
                                id="about" 
                                maxLength={300}
                                value={about} 
                                onChange={event => setAbout(event.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Photos</label>

                            <div className="images-container">
                                {previewImages.map((image, index) => {
                                    return (
                                        <img key={`${name}-image-${index}`} src={image} alt={`${name}-${index}`} />
                                    );
                                })}

                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                            </div>

                            <input 
                                multiple 
                                onChange={handleSelectImages} 
                                type="file"
                                accept="image/*" 
                                id="image[]" 
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitation</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instructions</label>
                            <textarea 
                                id="instructions"
                                value={instructions} 
                                onChange={event => setInstructions(event.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Opening hours</label>
                            <input 
                                id="opening_hours"
                                value={opening_hours} 
                                onChange={event => setOpeningHours(event.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Open on weekend</label>

                            <div className="button-select">
                                <button 
                                    type="button" 
                                    className={open_on_weekends 
                                        ? "active"
                                        : ""}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Yes
                                </button>
                                <button 
                                    type="button"
                                    className={!open_on_weekends 
                                        ? "active"
                                        : ""}
                                        onClick={() => setOpenOnWeekends(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <PrimaryButton type="submit">OK</PrimaryButton>
                </form>
            </main>
        </div>
    );
}