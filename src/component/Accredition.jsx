import "./Accredition.css";



export default function Accredition(){


    return(

        <section className="affils" aria-labelledby="affils-title">
          <div className="affils__wrap">
            <h2 id="affils-title" className="affils__title">
              <span>Why</span> Primacare?
            </h2>

            <p className="affils__subtitle">
              We’re committed to quality care and continuous improvement recognized by leading
              healthcare and long-term care organizations.
            </p>

            {/* If these should link out, wrap each <img> with <a href="..."> */}
            <ul className="affils__logos" role="list">
              <li className="affils__item">
                <img src="/BPSO.png" alt="Best Practice Spotlight Organization (BPSO)" />
              </li>
              <li className="affils__item">
                <img src="/CARF.png" alt="CARF International Accreditation" />
              </li>
              <li className="affils__item">
                <img src="/FamilyCouncil.png" alt="Family Council Support" />
              </li>
              <li className="affils__item">
                <img src="/OLTCA.png" alt="Ontario Long Term Care Association (OLTCA)" />
              </li>
              <li className="affils__item">
                <img src="/OntarioHealth.png" alt="Ontario Health" />
              </li>
            </ul>
          </div>
        </section>

    )
}
