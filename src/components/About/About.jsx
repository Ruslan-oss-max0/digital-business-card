import "./About.scss";

export const About = () => {
  return (
    <main className="main">
      <section className="main__about">
        <h2 className="main__about-title">About</h2>
        <p className="main__about-text">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </section>

      <section className="main__interests">
        <h2 className="main__interests-title">Interests</h2>
        <p className="main__interests-text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </main>
  );
};
