import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">BLOG</span>
        </div>
        <img className="headerImg" 
         src="https://img.freepik.com/free-photo/grayscale-shot-wooden-dock-near-sea-surrounded-by-trees-covered-with-fog_181624-18245.jpg?t=st=1722357825~exp=1722361425~hmac=689c6d9b758177ab788d7a67465ca804b206ff0da0ed8263972888236ea0e895&w=996"
         alt=""/>
    </div>
  );
}
