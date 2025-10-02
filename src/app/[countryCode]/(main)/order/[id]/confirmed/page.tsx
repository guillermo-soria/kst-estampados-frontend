"use client"

import { useEffect, useState } from "react"
import { retrieveOrder } from "@lib/data/orders"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

type Props = {
  params: Promise<{ id: string }>
}

export default function OrderConfirmedPage(props: Props) {
  const [order, setOrder] = useState<HttpTypes.StoreOrder | null>(null)
  const [loading, setLoading] = useState(true)
  const [orderId, setOrderId] = useState<string>("")

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const params = await props.params
        setOrderId(params.id)
        const orderData = await retrieveOrder(params.id)
        setOrder(orderData)
      } catch (error) {
        setOrder(null)
      } finally {
        setLoading(false)
      }
    }
    
    loadOrder()
  }, [props.params])

  if (loading) {
    return (
      <div className="py-6 min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  if (!order) {
    return notFound()
  }

  return <OrderCompletedTemplate order={order} />
}
