import { retrieveCustomer } from "@lib/data/customer"
import AccountLayout from "@modules/account/templates/account-layout"
import ToasterClient from "@modules/common/components/toaster-client"

// No forzar Edge Runtime - permitir que Cloudflare use Node.js compatibility
// export const runtime = 'edge'

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
