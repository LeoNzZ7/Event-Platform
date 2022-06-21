import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LEASSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`

type Lessons = {
  id: string,
  title: string,

}

const App = () => {
  const { data } = useQuery<{lessons: Lessons[]}>(GET_LEASSONS_QUERY);

  console.log(data)

  return(
    <div>
      <ul>
        {data?.lessons.map((item, index) => (
          <li key={index} >{item.title}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;