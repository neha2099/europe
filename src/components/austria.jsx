import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./austria.css";
import VImg1 from "../assets/VImg1.webp";
import VImg2 from "../assets/VImg2.webp";
import VImg3 from "../assets/Vimg3.webp";
import VImg4 from "../assets/VImg4.webp";

const placesData = [
  {
    day: "Day 1",
    id: 1,
    name: "Schonbrunn Palace and gardens tour in Vienna",
    img: VImg1,
    details:
      "https://www.klook.com/en-IN/activity/147043-schonbrunn-palace-and-gardens-tour-in-vienna/?spm=SearchResult.SearchSuggest_LIST&clickId=15d6da5a2a",
  },
  {
    day: "Day 1",
    id: 2,
    name: "Vienna Sisi Museum, Hofburg Palace and Gardens Walking Tour",
    img: VImg4,
    details:
      "https://www.klook.com/en-IN/activity/105462-vienna-sisi-museum-hofburg-palace-gardens-join-walking-tour/?spm=SearchResult.SearchSuggest_LIST&clickId=3aba160ad2",
  },
  {
    day: "Day 2",
    id: 3,
    name: "Salzburg City Card",
    img: VImg3,
    details:
      "https://www.klook.com/en-IN/activity/140095-salzburg-city-card/?spm=SearchResult.SearchResult_LIST&clickId=33366a4563",
  },
  {
    day: "Day 3",
    id: 4,
    name: "Hallstatt Day Tour from Salzburg",
    img: VImg2,
    details:
      "https://www.klook.com/en-IN/activity/18281-hallstatt-day-tour-salzburg/?spm=SearchResult.SearchResult_LIST&clickId=f54761103e",
  },
];

const accommodationData = [
  {
    day: "Day 1",
    accommodation: "Novotel Wien City Hotel",
    transport: "Train",
    link2: ["https://www.cd.cz/"],
    link1: [
      "https://www.agoda.com/en-in/novotel-wien-city-hotel/hotel/vienna-at.html?countryId=130&finalPriceView=1&isShowMobileAppPrice=false&cid=1914936&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2025-11-19&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=5c2f0609-043c-4ce2-a498-738f6cfc785b&tspTypes=16&los=1&searchrequestid=9003146e-0c3b-4d53-b67a-83c6063e7619&ds=p%2FrQv4SVKuFQVWbB", // Hotel booking
    ],
  },
  {
    day: "Day 2",
    accommodation: "Sheraton Grand Salzburg",
    transport: "Train",
    link2: [
      "https://www.thetrainline.com/book/results?journeySearchType=return&origin=urn%3Atrainline%3Ageneric%3Aloc%3A17561&destination=urn%3Atrainline%3Ageneric%3Aloc%3A17458&outwardDate=2025-11-10T10%3A30%3A14&outwardDateType=departAfter&inwardDate=2025-11-10T11%3A45%3A14&inwardDateType=departAfter&selectedTab=train&splitSave=true&lang=en&transportModes%5B%5D=mixed&dpiCookieId=RSKG7LF7KTHQ3LB6CU0KZLIEY&partnershipType=accommodation&partnershipSelection=true&selectedOutward=xK5c7o2ccUM%3D%3ArIdYO%2BAd0UY%3D%3AStandard",
    ],
    link1: ["https://www.agoda.com/en-in/sheraton-grand-salzburg_3/hotel/salzburg-at.html?countryId=130&finalPriceView=1&isShowMobileAppPrice=false&cid=1914936&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2025-11-19&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=88b8c56a-6d10-40c2-943c-ad4c7f09eba5&los=1&searchrequestid=9edf16ea-3aac-4b8a-83fc-ad456a9bffc8&ds=Del0dryrZ%2Fx7WedG"],
  },
];

const Austria = () => {
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
    <div className="austria-page">
      <h2>Austria</h2>

      <table className="austria-table">
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
<h5>Accommodation & Transport</h5>
<table className="austria-table">
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
            {/* trip-guide section at the end */}
    <div className="center-container">
  <button className="trip-guide-btn"onClick={() => navigate("/guide2")}>View Trip Guide</button>
</div>
    </div>
  );
};

export default Austria;
