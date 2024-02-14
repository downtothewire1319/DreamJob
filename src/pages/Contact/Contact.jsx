/* eslint-disable react/no-unescaped-entities */
import classes from "../../Styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactInfo}>
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Fill out
          the form on the right, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className={classes.contactForm}>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            placeholder="Your Comment"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
