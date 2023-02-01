import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addinformation } from "../../redux/reducers/profileInfo";

import "./style.css";

const CreateProfileInfo = () => {
  const navigation = useNavigate();
  /*  const [image1, SetImage1] = useState(""); */
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [image, setImage] = useState(null);
  const [imgerror, setimgError] = useState("");

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [cities, setcities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");

  const dispatch = useDispatch();

  let linkexpression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const nameHandleChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]+$/.test(value)) {
      setName(event.target.value);
      setNameError("");
    }
  };

  const imghandleChange = (event) => {
    const checkedFile = event.target.files[0];
    const file = { link: URL.createObjectURL(event.target.files[0]) };

    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(checkedFile.type)) {
      setimgError("Invalid file type. Only JPEG or PNG images are allowed.");
      return;
    }

    setImage(file);
    setimgError("");
  };

  const linkHandleChange = (event) => {
    const value = event.target.value;
    if (linkexpression.test(value)) {
      setLink(event.target.value);
      setLinkError("");
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      setCountries(response.data);
    };
    fetchCountries();
  }, []);

  const infoState = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(infoState.informations));
  }, [infoState.informations]);

  return (
    <div className="InfoProfile_Div">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={nameHandleChange}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <div>
        <input type="file" name="image" onChange={imghandleChange} />
        {imgerror && <p style={{ color: "red" }}>{imgerror}</p>}
      </div>

      <div>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            console.log(
              countries.data.find((elem) => elem.country === e.target.value)
                .cities
            );
            setcities(
              countries.data.find((elem) => elem.country === e.target.value)
                .cities
            );
          }}
        >
          {countries.data &&
            countries.data.map((items, index) => (
              <option key={index} value={items.country}>
                {items.country}
              </option>
            ))}
        </select>
      </div>

      {selectedCountry && (
        <>
          <h6>Cities in {selectedCountry}</h6>
          <div className="cities_dev">
            {cities.length &&
              cities.map((element, index) => (
                <div key={index} className="checkbox-wrapper">
                  <label className="lable">
                    <input
                      id={element}
                      onChange={(x) => {
                        selectedCities.includes(x.target.id)
                          ? setSelectedCities(
                              selectedCities.splice(
                                selectedCities.indexOf(x.target.id),
                                1
                              )
                            )
                          : setSelectedCities([...selectedCities, x.target.id]);

                        console.log(selectedCities);
                      }}
                      type="checkbox"
                    />
                    <span>{element}</span>
                  </label>
                </div>
              ))}
          </div>
        </>
      )}

      <input
        type="text"
        placeholder="add a websit"
        onChange={linkHandleChange}
      />
      {linkError && <p style={{ color: "red" }}>{linkError}</p>}

      <button
        type="submit"
        onClick={() => {
          if (!name) {
            setNameError("Name is required.");
          }
          if (!image) {
            setimgError("Image is required.");
          }
          if (!link) {
            setLinkError("Link is required.");
          }
          navigation("/Card");
          dispatch(
            addinformation({
              name,
              image,
              selectedCountry,
              selectedCities,
              link,
            })
          );
        }}
      >
        Next
      </button>
      {/*     <img src={image.link} />  */}
    </div>
  );
};

export default CreateProfileInfo;
