import FeaturedJobs from "../../Components/FeaturedJobs";
import Hero from "../../Components/Hero";
import classes from "../../Styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <FeaturedJobs />
      </div>
    </div>
  );
}
