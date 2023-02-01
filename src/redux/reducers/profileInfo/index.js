import { createSlice } from "@reduxjs/toolkit";

const informations = createSlice({
  name: "informations",
  initialState: {
    informations: JSON.parse(localStorage.getItem("cardData")) || {},
  },
  reducers: {
    addinformation: (state, action) => {
      console.log("the Action : ", action.payload);
      state.informations = {
        name: action.payload.name,
        image: action.payload.image,
        location: {
          country: action.payload.selectedCountry,
          cities: action.payload.selectedCities,
        },
        link: action.payload.link,
      };
    },
  },
});

export const { addinformation } = informations.actions;

export default informations.reducer;
