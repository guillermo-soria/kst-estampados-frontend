import { Heading, Text } from "@medusajs/ui"
import { 
  CheckCircle, 
  ShoppingCart, 
  User, 
  CreditCard 
} from "@medusajs/icons"

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Estampados de Calidad",
      description: "Utilizamos técnicas de estampado de última generación que garantizan durabilidad y colores vibrantes"
    },
    {
      icon: User,
      title: "Diseños Únicos",
      description: "Creamos diseños exclusivos que no encontrarás en ningún otro lugar. Tu estilo, tu personalidad"
    },
    {
      icon: CreditCard,
      title: "Envío Express",
      description: "Envío rápido y seguro. Recibe tus remeras en 24-48 horas"
    },
    {
      icon: CheckCircle,
      title: "Garantía Total",
      description: "Garantía total en todos nuestros estampados y productos"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-dark-100">
      <div className="content-container">
        <div className="text-center mb-16">
          <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-kst-magenta">KST Store</span>?
          </Heading>
          <Text className="text-xl text-gray-400 max-w-2xl mx-auto">
            Somos especialistas en remeras estampadas con diseños que marcan la diferencia
          </Text>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-dark-50 to-dark-100 border border-kst-lime/20 hover:border-kst-lime/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-kst-lime to-kst-magenta rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <Heading level="h3" className="text-xl font-semibold text-white mb-4 group-hover:text-kst-lime transition-colors">
                  {feature.title}
                </Heading>
                <Text className="text-gray-400">
                  {feature.description}
                </Text>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
