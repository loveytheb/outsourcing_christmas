import React from "react";
import { useState } from "react";
import { Map, MapMarker, useMap, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

function TreeMap() {
  const navigate = useNavigate();
  const toDetailBtn = (id) => {
    navigate(`detail/${id}`);
  };
  const data = [
    {
      content: (
        <div style={{ padding: "5px", color: "#000" }}>
          신세계 백화점 본점 <br />
          <button onClick={() => toDetailBtn("68sGNEWUSKJzYsaTKMFU")}>
            더 자세히 알아보기
          </button>
        </div>
      ),
      latlng: { lat: 37.560959, lng: 126.981076 },
      id: "68sGNEWUSKJzYsaTKMFU",
    },
    {
      content: (
        <div style={{ padding: "5px", color: "#000" }}>
          신세계 백화점 본점 <br />
          <button onClick={() => toDetailBtn("MPxGdJy2FJs8aO8W0Qqf")}>
            더 자세히 알아보기
          </button>
        </div>
      ),
      latlng: { lat: 37.525881, lng: 126.928446 },
      id: "MPxGdJy2FJs8aO8W0Qqf",
    },
  ];

  const [places, setPlaces] = useState(data);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => {
          map.panTo(marker.getPosition());
        }}
        onMouseOver={() => setIsVisible(true)}
        // onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const markerPosition = {
    lat: 33.450701,
    lng: 126.570667,
  };

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.56798,
        lng: 126.9777,
      }}
      style={{
        width: "100%",
        height: "450px",
      }}
      level={7} // 지도의 확대 레벨
    >
      {places.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
          content={value.content}
        />
      ))}
    </Map>
  );
}

export default TreeMap;
