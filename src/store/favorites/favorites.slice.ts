import { createSlice } from '@reduxjs/toolkit';

const LS_KEY = 'favorites';

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem(LS_KEY);

  if (!favorites) {
    return [];
  }

  try {
    return JSON.parse(favorites);
  } catch (error) {
    console.log('Error parcing favorites from localStorage', error);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites: string[]) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

const initialState: string[] = getFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavoritesToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      const index = state.findIndex((favorite) => favorite === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
        saveFavoritesToLocalStorage(state);
      }
    },
    clearFavorites: () => {
      localStorage.removeItem(LS_KEY);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
