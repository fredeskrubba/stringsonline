import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: undefined,
  fetchProducts: async(endpoint) => {
    const response = await fetch(endpoint)
    const data = await response.json()
    set({products: data})
  }

}))

export default useProductStore