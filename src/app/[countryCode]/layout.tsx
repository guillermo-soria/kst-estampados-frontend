// Configuración de runtime para Cloudflare Pages
export const runtime = 'edge'

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  
  return (
    <div data-country-code={countryCode}>
      {children}
    </div>
  )
}
