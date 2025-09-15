import "../styles/Home.css";

type FooterProps = {
    name?: string
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    return (
      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} {name}</div>
      </footer>
    );
}

export default Footer;
