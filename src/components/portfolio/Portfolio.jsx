import React from "react";
import "./portfolio.css";
import ME from "../../assets/me.jpg";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              LiveDemo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
