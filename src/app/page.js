import Hero from '@/components/Hero/Hero'
import TabsBar from '@/components/TabsBar/TabsBar'
import Promise from '@/components/Promise/Promise'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import GalleryPreview from '@/components/GalleryPreview/GalleryPreview'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <TabsBar />
      <Promise />
      <LatestPosts />
      <GalleryPreview />
      <Footer />
    </div>
  )
}