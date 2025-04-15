import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="flex max-w-4xl flex-col pt-20" id="bio">
      <h2 className="mb-1 text-center text-4xl lg:text-6xl font-bold">ABOUT ME</h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-[1.2rem]">
        ดูรายละเอียดเพิ่มเติม
      </p>
      <div>
        {ABOUT.map((About, index) => (
          <p key={index} className="mb-4 text-lg lg:text-xl text-center">
            {About}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
