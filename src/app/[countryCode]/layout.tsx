// Solo usa edge runtime en builds de Cloudflare
export const runtime = process.env.CLOUDFLARE_BUILD === 'true' ? 'edge' : undefined

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
