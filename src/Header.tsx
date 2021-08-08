import "./Header.css";

interface Link {
  title: string;
  url: string;
}

interface HeaderProps {
  name: string;
  subtitle: string;
  links: Link[];
}

const Header: React.FC<HeaderProps> = ({ name, subtitle, links }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{subtitle}</h2>
      <div className="links">
        {links.map((link) => (
          <a className={"link"} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
