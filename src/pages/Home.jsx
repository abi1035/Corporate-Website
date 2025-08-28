import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero__title">
          <span className="highlight">HOME IN </span>
          <span className="highlight">EVERY</span>
          <span className="highlight highlight--pulse">HEARTBEAT.</span>
        </h1>

        <p className="hero__sub">
          <span className="chip">
            Looking for a place where care meets comfort and every resident is valued?
          </span>
          <span className="chip">
            Primacare offers personalized living that brings dignity, joy, and peace of mind.
          </span>
        </p>
      </section>
      
      {/* AUTO-SCROLL CARDS */}
      <section className="carousel" aria-label="Primacare highlights">
        <div className="carousel__track">
          {/* Repeat the same set twice for seamless looping */}
          {[1, 2].map((loop) => (
            <div className="cardset" key={loop}>
              <article className="card">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop"
                  alt="Welcoming residence exterior"
                  className="card__img"
                />
                <div className="card__body">
                  <h3 className="card__title">Welcoming Homes</h3>
                  <p className="card__text">A warm, modern environment that truly feels like home.</p>
                </div>
              </article>

              <article className="card">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop"
                  alt="Green outdoor pathways"
                  className="card__img"
                />
                <div className="card__body">
                  <h3 className="card__title">Spaces to Enjoy</h3>
                  <p className="card__text">Gardens, lounges, and rooms made for connection.</p>
                </div>
              </article>

              <article className="card">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop"
                  alt="Dining area with warm lighting"
                  className="card__img"
                />
                <div className="card__body">
                  <h3 className="card__title">Care & Comfort</h3>
                  <p className="card__text">Personalized support, dignity, and daily joy.</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Nurturing joy in every moment</h2>
        <p>At Primacare, joy isn’t left to chance it’s nurtured in every moment. It’s who we are, what we do, and the gift we receive in return. Together, we create homes filled with dignity, comfort, and belonging.</p>
        <button>Find a home</button>
      </section>
    </main>
  );
}
