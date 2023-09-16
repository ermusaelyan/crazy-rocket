import profileAvatar from '../../assets/imgMobile/profile-avatar.jpg'
import logo from '../../assets/imgMobile/logo.svg'
import nrgaming from '../../assets/imgMobile/nrgaming.svg'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import classNames from "classnames";

export const StartMobile = () => {
  const [loadingActive, setLoadingActive] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadingActive(false)
    }, 5000)
  }, []);
  return (
    <>
      <div className={classNames('loading-field', loadingActive && 'active')}>
        <div className="loading-top">
          <img src={logo} alt="Logo" className="loading-logo"/>
        </div>
        <div className="loading-bottom">
          <div className="loading__rocket-field">
            <div className="loading__rocket"/>
            <div className="loading__rocket-garage"/>
          </div>

          <div className="loading-powered">
            <div className="loading__time-field">
              <div className="loading__time"/>
            </div>
            <img src={nrgaming} alt="Powered By" className="loading-powered-img"/>
          </div>

        </div>
      </div>
      <div className="play-demo">
        <div className="play-demo__head">
          <div className="play-demo__top">
            <div className="play-demo__validity">
              <button
                type="button"
                className="header__home-button header__home-button-validity">
                <svg
                  className="header__icons-validity"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 34.99 44.4">
                  <path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"></path>
                </svg>
              </button>
            </div>
            <div className="play-demo__logo">
              <img src={logo} alt="Logo" className="play-demo__logo-img"/>
            </div>
            <div className="play-demo__menu">
              <button
                type="button"
                className="header__home-button  header__home-button-menu">
                <svg
                  className="header__icons-burger"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.43 44.22">
                  <path
                    d="M3.09,37.91H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.12,3.12,0,0,1-3.09,3.15H3.09A3.12,3.12,0,0,1,0,41.07H0A3.12,3.12,0,0,1,3.09,37.91Z"></path>
                  <path
                    d="M3.09,19H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.13,3.13,0,0,1-3.09,3.16H3.09A3.12,3.12,0,0,1,0,22.11H0A3.13,3.13,0,0,1,3.09,19Z"></path>
                  <path
                    d="M3.09,0H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.13,3.13,0,0,1-3.09,3.16H3.09A3.13,3.13,0,0,1,0,3.16H0A3.12,3.12,0,0,1,3.09,0Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="play-demo__body">
          <div className="play-demo__rocket-field">
            <div className="rocket"/>
          </div>
          <div className="play-demo__button">
            <div className="console__bet">
              <Link to={'/game'} className="console__bet-button">
                <span className="console__bet-button-text"> PLAY</span>
              </Link>
              <span className="console__bet-button-layer"/>
            </div>
          </div>
          <div className="main-buttons">
            <div className="how-to-play__field">
              <Link to={'/game'} className="how-top-play">How To Play</Link>
            </div>
            <div className="demo-field">
              <Link to={'/game'} className="demo">
                Demo
              </Link>
            </div>
          </div>
          <div className="play-demo__user">
            <div className="user__field">
              <div className="user__photo">
                <img
                  className="game__item-user-img"
                  src={profileAvatar}
                  alt="icon"
                />
              </div>
              <div className="user__money">$155.000</div>
            </div>
          </div>
          <div className="play-demo__bottom">
            <div className="play-demo__leaders">
              <ul className="menu__list">
                <li className="menu__item active">
                  <a className="menu__link ">
                  <span className="menu__link-inner">
                    <span className="menu__link-icon menu__link--leader">
                      <svg
                        className="menu__icon-svg menu__icon-leaders"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.22 16.92">
                        <polygon
                          className="cls-1"
                          points="13.11 10.67 10.11 1.63 7.11 10.67 0 6.23 4.37 16.92 10.11 16.92 15.85 16.92 20.22 6.23 13.11 10.67"></polygon>
                        <path
                          className="cls-1"
                          d="M12.47,2.36A2.36,2.36,0,1,1,10.11,0a2.36,2.36,0,0,1,2.36,2.36"></path>
                      </svg>
                    </span>
                    <span className="menu__link-text">TOP LEADERS</span>
                  </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="play-demo__geme-list">
              <div className="menu-types__item leaders active">
                <div className="game__list">
                  <div className="game__item leaders__item game__item--first ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                  <div className="game__item leaders__item game__item--second ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                  <div className="game__item leaders__item game__item--third ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                  <div className="game__item leaders__item  ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                  <div className="game__item leaders__item  ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                  <div className="game__item leaders__item  ">
                    <div className="game__item-user">
                    <span className="game__item-user-photo">
                      <img
                        className="game__item-user-img"
                        src={profileAvatar}
                        alt="icon"
                      />
                    </span>
                      <span className="game__item-user-name">A***12</span>
                    </div>
                    <div className="game__item-bet">
                      <span className="game__item-bet-count">BET 125.000</span>
                      <span className="game__item-bet-odd  wcolor-70">17x </span>
                    </div>
                    <div className="game__item-win">
                      <span className="game__item-win-text">WIN</span>
                      <span className="game__item-win-count ">$555.000.000</span>
                    </div>
                    <div className="leader__item-icon">
                      <a className="leader__item-icon-link">
                      <span className="leader__item-icon-validity">
                        <svg
                          className="leader__item-validity-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34.99 44.4">
                          <path
                            d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                            fill="#8a9dad"></path>
                        </svg>
                      </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <img src={nrgaming} alt="NRGaming" className="footer-img"/>
            </footer>
          </div>
        </div>
        <div className="how-to-play__popup-field">
          <div className="how-to-play__popup">
            <div className="how-to-play__title">
              <div className="how-to-play__text">How To Play</div>
              <button type="button" className="how-to-play__close">
                <svg
                  className="how-to-play__close-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14">
                  <path
                    d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                </svg>
              </button>
            </div>
            <div className="how-to-play__popup-body">
              <div className="how-to-play__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className="how-to-play__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="how-to-play__close-field"/>
        </div>
      </div>
    </>
  );
};
