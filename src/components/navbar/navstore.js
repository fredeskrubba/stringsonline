import {create} from "zustand"

const useNavStore = create((set) => ({
    cartItems: 3,
    addCartItem: () => set((state) => ({ cartItems: state.cartItems + 1 })),
    emptyCart: () => set({ cartItems: 0 }),
  }))

export default useNavStore