import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params); // this will give you array
  // http://localhost:3001/docs/features1/conceptt1 => params[0] is features1 & params[1] is conceptt1
  
  // This is all catch Route means: after docs route all route runs
  // eg. http://localhost:3001/docs/features1/conceptt1/Deepak/SM

  // TODO: [...params].js => when we write then it will give 404 Page,
  // Therefore we use [[...params]].js 

  if (params.length == 2) {
    return (
      <h1>
        Viewing Feacture {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length == 1) {
    return <h1>Viewing Feacture {params[0]}</h1>;
  }
  return (
    <div>
      <h1> Docs Home Page</h1>
    </div>
  );
}

export default Docs;
