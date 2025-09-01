import { useState } from "react";
import "./BurtonManor.css";

import Footer from "../component/Footer";
import Accredition from "../component/Accredition";

export default function BurtonManor() {
  const [mapExpanded, setMapExpanded] = useState(false);

//   TABLE DATA

// const servicesCare = [
//     "Three nutritious meals daily plus snacks",
//     "Therapeutic & special diets, resident food committee",
//     "Daily social, spiritual & recreational programs (music, exercise, cultural events, art & creative classes)",
//     "Pain & symptom management, end-of-life care",
//     "Resident & family councils",
//     "Wi-Fi access for residents & guests",
//     "Butterfly Model of Care for dementia support",
//   ];

//   const personalAttention = [
//     "24/7 nursing & personal care, individualized care planning",
//     "On-site physician, nurse practitioner, dietitian, pharmacist & social worker",
//     "Virtual specialist appointments & behavioural support services",
//     "Physiotherapy, occupational therapy & restorative programs",
//     "Falls prevention & assistive devices for independence",
//   ];

//   const additionalServices = [
//     "Hairdressing, dental/denture care, foot care, optometry/audiology, mobility services, cable/phone, newspaper delivery",
//     "(*additional charges may apply)",
//   ];

//   const amenitiesFeatures = [
//     "Accommodations for up to 128 residents (private, basic, or shared for couples)",
//     "Comfortable living & family rooms, Celebration Room & Chapel",
//     "Art & Crafts Centre, Town Square café & fireplace",
//     "Private courtyards, gardens & BBQ areas",
//     "Well-appointed dining rooms",
//     "Air conditioning retrofit in progress to enhance comfort & safety",
//   ];

  /* ---------- small helper defined inside this file ---------- */
  const CareBlock = ({ title, icon, items }) => (
    <section className="careBlock" aria-label={title}>
      <div className="careBlock__title">
        <span className="careBlock__emoji" aria-hidden="true">{icon}</span>
        <span className="careBlock__heading">{title}</span>
      </div>
      <ul className="careBlock__grid">
        {items.map((text, i) => (
          <li key={i} className="careBlock__cell">{text}</li>
        ))}
      </ul>
    </section>
  );


  return (
    <>
    <main className="location">
      {/* Page heading */}
      <header className="location__header">
        <h1>Burton Manor</h1>
        <p>
          Burton Manor features four unique “neighbourhoods” named after well-known
          areas in Brampton. Each neighbourhood offers shared and private suites,
          a dedicated dining room, living room, family room, and spa. Amenities
          include a Celebration Room, hair salon, café, and Arts &amp; Crafts Centre.
        </p>
      </header>

      <div className="location__grid">
        {/* LEFT: main content (sample) */}
        <section className="location__content">
          <h2>About the Community</h2>
          <p>
            Our team is committed to person-centred care and creating a sense of home.
            Families are welcome and encouraged to participate in daily life and
            special events throughout the year.
            Burton Manor acknowledges and respects the unique diversity of its residents and provides both individual and varied social and recreational programs and services. Burton Manor is also well aware that no "home" is complete without the beloved family pet - and so is proud to welcome visiting animals (cats, dogs, rabbits and birds) as members of the Burton Manor family.
          </p>

            <figure className="brand-photo">
              <img
                className="brand-photo__img burtonHomeImage"
                src="./BurtonHomeImage.png"
                alt="Life at Burton Manor"
              />
            </figure>

          {/* <h3>Care & Services</h3>
          <ul className="bullets">
            <li>24/7 nursing and personal support</li>
            <li>Recreation &amp; social programs</li>
            <li>On-site dining and nutrition services</li>
            <li>Physiotherapy &amp; restorative care</li>
          </ul> */}
        </section>

        {/* RIGHT: sidebar */}
        <aside className="sidebar">
          {/* Map module */}
          <section className="sidebar-module">
            <div className={`map-expand ${mapExpanded ? "is-open" : ""}`}>
              {/* Static map image (replace coords/key with your own or use a local image) */}
              <img
                src="burtonMap.png"
                alt="Map showing Burton Manor in Brampton"
                className="map-img"
              />


              {/* NEED TO FIX BUTTON */}
              {/* <button
                type="button"
                className="btn-toggle"
                aria-expanded={mapExpanded}
                aria-controls="mapPanel"
                onClick={() => setMapExpanded(v => !v)}
              >
                {mapExpanded ? "Close Map" : "Expand Map"}
              </button> */}
            </div>

            
            <div id="mapPanel" className="map-panel" hidden={!mapExpanded}>
              {/* Example: swap to an embedded interactive map when expanded */}
                {/* <iframe
                   src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d46181.78577286026!2d-79.81465271984061!3d43.66144869550673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882b151a020b9163%3A0x55a9d746aa617fd0!2s5%20Sterritt%20Dr%2C%20Brampton%2C%20ON%20L6Y%205P3!3m2!1d43.661394!2d-79.7734533!5e0!3m2!1sen!2sca!4v1756442151085!5m2!1sen!2sca"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burton Manor Location"
                ></iframe> */}
            </div>
          </section>

          {/* Address / contact */}
          <section className="sidebar-module">
            <div className="sidebar-title">
              <h2>Burton Manor</h2>
              <p>
                5 Sterritt Dr<br />
                Brampton, ON<br />
                L6Y 5P9
              </p>
            </div>

            <ul className="location-opts">
              <li>
                <a className="icon-phone" href="tel:905-555-1234">905-555-1234</a>
              </li>
              <li>
                <a
                  className="icon-map-marker"
                  href="https://maps.google.com/?q=Burton+Manor+Brampton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </li>
            </ul>

            <p className="request">
              <a
                className="button"
                href="/contact-us?location=burton-manor"
              >
                Request more information
              </a>
            </p>

            {/* Social share */}
            <div className="social-share" aria-label="Share">
              <ul>
                <li className="text">Share:</li>
                <li className="social">
                  <a
                    className="icon-facebook"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://primacare.ca/burton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  />
                </li>
                <li className="social">
                  <a
                    className="icon-twitter"
                    href="https://twitter.com/intent/tweet?url=https://primacare.ca/burton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                  />
                </li>
                <li className="social">
                  <a
                    className="icon-linked-in"
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://primacare.ca/burton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  />
                </li>
                <li className="print">
                  <button type="button" className="icon-print" onClick={() => window.print()}>
                    Print
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </aside>


  
        
      </div>

       {/* ------------------------- SERVICES------------------------------------------------ */}


{/* Block 1 (default) */}
  <section className="care-block care-block-three">
  <div className="care-block__text">
    <h2 className="care-block__title">Culture & Activities</h2>
    <ul className="care-block__list">
      <li>Three nutritious meals daily plus snacks</li>
      <li>Therapeutic & special diets, resident food committee</li>
      <li>Daily social, spiritual & recreational programs (music, exercise, cultural events, art & creative classes)</li>
      {/* <li>Pain & symptom management, end-of-life care</li> */}
      <li>Resident & family councils</li>
      <li>Wi-Fi access for residents & guests</li>
      <li>Butterfly Model of Care for dementia support</li>
    </ul>
  </div>

  <figure className="care-block__media">
    <img src="/BurtonHomeImage3.png" alt="Resident enjoying the activities" />
  </figure>
</section>

   


{/* Block 2 (image left, no top border) */}
<section className="care-block care-block--reverse care-block--noTop">
  <figure className="care-block__media care-block__media--orangeBottomLeft">
    <img src="/BurtonImage3.png" alt="Resident activities" />
  </figure>

  <div className="care-block__text">
    <h2 className="care-block__title">Services & Care</h2>
    <ul className="care-block__list">
      <li>Three nutritious meals daily plus snacks</li>
      <li>Therapeutic & special diets, resident food committee</li>
      <li>Daily social, spiritual & recreational programs</li>
      <li>Pain & symptom management, end-of-life care</li>
      <li>Resident & family councils</li>
    </ul>
  </div>
</section>



{/* Block 3 */}
<section className="care-block">
  <div className="care-block__text">
    <h2 className="care-block__title">Personal Attention</h2>
    <ul className="care-block__list">
      <li>24/7 nursing & personal care, individualized care planning</li>
      <li>On-site physician, nurse practitioner, dietitian, pharmacist & social worker</li>
      <li>Virtual specialist appointments & behavioural support services</li>
      <li>Physiotherapy, occupational therapy & restorative programs</li>
      <li>Falls prevention & assistive devices for independence</li>
    </ul>
  </div>

  <figure className="care-block__media">
    <img src="/BurtonHomeImage2.png" alt="Resident receiving personal attention" />
  </figure>
</section>





    </main>
    <section className="amenities">
  {/* Top accent */}
  {/* <div className="amenities__bar amenities__bar--top" aria-hidden="true" /> */}

  <div className="amenities__wrap">
    <p className="amenities__eyebrow">Life at Burton Manor</p>
    <h1 className="amenities__title">Amenities &amp; Features</h1>
    <p className="amenities__subtitle">
      Thoughtful spaces for connection, comfort, and everyday joy.
    </p>

    {/* Gallery */}
    <div className="amenities__gallery" role="list">
      <figure className="amenities-card" role="listitem">
        <img src="/burtonImageCard1.png" alt="Welcoming main entrance" />
        <figcaption>Entrance &amp; Lobby</figcaption>
      </figure>
      <figure className="amenities-card" role="listitem">
        <img src="/burtonImageCard2.png" alt="Bright corridor and lounge" />
        <figcaption>Corridors &amp; Lounges</figcaption>
      </figure>
      <figure className="amenities-card" role="listitem">
        <img src="/burtonImageCard3.png" alt="Community living space" />
        <figcaption>Community Spaces</figcaption>
      </figure>
      <figure className="amenities-card" role="listitem">
        <img src="/burtonImageCard4.png" alt="Garden path and courtyard" />
        <figcaption>Courtyard &amp; Gardens</figcaption>
      </figure>
    </div>

    {/* Two-column “check cards” */}
    <div className="amenities__lists">
      <ul className="checkcard">
        <li>Accommodations for up to 128 residents</li>
        <li>Private and basic resident rooms</li>
        <li>Shared accommodations for couples</li>
        <li>Comfortable living rooms and family rooms</li>
        <li>A Celebration Room and Chapel</li>
      </ul>

      <ul className="checkcard">
        <li>Art &amp; Crafts Centre</li>
        <li>Town Square with café and fireplace</li>
        <li>Private courtyards, gardens, and barbeque</li>
        <li>Well-appointed dining rooms</li>
        <li>Meaningful Care Matters® Butterfly Model of Care</li>
      </ul>
    </div>
  </div>

  {/* Bottom accent */}
  {/* <div className="amenities__bar amenities__bar--bottom" aria-hidden="true" /> */}
</section>

{/* APPLICATION */}
<section className="application">
  <h2 className="application__title">Application</h2>
  <p className="application__text">
    If you are interested in residency at Burton Manor, an application can be made via:
  </p>
  <a
    href="https://ontariohealthathome.ca/region/central-west/"
    target="_blank"
    rel="noopener noreferrer"
    className="application__link"
  >
    Ontario Health at Home Central West Office
  </a>
</section>

{/* Contact */}
<section className="team-contacts">
  <h2 className="team-contacts__title">Contact Our Team</h2>

  {/* General Burton Manor Contact */}
  <div className="team-contacts__general">
    <h3>Burton Manor Contact</h3>
    <p><strong>Phone:</strong> <a href="tel:9054551601">905-455-1601</a></p>
    <p><strong>Email:</strong> <a href="mailto:burton@primacareliving.com">burton@primacareliving.com</a></p>
    <p><strong>Fax:</strong> 905-455-1033</p>
  </div>

  {/* Staff cards grid */}
  <div className="team-contacts__grid">
    <div className="contact-card">
      <img src="/staff/bidarekere.jpg" alt="Bidarekere Swamy" />
      <h3>Bidarekere Swamy</h3>
      <p>Executive Director</p>
      <p>ext. 502</p>
      <a href="mailto:BSwamy@primacareliving.com">BSwamy@primacareliving.com</a>
    </div>

    <div className="contact-card">
      <img src="/staff/jyothi.jpg" alt="Jyothi Martis" />
      <h3>Jyothi Martis</h3>
      <p>Director of Care</p>
      <p>ext. 503</p>
      <a href="mailto:jmartis@primacareliving.com">jmartis@primacareliving.com</a>
    </div>

    <div className="contact-card">
      <img src="/staff/vivek.jpg" alt="Vivek Thanikachalam" />
      <h3>Vivek Thanikachalam</h3>
      <p>IPAC Lead</p>
      <p>ext. 607</p>
      <a href="mailto:vthanikachalam@primacareliving.com">vthanikachalam@primacareliving.com</a>
    </div>

    <div className="contact-card">
      <img src="/staff/elvie.jpg" alt="Elvie Briones" />
      <h3>Elvie Briones</h3>
      <p>Business Manager</p>
      <p>ext. 501</p>
      <a href="mailto:ebriones@primacareliving.com">ebriones@primacareliving.com</a>
    </div>
  </div>
</section>


<section>
  <Accredition/>
</section>

<Footer/>
</>
  );
}
