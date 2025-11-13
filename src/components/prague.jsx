import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./prague.css";
import CKImg from "../assets/CKImg.jpg";
import PImg2 from "../assets/PImg.jpg";
import BImg from "../assets/BImg.png";
import PImg3 from "../assets/PImg3.webp";

const placesData = [
  { day: "Day 1", id: 1, name: "Cesky Krumlov", img: CKImg, details: "https://www.klook.com/en-IN/activity/108938-prague-to-cesky-krumlov-one-day-trip/?spm=SearchResult.SearchResult_LIST&clickId=38ba2e5dc1", photos: [] },
  { day: "Day 2", id: 2, name: "Old Town , Prague Castle Walking Tour", img: PImg3, details: "https://www.klook.com/en-IN/activity/107025-folkloric-dinner-show-experience-prague/?spm=SearchResult.SearchResult_LIST&clickId=d03c409da4.", photos: [] },
  { day: "Day 2", id: 3, name: "Charles Bridge", img: PImg2, details: "https://www.klook.com/en-IN/activity/118976-old-town-charles-bridge-and-prague-castle-walking-tour-in-prague/?spm=SearchResult.SearchResult_LIST&clickId=cae5e005f3", photos: [] },
  { day: "Day 3", id: 4, name: "Brno", img: BImg, details: "https://www.tripadvisor.in/SmartDeals-g274714-Brno_South_Moravian_Region_Moravia-Hotel-Deals.html.", photos: [] },
];

const accommodationData = [
  {
    day: "Day 1",
    accommodation: "Hotel Golden Key Prague",
    transport: "Train",
    link2: ["https://www.cd.cz/"],
    link1: [
      "https://www.booking.com/hotel/cz/aureus-clavis.en-gb.html", // Hotel booking
    ],
  },
  {
    day: "Day 2",
    accommodation: "Hotel Golden Key Prague",
    transport: "Bus",
    links: [
      "https://www.booking.com/hotel/cz/aureus-clavis.en-gb.html",
    ],
  },
  {
    day: "Day 3",
    accommodation: "Hotel Golden Key Prague",
    transport: "Train",
    link2: ["https://www.cd.cz/"],
    link1: [
      "https://www.booking.com/hotel/cz/aureus-clavis.en-gb.html",
    ],
  },
];

const Prague = () => {
  const [places, setPlaces] = useState(
    placesData.map((place) => ({ ...place, photos: [] }))
  );
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  const closeModal = () => setSelectedPlace(null);

  const handleViewDetails = (placeName) => {
    closeModal();
    navigate(`/details/${placeName}`);
  };

  const handlePhotoUpload = (e, placeId) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPlaces((prev) =>
      prev.map((place) =>
        place.id === placeId
          ? { ...place, photos: [...place.photos, ...newPhotos] }
          : place
      )
    );
  };

  return (
    <div className="prague-page">
      <h2>Prague</h2>

      <table className="prague-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Image</th>
            <th>Place Name</th>
            <th>Description</th>
            <th>Memories</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place) => (
            <tr key={place.id} className="table-row">
              <td>{place.day}</td>
              <td>
                <img src={place.img} alt={place.name} className="table-img" />
              </td>
              <td>{place.name}</td>
              <td>
                <a
                  href={place.details}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {place.details.length > 80
                    ? place.details.slice(0, 80) + "..."
                    : place.details}
                </a>
              </td>
              <td>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handlePhotoUpload(e, place.id)}
                />
                <button onClick={() => setSelectedPlace(place)}>Post Cards</button>
                <div className="uploaded-photos">
                  {place.photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.url}
                      alt={photo.name}
                      className="table-img"
                    />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        
<h3>Accommodation & Transport</h3>
<table className="prague-table">
  <thead>
    <tr>
      <th>Day</th>
      <th>Accommodation</th>
      <th>Transport</th>
      <th>Hotel Link</th>
      <th>Transport Link</th>
    </tr>
  </thead>
  <tbody>
    {accommodationData.map((item, index) => (
      <tr key={index}>
        <td>{item.day}</td>
        <td>{item.accommodation}</td>
        <td>
  <span className={`transport-badge ${item.transport.trim()}`}>
    {item.transport}
  </span>
</td>

        <td>
          <a href={item.link1} target="_blank" rel="noopener noreferrer">
            Book Here
          </a>
        </td>
        <td>
          <a href={item.link2} target="_blank" rel="noopener noreferrer">
            Book Here
          </a>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      {selectedPlace && (
        <div className="details-modal" onClick={closeModal}>
          <div
            className="details-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <img src={selectedPlace.img} alt={selectedPlace.name} />
            <h3>{selectedPlace.name}</h3>

            {selectedPlace.details.startsWith("http") ? (
              <a
                href={selectedPlace.details}
                target="_blank"
                rel="noopener noreferrer"
                className="details-link"
              >
                View more about {selectedPlace.name}
              </a>
            ) : (
              <p>{selectedPlace.details}</p>
            )}

            <button
              className="view-details-btn"
              onClick={() => handleViewDetails(selectedPlace.name)}
            >
              View Details
            </button>
          </div>
        </div>
      )}
            {/* trip-guide section at the end */}
    <div className="center-container">
  <button className="trip-guide-btn"onClick={() => navigate("/guide1")}>View Trip Guide</button>
</div>
    </div>
  );
};
export default Prague;
