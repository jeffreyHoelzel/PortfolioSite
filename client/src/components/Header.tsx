import { Link } from "react-router-dom";
import "../styles/Home.css";

type Action = {
  label: string;
  url: string;
}

type HeaderProps = {
  name?: string;
  avatar?: { url?: string; alt?: string };
  actions?: Action[];
}

const Header: React.FC<HeaderProps> = ({ name, avatar, actions = [] }) => {
    const isInternal = (url: string) => url.startsWith("/");
    return (
      <header className="siteHeader">
        <div className="wrap">
          <div className="navRow">
            <a href="/" className="brand" aria-label="home">
              <div className="brandLogo">
                {avatar?.url
                  ? <img className="brandPhoto" src={avatar.url} alt={avatar?.alt ?? "brand photo"} width={36} height={36}/>
                  : <div className="brandPhoto" aria-hidden="true" />
                }
              </div>
              <span className="brandName">{name}</span>
            </a>

            {actions.length > 0 && (
            <nav aria-label="Actions" className="navLinks">
              {actions.map((act, i) => 
                isInternal(act.url) ? (
                  <Link key={`${act.url}-${i}`} to={act.url} className="navLink">
                    {act.label}
                  </Link>
                ) : (
                  <a key={`${act.url}-${i}`} href={act.url} className="navLink">
                    {act.label}
                  </a>
                )
              )}
            </nav>
          )}
          </div>
        </div>
      </header>
    );
}

export default Header;
