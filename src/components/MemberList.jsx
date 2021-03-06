import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby'
import './style.css';

const MemberList = (props) => {
  return (
    <div className="member-item">
      <div className="row">
        <div className="col-md-3">
          <Link to={`${props.id + 10000}`}>
            <div className="member-img" style={{ background: `url(${props.resim})` }} />
          </Link>
        </div>
        <div className="col-md-4">
          <div className="member-info">
            <Link to={`${props.id + 10000}`}>
              <h2>{props.name_surname}</h2>
            </Link>
            <span className="member-department">
              <strong>{props.okudugu_bolum}</strong>
            </span>
            <div className="member-all-commitees">
              {props.komite.map((r, i) => (
                <li className="member-commitees" key={i}>
                  {r}
                </li>
              ))}
            </div>
            {/* <a className="member-mail show-on-mobile" href={`mailto:${props.e_mail}`}>
            {props.e_mail}
          </a> */}
            <div className="social-icons">
              {props.linkedin && (
                <div className="single-social-icon">
                  <a href={props.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              )}
              {props.github && (
                <div className="single-social-icon">
                  <a href={props.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github" />
                  </a>
                </div>
              )}
              {props.instagram && (
                <div className="single-social-icon">
                  <a href={props.instagram} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-5 show-on-mobile">
          <span className="member-content">
            {props.content}
          </span>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-6">
          <img src={props.resim} alt="" />
        </div>
        <div className="col-md-6">
          <p>
            <span style={{ fontWeight: 'bold' }}>Ad Soyad</span>
            {props.name_surname}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Hakkinda</span>
            <span dangerouslySetInnerHTML={{ __html: props.content }} />
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>E-mail</span>
            {props.e_mail}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Github</span>
            {props.github}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Instagram</span>
            {props.instagram}
          </p>
          <span style={{ fontWeight: 'bold' }}>Uye Oldugu Komiteler</span>
          <ul>{props.komite.map((r, i) => <li key={i}>{r}</li>)}</ul>
          <p>
            <span style={{ fontWeight: 'bold' }}>Okudugu Bolum</span>
            {props.okudugu_bolum}
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default MemberList;
