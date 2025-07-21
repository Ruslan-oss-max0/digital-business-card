import "./Info.scss";

export const Info = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src="/images/me-logo.png"
        alt="Ruslan image"
      />

      <h1 className="header__title">Ruslan Kryzhanskiy</h1>
      <p className="header__description">Fullstack Developer</p>
      <a className="header__web" href="#">
        ruslankryzhanskiy.website
      </a>
      <div className="header__socials">
        <button className="button icon-button icon-button--mail">Email</button>
        <button className="button icon-button icon-button--linkedin">
          LinkedIn
        </button>
      </div>
    </header>
  );
};
