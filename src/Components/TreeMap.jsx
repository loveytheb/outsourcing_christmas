import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Map, MapMarker, useMap, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../redux/modules/addrSlice";
const { kakao } = window;

function TreeMap() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [position, setPosition] = useState();
  const toDetailBtn = (id) => {
    navigate(`detail/${id}`);
  };
  const geocoder = new kakao.maps.services.Geocoder();

  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const arr = { ...result };
      const address = arr[0].road_address.address_name;
      dispatch(getAddress(address));
      console.log(address);
    }
  };
  const data = [
    {
      content: (
        <div>
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
        <div>
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
      onClick={(_t, mouseEvent) => {
        const lat = mouseEvent.latLng.getLat();
        const lng = mouseEvent.latLng.getLng();
        setPosition({
          lat,
          lng,
        });
        // const coord = new kakao.maps.LatLng(position.lat, position.lng);
        geocoder.coord2Address(lng, lat, callback);
      }}
    >
      {places.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
          content={value.content}
        />
      ))}

      {position && <MapMarker position={position} />}
    </Map>
  );
}

export default TreeMap;
