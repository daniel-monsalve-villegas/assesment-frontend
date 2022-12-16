import './About.css';

const About = () => {
  return (
    <div>
      <h1>Daniel Monsalve Villegas</h1>
      <p>
        aprendiendo desarrollo web, buscando siempre alternativas en linux y
        estudiando (algo autodidacta actualmente) artes visuales
      </p>
      <img
        src="https://64.media.tumblr.com/53e93fda178565faf63a310d10a1e2b4/c06c4963af7a559a-f7/s2048x3072/8207e9407ff6c9cf92e811a167caf66455974af3.jpg"
        alt="foto de perfil, persona con expansores en las orejas, con flequillo peinado hacia la derecha y de tez blanca"
        className="profile__img"
      />
      <ul className="profile__list">
        <li>React</li>
        <li>Mongo DB</li>
        <li>Scrum Method</li>
      </ul>
      <p>
        <strong>correo: </strong>monsalvedanielv@gmail.com
      </p>
      <a href="https://github.com/daniel-monsalve-villegas">github</a>
    </div>
  );
};

export default About;
