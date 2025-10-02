// src/app/[countryCode]/(main)/order/[id]/transfer/[token]/page.tsx
// NO pongas 'use client' acá

import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-full max-w-3xl mx-auto mt-10 mb-20 px-4">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <h1 className="text-xl font-semibold text-zinc-900">
          Transfer request for order {id}
        </h1>

        <p className="text-zinc-600">
          You&apos;ve received a request to transfer ownership of your order ({id}).
          If you agree to this request, you can approve the transfer by clicking
          the button below.
        </p>

        <div className="w-full h-px bg-zinc-200" />

        <p className="text-zinc-600">
          If you accept, the new owner will take over all responsibilities and
          permissions associated with this order.
        </p>
        <p className="text-zinc-600">
          If you do not recognize this request or wish to retain ownership, no
          further action is required.
        </p>

        <div className="w-full h-px bg-zinc-200" />

        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}
