import React, {useRef} from "react";
import {MapContainer,TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Pacmap = ({setShow}) => {
    const mapRef = useRef(null);
    const latitude = 40.749;
    const longitude = -73.988;

    return ( 
    <div className="mappc">
        <h1>UNDER DEVELOPMENT</h1>
        <FontAwesomeIcon icon={faClose} onClick={() => setShow(false)} className="close"/>
        <div className="themap">
            <MapContainer center={[latitude, longitude]} zoom={20} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
              <TileLayer
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/jjjjohann/clvvu2gz101q101o0ae2g8dww/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiampqam9oYW5uIiwiYSI6ImNsdnZ3MDkyMzFsZHoya253ejBxd2tiaHAifQ.a6HHR5_GIJx2C4wMyBxEaw"
                />
              {/* Additional map layers or components can be added here */}
            </MapContainer>
        </div>
    </div>
    );
}

export default Pacmap;