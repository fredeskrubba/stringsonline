import { create } from 'zustand'

const usefavouriteStore = create((set) => ({
  favourites: undefined,
  fetchFavourites: async(endpoint) => {
    const response = await fetch(endpoint)
    const data = await response.json()
    set({favourites: data})
  }

}))

export default usefavouriteStore