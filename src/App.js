import React, { useState } from "react";

import Location from "./components/Location";
import SpareDetails from "./components/SpareDetails";

const App = () => {
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(false);
  const [locationSaved, setLocationSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.toLowerCase() !== "mumbai") {
      setLocationError(true);
    } else {
      setLocationError(false);
      setLocationSaved(true);
    }
  };

  return (
    <div>
      {!locationSaved ? (
        <Location
          location={location}
          locationError={locationError}
          setLocation={setLocation}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SpareDetails />
      )}
    </div>
  );
};

export default App;
