import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  avaibleAt: Date;
  type: 'live'| 'class';
};

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{slug: string}>()

  const isActiveLesson = slug === props.slug;

  const isLessonAvaible = isPast(props.avaibleAt);
  const availableDateFormated = format(props.avaibleAt, "EEEE' • 'd' de ' MMMM' • ' k 'h' mm", {
    locale: ptBR,
  });

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group' >
      <span className='text-gray-300' > 
        {availableDateFormated.toString()}
      </span>

      <div className={`roundend border border-gray-500 p-4 my-2 group-hover:border-green-500 transition-colors ${isActiveLesson ? 'bg-green-500' : ''}`}>
        <header className="flex items-center justify-between" >
          {isLessonAvaible ? (
              <span className={`text-sm flex font-mediumitems-center gap-2 ${isLessonAvaible ? 'text-white' : 'text-blue-500'}`}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm flex text-orange-500 font-mediumitems-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )
          }
          <span className={`text-xs roundend px-2 py-[0.125rem] text-white border font-bold ${isActiveLesson ? 'border-white' : ' border-gren-300'}`}>
          {props.type === 'class' ? 'AULA PRÁTICA' : 'AO VIVO'}
          </span>
        </header>
        <strong  className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`} >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};