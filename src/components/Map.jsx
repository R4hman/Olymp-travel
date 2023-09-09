import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SectionTitle } from "../theme";

const Map = ({ mapPosition }) => {
  console.log("mapPosition", mapPosition?.lat);
  const lat = JSON.parse(mapPosition?.lat);
  // console.log("parse lat", lat);
  //   const position = [51.505, -0.09];
  //   console.log(mapPosition.lat);
  //   console.log(mapPosition.lng);
  //   const { lat, lng } = mapPosition;
  //   console.log("lat: " + lat);
  //   console.log("lng: " + lng);
  //   const p = [mapPosition?.lat];
  //   console.log(p);
  //   const position = [mapPosition.lat, mapPosition.lng];

  return (
    <Box sx={{ height: "100%" }}>
      <SectionTitle
        sx={{
          m: "2.5rem 0",
        }}
      >
        Location Map
      </SectionTitle>
      <MapContainer
        // sx={{ height: "100%", backgroundColor: "red" }}
        center={[mapPosition.lat, mapPosition.lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[mapPosition?.lat, mapPosition?.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
