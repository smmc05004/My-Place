const size = {
	desktopMin: '1024px',
	laptopMax: '1023px',
	laptopMin: '769px',
	tabletMax: '768px',
	tabletMin: '481px',
	mobile: '480px',
};

const theme = {
	desktop: `screen and (min-width: ${size.desktopMin})`,
	laptop: `screen and (max-width: ${size.laptopMax})`,
	tablet: `screen and (max-width: ${size.tabletMax})`,
	mobile: `screen and (max-width: ${size.mobile})`,
};

export default theme;
