import React from 'react';
import Autocomplete from 'react-google-autocomplete'; // Make sure to import Autocomplete

const Location = () => {
  return (
    <Autocomplete
      apiKey={import.meta.env.REACT_GOOGLE_API_KEY}
      onPlaceSelected={(place) => {

        console.log(place);
      }}
      options={{
        types: ["(regions)"],
        componentRestrictions: { country: "gh" },
      }}
      defaultValue="Ghana"
    />
  );
}

export default Location;
