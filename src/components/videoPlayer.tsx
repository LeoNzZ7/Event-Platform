import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Spinner } from "phosphor-react";

import '@vime/core/themes/default.css'
import { isPast } from "date-fns/esm";
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
};

interface GetLessonBySlugResponse {
  lesson: {
    title: string,
    videoId: string,
    description: string,
    teacher: {
      bio: string,
      avatarURL: string,
      name: string
    }
    availableAt: Date,
  }
}

export const VideoPlayer = (props: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables:  {
      slug: props.lessonSlug
    }
  })

  if(!data || !data.lesson) {
    return (
      <div className="flex-1 flex justify-center items-center flex-col">
        <span className="text-3xl font-bold">Carregando conteúdo, por favor aguarde</span>
        <Spinner size={75} className='animate-spin'/>
      </div>
    );
  };

  const availableDateFormated = format(new Date(data?.lesson.availableAt as Date), "EEEE' • 'd' de ' MMMM' • ' k 'h' mm", {
    locale: ptBR,
  });
  
  const isLessonAvaible = isPast(new Date(data?.lesson.availableAt));

  if(!isLessonAvaible) {
    return(
      <div className="flex-1 flex justify-center items-center flex-col">
        <span className="text-3xl font-bold">Essa aula estará disponivel</span>
        <span className="text-3xl font-bold">{availableDateFormated}</span>
      </div>
    );
  };

  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video mobile:max-w-[350px] mobile:flex-1"> 
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi/>
          </Player>
        </div> 
      </div>
      <div className="p-8 max-w-[1100px] mx-auto mobile:max-w-[350px] mobile:py-4 mobile:px-2">
        <div className="flex items-start gap-16 mobile:flex-col mobile:items-center">
          <div className="flex-1" >
            <h1 className="text-2xl font-bold ">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <>
                <div className="flex items-center gap-4 mt-6" >
                  <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data?.lesson.teacher.avatarURL}
                  alt=""/>
                </div>
                <div>
                  <strong className="font-bold text-2xl block" >
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block" >
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 mobile:w-full">
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
        <div className="gap-8 mt-20 grid-cols-2 flex mobile:flex-col mobile:my-10">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors mobile:h-[125px] mobile:justify-center mobile:items-center">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed" >
              <strong text-2xl >Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar</p>
            </div>
            <div className="p-6 h-full flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors mobile:h-[125px] mobile:justify-center mobile:items-center">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed" >
              <strong text-2xl >Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe os Wallpapers exclusivos</p>
            </div>
            <div className="p-6 h-full flex items-center">
              <CaretRight size={24} />
            </div>
          </a>  
        </div>
      </div>  
    </div>
  );
};