import { FaLinkedin } from "react-icons/fa6";

const Faculty = () => {
  return (
    <div className="mb-20">
      <div className="mb-5">
        <p className="text-center font-semibold">Our Experts</p>
        <h2 className="text-center font-bold text-5xl">We Are Here For You</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1st profile */}
        <div className="card bg-white text-gray-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/WPVs4VF/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-postur.jpg"
              alt="General Consultant"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Emily Davis</h2>
            <p>General Consultation</p>
            <div className="card-actions">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost text-5xl"
              >
                <FaLinkedin className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        {/* 2nd profile */}
        <div className="card bg-white text-gray-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/4sVYCHJ/smiling-doctor-with-strethoscope-isolated-grey-651396-974.jpg"
              alt="General Consultant"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Michael Chang</h2>
            <p>Specialist Consultation</p>
            <div className="card-actions">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost text-5xl"
              >
                <FaLinkedin className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        {/* 3rd profile */}
        <div className="card bg-white text-gray-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/cDGY6n8/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clin.jpg"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Sarah Patel</h2>
            <p>Pediatric Consultation</p>
            <div className="card-actions">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost text-5xl"
              >
                <FaLinkedin className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        {/* 4th profile */}
        <div className="card bg-white text-gray-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/74VvCFb/portrait-beautiful-young-female-doctor-white-medical-jacket-isolated-white-background-brunette-woman.jpg"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dr. Jason Ramirez</h2>
            <p>Psychological Consultation</p>
            <div className="card-actions">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost text-5xl"
              >
                <FaLinkedin className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
