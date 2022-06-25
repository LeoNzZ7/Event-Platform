import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Header } from "../components/header"
import { SideBar } from "../components/sideBar"
import { VideoPlayer } from "../components/videoPlayer"

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    if(!slug) {
      navigate('lesson/aula-01');
    } 
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer lessonSlug={slug as string} />
        <SideBar/>
      </main>
    </div>
  )
}