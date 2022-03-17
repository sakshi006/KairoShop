import "./Footer.css";

export const Footer = () => {
  return (
  <section className="quiz-foot">
      <p className="left-foot">
        &copy; | 2022 | <span className="logo-clr">Sakshi &hearts; KairoShop</span>
      </p>
     
      <p className="right-foot"> 
          <ul className="social-media-links">
            <li className="list-item-inline">
                <a target="blank" className="link" href="https://github.com/sakshi006"><i className="fab fa-github"></i></a>
             </li>
            <li className="list-item-inline">
                <a target="blank"  className="link" href="https://www.linkedin.com/in/sakshi-kumar-789649172/"><i className="fab fa-linkedin"></i></a>
             </li>
            <li className="list-item-inline">
                <a target="blank" className="link" href="https://twitter.com/Sakshiii6_"><i className="fab fa-twitter-square"></i></a>
             </li>
             <li className="list-item-inline">
                <a target="blank" className="link" href="https://www.instagram.com/_.sakshiii_._/"><i className="fab fa-instagram"></i></a>
             </li>
          </ul>
      </p>
  </section>)
  ;
};
