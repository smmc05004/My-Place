import { FC, useEffect, useRef } from 'react';

interface Props {
	name: string;
	address: string;
}

const Map: FC<Props> = ({ name, address }) => {
	const kakaoMap = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (kakaoMap && kakaoMap.current) {
			// 카카오 지도 생성
			const coords = new window.kakao.maps.LatLng(0, 0);
			const options = {
				center: coords,
				level: 3,
			};
			const map = new window.kakao.maps.Map(kakaoMap.current, options);

			const geocoder = new window.kakao.maps.services.Geocoder();

			geocoder.addressSearch(address, function (result: any, status: any) {
				if (status === 'OK') {
					var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

					// 마커 생성
					var marker = new window.kakao.maps.Marker({
						position: coords,
						map,
					});

					var infowindow = new window.kakao.maps.InfoWindow({
						content: `<div style="width:150px;text-align:center;padding:6px 0;">${name}</div>`,
					});
					infowindow.open(map, marker);

					// 맵 중앙에 위치
					map.setCenter(coords);
					map.relayout();

					// 마커를 중앙에 위치
					marker.setPosition(coords);
				}
			});

			// 클릭 이벤트
			// new window.kakao.maps.event.addListener(map, 'click', function (
			// 	mouseEvent: any,
			// ) {
			// 	const latlng = mouseEvent.latLng;

			// 	map.setCenter(latlng);
			// 	marker.setPosition(latlng);
			// });

			// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
			const mapTypeControl = new window.kakao.maps.MapTypeControl();

			// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
			// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
			map.addControl(
				mapTypeControl,
				(window as any).kakao.maps.ControlPosition.TOPRIGHT,
			);
			// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
			const zoomControl = new window.kakao.maps.ZoomControl();
			map.addControl(
				zoomControl,
				(window as any).daum.maps.ControlPosition.RIGHT,
			);
		}
	}, [kakaoMap]);

	return (
		<div style={{ width: '400px', height: '300px' }}>
			<div ref={kakaoMap} style={{ width: '100%', height: '100%' }} />
		</div>
	);
};

export default Map;
