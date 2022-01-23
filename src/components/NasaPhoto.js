import React, { useState, useEffect, useCallback } from "react";
import NavBar from "./NavBar";
import Card from './Card';
import {v4 as uuid} from "uuid";

const API_KEY = process.env.REACT_APP_NASA_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";
const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

export default function NasaPhoto() {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photoData, setPhotoData] = useState([]);
  //console.log(photoData);

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

  const [dates, setDates] = useState({
    start: substractTenDays(today),
    end: today,
  });

  const Url = `${baseUrl}&start_date=${dates.start}&end_date=${dates.end}`;

  const randomLikes = () => Math.floor(Math.random() * 150);

  const processData = (data) => 
    data
      .filter((obj) => obj.media_type === "image")
      .reverse()
      .map((image) => ({
        ...image,
        likes: randomLikes(),
        id: uuid(),
        isSaved: false,
      }));

  const fetchData = useCallback(
    async(url, setState) => {
      setIsLoading(true);
      try{
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        const processedData = processData(data);
        //console.log("this is processed data", processedData);
        setPhotoData((prev) => prev.concat(processedData));
      } catch (err){
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    }, [])

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

  const useEvent = (event, callback) => {
    useEffect(() => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    });
  };

  useEvent("scroll", handleScroll);

  useEffect(() => {
    fetchData(Url, setPhotoData);
  }, [Url, setPhotoData]);

  // like an image
  const like = (id) => {
    setPhotoData((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, likes: image.likes + 1} : image,
      ),
    );
  };

  // unlike an image
  const unlike = (id) => {
    setPhotoData((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, likes: image.likes - 1} : image,
      ),
    );
  };

  // mark save
  const save = (id) => {
    setPhotoData((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, isSaved: true} : image,
      ),
    );
  };

  //remove save mark
  const remove = (id) => {
    setPhotoData((prev) =>
      prev.map((image) =>
        image.id === id ? {...image, isSaved: false} : image,
      ),
    );
  };

  return (
    <>
    <NavBar />
    <div className='feed-container'>
      {photoData.map((image) => (
        <Card 
          key={image.id} 
          image={image}
          like={like}
          unlike={unlike}
          save={save}
          remove={remove}
         />
      ))}
    </div>
    </>
  );
}
