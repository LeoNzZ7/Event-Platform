import { DiscordLogo, Lightning } from "phosphor-react";

export const VideoPlayer = () => {
  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video" > 
      </div> 
      </div>
        <div className="p-8 max-w-[1100px] mx-auto">
          <div className="flex items-start gap-16" >
            <div className="flex-1" >
              <h1 className="text-2xl font-bold ">
                Aula 01 - Abertura do evento
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Ut nisl massa, dictum eu finibus lobortis, aliquam ac eros. Suspendisse scelerisque quam lorem, vitae mattis orci condimentum et. In nec nisi varius, feugiat dui vel, convallis mi. Nulla facilisi. Aliquam at purus suscipit, dignissim sem id, hendrerit magna.
              </p>
              <div className="flex items-center gap-4 mt-6" >
                <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src='https://github.com/LeoNzZ7.png'
                alt=""/>
              </div>
              <div>
                <strong className="font-bold text-2xl block" >
                  Leonardo Nunes
                </strong>
                <span className="text-gray-200 text-sm block" >
                  Desenvolvedor Web
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded uppercase font-bold gap-2 hover:bg-green-700 transition-colors">
                <DiscordLogo size={24}/>
                Comunidade do discord
              </a>
              <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded uppercase font-bold gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24}/>
                Acesse o desafio
              </a>
            </div>
          </div>
          <div>

          </div>
        </div>  
    </div>
  );
};