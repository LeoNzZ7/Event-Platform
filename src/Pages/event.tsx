import { useParams } from "react-router-dom"
import { Header } from "../components/header"
import { SideBar } from "../components/sideBar"
import { VideoPlayer } from "../components/videoPlayer"

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        { slug ? <VideoPlayer lessonSlug={slug} /> : <div className="flex-1"/>}
        <SideBar/>
      </main>
    </div>
  )
}