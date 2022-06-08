export const convertObjToQueryString = (obj: any) => {
	let str = '';

	for (let property in obj) {
		const value = obj[property];

		str += `&${property}=${value}`;
	}

	return `?${str.substring(1)}`;
};
