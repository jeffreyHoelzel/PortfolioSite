import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { fetchHomepage } from "../utils/api";
import { type HomeMetadata } from "../utils/types";
import { copyToClipboard } from "../utils/copy";
import Toast from "./Toast";
import "../styles/Home.css"

const Home: React.FC = () => {
  const [content, setContent] = useState<HomeMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [contactCopiedMsg, setContactCopiedMsg] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
    setError(null);
    fetchHomepage()
      .then(setContent)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!content) return <p>No content availble...</p>;

  const {
    name, 
    headline, 
    summary, 
    avatar, 
    location, 
    contact, 
    socials = [], 
    actions = []
  } = content;

  const handleContactCopy = async (e: React.MouseEvent<HTMLButtonElement>, text: string): Promise<void> => {
    e.preventDefault();
    if (!text) return;
    const ok = await copyToClipboard(text);
    if (ok) setContactCopiedMsg("Email copied to clipboard");
  } 

  const iconFor = (raw?: string) => {
    const key = (raw || "").toLowerCase();
    switch (key) {
      case "github": return <FaGithub />;
      case "linkedin": return <FaLinkedin />;
      case "email": return <FaEnvelope />;
      default: return null;
    }
  }

  return (
    <main>
      <section className="sectionPad">
        <div className="wrap hero">
          <div>
            <p className="kicker">Software Engineer</p>
            <h1 className="title">{name}</h1>
            {headline && <p className="subtitle">{headline}</p>}
            {location && <p className="location">{location}</p>}
            <div className="ctaRow">
              <Link to="/projects" className="btn">View projects</Link>
              {contact?.url && <a className="btn" href={contact.url}>{contact?.label}</a>}
            </div>
          </div>

          <aside className="avatarCard">
            {avatar?.url
              ? <img className="avatarImg" src={avatar.url} alt={avatar?.alt ?? "profile photo"} width={330} height={400}/>
              : <div className="avatarImg" aria-hidden="true" />
            }
            <div className="socials" aria-label="Social links">
              {socials.map((soc, i) => {
                const isEmail = soc.icon?.toLowerCase() === "email";
                return isEmail ? (
                <button key={`${soc.url}-${i}`} type="button" className="iconBtn" aria-label={soc.label ?? "Copy email"} onClick={(e) => handleContactCopy(e, soc.url ?? "")}>
                  {iconFor(soc.icon) ?? soc.label}
                </button>
                ) : (
                  <a key={`${soc.url}-${i}`} className="iconBtn" href={soc.url} target="_blank" aria-label={soc.label}>
                    {iconFor(soc.icon) ?? soc.label}
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      {summary && (
        <section className="about sectionPad" aria-label="About">
          <div className="wrap aboutGrid">
            <div><h2 className="aboutTitle">About me</h2></div>
            <p className="prose">{summary}</p>
          </div>
        </section>
      )}

      <Toast message={contactCopiedMsg} duration={1500} onClose={() => setContactCopiedMsg(null)} />
    </main>
  );
}

export default Home;
