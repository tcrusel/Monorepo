import { useEffect, useState } from "react";

interface programsInterface {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  year: number;
  country: string;
}

function Programs() {
  const [programs, setPrograms] = useState<programsInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrograms(data);
      })
      .catch((err) =>
        console.error("Erreur de chargement des programmes :", err),
      );
  }, []);

  return (
    <>
      {programs.length > 0 ? (
        programs.map((program) => (
          <article key={program.id}>
            <h1>{program.title}</h1>
            <img src={program.poster} alt="poster de la série" />
            <p>{program.synopsis}</p>
            <p>
              Realised in {program.year} from {program.country}
            </p>
          </article>
        ))
      ) : (
        <p>Chargement des séries...</p>
      )}
    </>
  );
}

export default Programs;
