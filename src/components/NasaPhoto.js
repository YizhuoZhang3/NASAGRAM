import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Card from './Card';

const API_KEY = process.env.REACT_APP_NASA_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";
const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

const substractTenDays = (date) =>
  new Date(Date.parse(date) - 864000000).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

const today = new Date().toLocaleDateString("en-CA", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
})

const useEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  });
};

export default function NasaPhoto() {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photoData, setPhotoData] = useState("");
  const [dates, setDates] = useState({
    start: substractTenDays(today),
    end: today,
  });

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

  const handleScroll = () => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setDates((prev) => ({
        ...prev,
        start: substractTenDays(prev.start),
        end: substractTenDays(prev.end),
      }));
    }
  };

  useEvent("scroll", handleScroll);

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
