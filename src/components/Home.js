import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="home-page">
      <div className="homelink">
      <Link to='/nasaphoto'>See into the stars!</Link>
      </div>
    </div>
  )
}