import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./croatia.css";
import BImg1 from "../assets/BImg1.webp";
import BImg2 from "../assets/BImg2.jpg";
import BImg3 from "../assets/BImg3.jpg";



const placesData = [
  {
    day: "Day 1",
    id: 1,
    name: " Fisher'sman Bastion, stephen's cruch, Szechenyi thermal bath",
    img: BImg1,
    details:
      "https://www.klook.com/en-IN/activity/110663-szechenyi-full-day-spa-with-optional-palinka-tour-in-budapest/",
  },
{
    day: "Day 1",
    id: 2,
    name: "Budapest Parliament Tour ",
    img: BImg2,
    details:
      "https://www.tripadvisor.in/AttractionProductReview-g274887-d25177432-Budapest_Parliament_Tour_with_Audio_Guide-Budapest_Central_Hungary.html",
  },
   {
    day: "Day 1",
    id: 3,
    name: "Budapest Evening Cruise with Entertainment,bridge, chruch",
    img: BImg3,
    details:
      "https://www.tripadvisor.in/AttractionProductReview-g274887-d11452787-Budapest_Evening_Cruise_with_Entertainment_and_Drink_Options-Budapest_Central_Hung.html",
  },
];

const accommodationData = [
  {
    day: "Day 1",
    accommodation: "Maverick Downtown",
    transport: "Train",
    link2: ["https://www.omio.com/trains/vienna/budapest?msclkid=6f892a66f2db183fc9214377899d6c96&utm_source=bing&utm_medium=cpc&utm_campaign=SEM_UX_EN_TRAIN_ALL_ALL_I.III_%5BTRAIN_01_ROU2%7CPRO_0%5D_E%3ATRAIN_NOPRO_(VIENNA_368571_AT)_(BUDAPEST_383168_HU)&utm_term=train%20vienna%20budapest&utm_content=SEM_UX_EN_TRAIN_ALL_ALL_I.III_%5BTRAIN_01_ROU2%7CPRO_0%5D_E%3ATRAIN_NOPRO_(VIENNA_368571_AT)_(BUDAPEST_383168_HU)"],
    link1: [
      "https://www.booking.com/hotel/hu/maverick-doubles.html?aid=339462&label=msn-iCneR7a31rgwWCNLO8F0Kg-79920942822128%3Atikwd-79921127678714%3Aloc-90%3Aneo%3Amte%3Alp156150%3Adec%3Aqshotels%20in%20budapest%20hungary&sid=0376605dd74b3d9f27331ff4ce4690e9&all_sr_blocks=18524601_91911509_2_0_0&checkin=2026-01-05&checkout=2026-01-06&dest_id=-850553&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=14&highlighted_blocks=18524601_91911509_2_0_0&hpos=14&matching_block_id=18524601_91911509_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=18524601_91911509_2_0_0__9515&srepoch=1762753228&srpvid=334627d2bf4808c8&type=total&ucfs=1&", // Hotel booking
    ],
  },

];

const Croatia = () => {
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
    <div className="croatia-page">
      <h2>Croatia</h2>

      <table className="croatia-table">
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

      <h4>Accommodation & Transport</h4>
<table className="croatia-table">
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
  <button className="trip-guide-btn"onClick={() => navigate("/guide")}>View Trip Guide</button>
</div>

    </div>
  );
};

export default Croatia;
