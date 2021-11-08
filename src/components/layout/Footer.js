import styles from './footer.module.css';
export const Footer = props => {
  return (
    <footer className={`footer ${styles[`bck-color`]}`}>
      <div className="content has-text-centered">
        <p>Countries</p>
      </div>
    </footer>
  );
};
