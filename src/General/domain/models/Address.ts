import {LatLng} from './LatLng';

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: LatLng
}
