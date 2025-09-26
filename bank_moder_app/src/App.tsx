import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { Billing } from "./components/sections/Billing"
import { Business } from "./components/sections/Business"
import { CardDeal } from "./components/sections/CardDeal"
import { Clients } from "./components/sections/Clients"
import { CTA } from "./components/sections/CTA"
import { Hero } from "./components/sections/Hero"
import { Stats } from "./components/sections/Stats"
import { Testimonials } from "./components/sections/Testimonials"

export const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className="px-6 sm:px-16 flex items-center justify-center">
        <div className="w-full max-w-[1280px] mx-auto">
          <NavBar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <div className="w-full max-w-[1280px] mx-auto">
          <Hero />
        </div>
      </div>

      <div className="bg-primary px-6 sm:px-16 flex justify-center items-start">
        <div className="w-full max-w-[1280px] mx-auto">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
