import styles from './footer.module.css';
export const Footer = props => {
  return (
    <footer className={`footer ${styles[`bck-color`]}`}>
      <div className="content has-text-centered">
        <strong>This is the final project for the Academy of digital industries.</strong>
      </div>
    </footer>
  );
};
