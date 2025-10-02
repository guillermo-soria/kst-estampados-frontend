import LocalizedClientLink from "@modules/common/components/localized-client-link"
import KSTLogo from "@modules/common/components/kst-logo"
import { UserIcon } from "@modules/common/icons"
import CartCounter from "@modules/layout/components/cart-counter"
import { HttpTypes } from "@medusajs/types"

interface NavProps {
  cart?: HttpTypes.StoreCart | null
}

export default function Nav({ cart }: NavProps) {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b border-kst-lime/20 duration-200 bg-black shadow-lg">
        <nav className="content-container txt-xsmall-plus text-gray-300 flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            {/* Espacio vacío donde estaba el menú hamburger */}
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 group"
              data-testid="nav-store-link"
            >
              <KSTLogo className="w-8 h-10 group-hover:animate-neon-pulse" />
              <span className="text-2xl font-bold text-white group-hover:text-kst-lime transition-colors duration-300">
                KST Store
              </span>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <nav className="hidden md:flex space-x-8">
              <LocalizedClientLink
                href="/"
                className="hover:text-kst-lime transition-colors duration-300 text-gray-300"
              >
                Inicio
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store"
                className="hover:text-kst-magenta transition-colors duration-300 text-gray-300"
              >
                Remeras
              </LocalizedClientLink>
            </nav>
            
            {/* Iconos de navegación */}
            <div className="flex items-center space-x-4">
              <LocalizedClientLink
                href="/account"
                className="text-gray-300 hover:text-kst-lime p-2 transition-colors duration-300"
                data-testid="nav-account-link"
              >
                <UserIcon className="w-6 h-6" />
              </LocalizedClientLink>
              <CartCounter initialCart={cart} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
