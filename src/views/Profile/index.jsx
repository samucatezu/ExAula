import { useState, useEffect } from 'react';
import { ProjectsCarousel } from '../../components/ProjectsCarousel';
import './style.scss';

export const Profile = () => {
  const [repos, setRepos] = useState(null);

  const getRepoData = async () => {
    const req = await fetch(`https://api.github.com/users/Samucatezu/repos`)
    const parse = await req.json()
    setRepos(parse)
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <section className="profile-container">
      <div className="img">
        <img
          src="https://avatars.githubusercontent.com/u/86020448?v=4"
          alt=""
        />
      </div>
      <div className="profile">
        <h2>Dados pessoais</h2>
        <p>Samuel Barbosa ALmeida</p>
        <p>Cidade: Guaruja </p>
      </div>
      <div className="formation">
        <h2>Formação</h2>
        <p>Ensino Superior Incompleto</p>
      </div>
      <div className="xp">
        <h2>Experiência</h2>
        <p>Operador de caixa.</p>
      </div>
      <div className="projects">
        <h2>Projetos</h2>
        <ProjectsCarousel repoArr={repos} />
      </div>
    </section>
  );
};
