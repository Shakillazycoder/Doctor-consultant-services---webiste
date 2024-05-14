import { Fade } from "react-awesome-reveal";

const HealthTips = () => {
  return (
    <div>
      <div className="text-center text-5xl font-bold my-10">
        <h1>Health Tips</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        <Fade delay={70} triggerOnce={true} direction="left">
          {/* first card */}
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/KryHJ6p/low-quality-N40h2-Apziv.jpg"
                alt="General Consultation tips"
              />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  Maintaining Overall Health with General Consultation
                </h5>
              </div>
              <p className="block font-sans text-base list antialiased font-light leading-relaxed text-gray-700">
                Regular consultations with a general physician are essential for
                maintaining overall health. Here are some tips to make the most
                out of your general consultation:
                <ul className="list-decimal pl-8 mt-2 space-y-3 text-sm font-bold">
                  <li>
                    Keep a record of your symptoms, medications, and medical
                    history.
                  </li>
                  <li>
                    Be honest and thorough when discussing your health concerns
                    with your doctor.
                  </li>
                  <li>
                    Follow your doctor&apos;s advice regarding preventive care
                    and screenings.
                  </li>
                  <li>
                    Stay informed about lifestyle changes that can improve your
                    health, such as diet and exercise.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Fade>
        <Fade >
          {/* Second card */}
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/6NJFKpZ/low-quality-9v-INPSx8-CW.jpg"
                alt="Telemedicine Tips"
              />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  Telemedicine Tips for Remote Consultations
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                Telemedicine consultations offer convenient access to healthcare
                from anywhere. Here are some tips for a successful telemedicine
                consultation:
                <ul className="list-decimal pl-8 mt-2 space-y-3 text-sm font-bold">
                  <li>
                    Choose a quiet, well-lit location for your virtual
                    appointment.
                  </li>
                  <li>
                    Test your technology (camera, microphone, internet
                    connection) before the appointment.
                  </li>
                  <li>
                    Have your medical history, current medications, and any
                    relevant documents ready.
                  </li>
                  <li>
                    Prepare a list of questions or concerns to discuss with your
                    doctor during the consultation.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={100} triggerOnce={true} direction="right">
          {/* Third card */}
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/pWsnYfX/low-quality-SVkdat5-Z8-F.jpg"
                alt="Nutrition Tips"
              />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  Nutrition Tips for a Healthy Lifestyle
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                Good nutrition plays a crucial role in maintaining overall
                health. Here are some nutrition tips for a healthy lifestyle:
                <ul className="list-decimal pl-8 mt-2 space-y-3 text-sm font-bold">
                  <li>
                    Eat a variety of fruits, vegetables, whole grains, and lean
                    proteins.
                  </li>
                  <li>
                    Limit intake of processed foods, sugary drinks, and
                    unhealthy fats.
                  </li>
                  <li>
                    Stay hydrated by drinking plenty of water throughout the
                    day.
                  </li>
                  <li>
                    Pay attention to portion sizes and practice mindful eating.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HealthTips;
