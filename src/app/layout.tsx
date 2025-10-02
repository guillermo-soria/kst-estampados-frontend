import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "KST Estampados",
  description: "Especialistas en impresión serigráfica. Estampados personalizados de alta calidad.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="dark">
      <body className="bg-black text-white min-h-screen">
        <main className="relative bg-black">{props.children}</main>
      </body>
    </html>
  )
}
