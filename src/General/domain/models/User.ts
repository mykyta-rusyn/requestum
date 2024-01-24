import {Address} from './Address';
import {Company} from './Company';
import {Id} from './Id';

export type User = {
	name?: string;
	userName?: string;
	email: string;
	address?: Address;
	phone?: string;
	website?: string;
	company?: Company
} & Partial<Id>
