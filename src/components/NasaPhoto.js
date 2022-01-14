import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Card from './Card';

const API_KEY = process.env.REACT_APP_NASA_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

export default function NasaPhoto() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photoData, setPhotoData] = useState("");
  console.log(photoData)

  let date = new Date();
  let today = date.toISOString().slice(0, 10);
  let pastDate = new Date(date);
  pastDate.setDate(pastDate.getDate() - 35);
  let finalDate = pastDate.toISOString().slice(0, 10);

  const [dates, setDates] = useState({
    start: finalDate,
    end: today,
  });

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

  useEffect(() => {
    fetchData();
    async function fetchData() { 
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}&start_date=${dates.start}&end_date=${dates.end}`);
      const data = await response.json()
      setPhotoData(data);
    } catch (error) {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 10000);
        console.log(error)
      }
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
    <NavBar />
    <div className='feed-container'>
      {photoData.map((image) => (
        <Card 
          key={image.id} 
          picture={image}
         />
      ))}
    </div>
    </>
  );
}
