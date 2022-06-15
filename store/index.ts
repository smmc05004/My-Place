import create from 'zustand';
import { StoreProps } from './type';

export const useStore = create<StoreProps>((set, get) => ({}));
