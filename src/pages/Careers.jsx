import Footer from "../component/Footer";
import SimpleNavbar from "../component/SimpleNavbar";

import "./Careers.css";



export default function Careers() {
  return (
    <>
      {/* <SimpleNavbar /> */}
<div className="careerSection">
  <section className="careerFeature">
    {/* Left: Text */}
    <div className="careerContent">
      <h2>Join Our Team</h2>
      <p>
        At Primacare, we are committed to building a compassionate and supportive 
        environment for residents and staff alike. Explore meaningful careers that 
        make a difference every day.
      </p>
      <a href="https://ca.indeed.com/jobs?q=primacare+living+solutions&l=&radius=25&from=searchOnDesktopSerp&vjk=8b6dd38e0920e948" className="careerBtn"><strong>View Open Positions</strong></a>
    </div>

    {/* Right: Image */}
    <div className="careerImage">
      <img src="/staff.png" alt="Career at Primacare" />
    </div>
  </section>

{/* Job Cards */}

  <section class="jobs">
  <div class="job-card">
    <img src="ResidentCareCoordinator.png" className='job-RCCimg-adjust' alt="Job 1" />
    <h3>Resident Care Coordinator</h3>
    <p>Provide compassionate care and daily support to residents in our long-term care homes.</p>
    <a href="https://ca.indeed.com/jobs?q=primacare+living+solutions&l=&radius=25&from=searchOnDesktopSerp&vjk=8b6dd38e0920e948&advn=8396632914005969" class="apply-btn">Apply Now</a>
  </div>

  <div class="job-card">
    <img src="RPN.png" alt="Job 2" className="job-RPNimg-adjust" />
    <h3>Registered Practical Nurse</h3>
    <p>Lead resident care plans, supervise staff, and ensure high standards of healthcare delivery.</p>
    <a href="https://ca.indeed.com/jobs?q=primacare+living+solutions&l=&radius=25&from=searchOnDesktopSerp&vjk=9a3dafd8928c21f4&advn=8396632914005969" class="apply-btn">Apply Now</a>
  </div>

  <div class="job-card">
    <img src="ADOC.png" alt="Job 3"  />
    <h3>Associate Director of Care</h3>
    <p>Support residents with nutritious meals, maintain safety standards, and assist dietary staff.</p>
    <a href="https://ca.indeed.com/jobs?q=primacare+living+solutions&l=&radius=25&from=searchOnDesktopSerp&vjk=403457a78fd3bae2&advn=8396632914005969" class="apply-btn">Apply Now</a>
  </div>
</section>
</div>

<Footer/>
    </>
  );
}