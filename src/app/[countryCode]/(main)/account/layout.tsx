import { retrieveCustomer } from "@lib/data/customer"
import AccountLayout from "@modules/account/templates/account-layout"
import ToasterClient from "@modules/common/components/toaster-client"

// Solo usa edge runtime en builds de Cloudflare
export const runtime = 'edge'

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await retrieveCustomer().catch(() => null)

  return (
    <AccountLayout customer={customer}>
      {customer ? dashboard : login}
      <ToasterClient />
    </AccountLayout>
  )
}
