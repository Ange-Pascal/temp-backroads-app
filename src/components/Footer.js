import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links"> 
        {pageLinks.map((page) =>{
          const {id, link, text} = page; 
          return <li key={id}>
          <a href={link} class="footer-link">
            {text}
          </a>
        </li>
        })}

      </ul>
      <ul class="footer-icons"> 
        {socialLinks.map((social) =>{
          const {id, href, icon} = social; 
          return <li key={id}>
          <a href={href} target="_blank" class="footer-icon">
            <i class={icon}></i>
          </a>
        </li>
        })}

      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
