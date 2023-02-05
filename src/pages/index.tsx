import CTA from "@/components/CTA"
import Features1 from "@/components/Features/Features1"
import Features2 from "@/components/Features/Features2"
import Features3 from "@/components/Features/Features3"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Layout from "@/components/layouts"
import Subscriptions from "@/components/Subscriptions"

const HomePage = () => {
  return (
    <>
      <Layout title="Testing">
        <Hero />
        <Features1 />
        <Features2 />
        <Features3 />
        <Subscriptions />
        <CTA />
        <Footer />
      </Layout>
    </>
  )
}

export default HomePage