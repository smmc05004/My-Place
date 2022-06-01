declare global {
	interface Window {
		kakao: any;
		daum: any;
	}
}

export const kakao = window.kakao;
