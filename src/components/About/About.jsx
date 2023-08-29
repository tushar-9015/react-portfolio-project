import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/free-vector/cute-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-icon-isolated-flat_138676-8330.jpg?size=626&ext=jpg&ga=GA1.1.1100647018.1677667088&semt=sph"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        I am a detailed oriented frontend web developer with a zeal to build user friendly, responsive websites. I'm also a designer, a blogger, and a naturally curious multitasker. 
        </p>
      </div>
    </div>
  );
};

export default About;
