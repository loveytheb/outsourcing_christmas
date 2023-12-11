import React from "react";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MyPage() {
  const positions = [
    {
      title: "더현대 서울",
      latlng: { lat: 37.525881, lng: 126.928446 },
    },
    {
      title: "신세계백화점 본점",
      latlng: { lat: 37.560959, lng: 126.981076 },
    },
  ];
  const Main = () => {
    const [position, setPosition] = useState();
    return (
      <>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 37.56798631571023,
            lng: 126.97772375010221,
          }}
          style={{
            width: "100%",
            height: "600px",
          }}
          level={7} // 지도의 확대 레벨
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
          {position && <MapMarker position={position} />}
          {positions.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng} // 마커를 표시할 위치
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
          ))}
        </Map>
        {position && (
          <p>
            {"클릭한 위치의 위도는 " +
              position.lat +
              " 이고, 경도는 " +
              position.lng +
              " 입니다"}
          </p>
        )}
      </>
    );
  };
  return <Main />;
}

export default MyPage;
