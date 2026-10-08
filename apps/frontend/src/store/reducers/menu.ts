import { MenuProps } from 'types/menu';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MenuProps = {
    selectedItem: ['dashboard'],
    drawerOpen: false,
    page: ''
};

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action: PayloadAction<any>) {
            state.selectedItem = action.payload;
        },

        openDrawer(state, action: PayloadAction<any>) {
            state.drawerOpen = action.payload;
        },

        ChangePage(state, action: PayloadAction<any>) {
            state.page = action.payload;
        }
    }
});

export default menu.reducer;

export const { activeItem, openDrawer, ChangePage } = menu.actions;
