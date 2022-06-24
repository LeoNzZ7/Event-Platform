import { Header } from "../components/header"
import { SideBar } from "../components/sideBar"
import { VideoPlayer } from "../components/videoPlayer"

export const Event = () => {
  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1">
        <VideoPlayer/>
        <SideBar/>
      </main>
    </div>
  )
}