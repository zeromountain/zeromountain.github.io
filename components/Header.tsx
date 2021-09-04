import Link from "next/link";
import AppLink from "./AppLink";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AppLink href="/" label="zeromountain" />
      <nav>
        <AppLink href="/about" label="About" />
        <AppLink href="/contact" label="Contact" />
      </nav>
    </header>
  );
};

export default Header;
