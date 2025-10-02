"use client"

import { CartIcon } from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

interface CartCounterProps {
  initialCart?: HttpTypes.StoreCart | null
}

export default function CartCounter({ initialCart }: CartCounterProps) {
  const totalItems = initialCart?.items?.reduce((acc, item) => {
    return acc + item.quantity
  }, 0) || 0

  return (
    <LocalizedClientLink
      href="/cart"
      className="text-gray-300 hover:text-kst-magenta p-2 transition-colors duration-300 relative"
      data-testid="nav-cart-link"
    >
      <CartIcon className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-kst-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-neon-pink">
          {totalItems}
        </span>
      )}
    </LocalizedClientLink>
  )
}
