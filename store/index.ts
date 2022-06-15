import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { StoreProps } from './type';

export const useStore = create<StoreProps>((set, get) => ({
	user: null,
	setUser: (user: any) => {
		return set({ user: user });
	},
}));

// if (typeof window !== 'undefined') {
// 	mountStoreDevtool('Store', useStore);
// }
