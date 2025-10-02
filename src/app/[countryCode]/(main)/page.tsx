import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Features from "@modules/home/components/features"
import CTASection from "@modules/home/components/cta-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "KST Estampados | Impresión en Serigrafía",
  description:
    "Especialistas en estampados personalizados. Camisetas, bolsas, productos promocionales y más. Calidad garantizada.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <div className="py-20 bg-gradient-to-b from-dark-100 to-black">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Remeras <span className="text-kst-lime">Destacadas</span>
            </h2>
            <p className="text-xl text-gray-400">
              Descubre nuestros diseños más populares
            </p>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
