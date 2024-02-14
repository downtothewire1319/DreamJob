import classes from "../../Styles/About.module.css";
export default function About() {
  return (
    <div className={classes.aboutUsContainer}>
      <header className={classes.header}>
        <h1>About Us</h1>
      </header>

      <section className={classes.section}>
        <p>
          Welcome to <span className={classes.brandName}>HALAL JIBIKA</span>,
          your go-to destination for connecting talented individuals with
          exciting career opportunities. Our mission is to simplify the job
          search process, making it easier for both employers and job seekers to
          find the perfect match.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Our Mission:</h2>
        <p>
          At <span className={classes.brandName}>HALAL JIBIKA</span>, we believe
          that everyone deserves to love what they do. Our mission is to empower
          individuals to discover and pursue fulfilling careers while providing
          employers with access to a pool of qualified, passionate
          professionals.
        </p>
      </section>

      <section className={classes.section}>
        <h2>What Sets Us Apart:</h2>
        <p>
          <span className={classes.brandName}>HALAL JIBIKA</span> stands out
          from the crowd with a commitment to user-friendly design, advanced
          search algorithms, and a dedication to creating meaningful
          connections. We prioritize transparency and strive to create an
          inclusive platform that supports diversity and equal opportunities in
          the workplace.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Our Team:</h2>
        <p>
          Behind <span className={classes.brandName}>HALAL JIBIKA</span> is a
          team of dedicated professionals passionate about revolutionizing the
          job market. From developers crafting seamless user experiences to
          customer support specialists ensuring satisfaction, each member of our
          team plays a crucial role in our mission.
        </p>
      </section>
    </div>
  );
}
