import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="text-center mb-5">
      <p className="text-white">Deyver Reyes Faria - Front-end Developer</p>
      <a
        href="https://www.linkedin.com/in/deyver-reyes-faria-51bab3240/"
        className="px-2"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          style={{ color: "#f5f9ff" }}
        />
      </a>
      <a href="https://github.com/Dyvrais" className="px-2">
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          style={{ color: "#f5f9ff" }}
        />
      </a>
      <p>
        <i className="text-white">Powered by CoinGecko</i>
      </p>
    </footer>
  );
}
