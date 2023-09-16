import startLogo from '../../assets/img/start-page/start-logo.svg'
import leaderValidity from '../../assets/img/leader-validity.svg'
import nrgaming from '../../assets/img/start-page/nrgaming.svg'
import avatarImg from '../../assets/img/avatar-img.png'
import {useEffect, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import Controllers from "../../components/Controllers/Controllers";


export const StartDesktop = () => {
  const [loadingActive, setLoadingActive] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadingActive(false)
    }, 5000)
  }, []);
  return (
    <div>
      <div className={classNames('loading-field', loadingActive && 'active')}>
        <div className="loading-top">
          <img src={startLogo} alt="Logo" className="loading-logo"/>
          <div className="loading__time-field">
            <div className="loading__time"/>
          </div>
        </div>
        <div className="loading-bottom">
          <div className="loading__rocket-field">
            <div className="loading__rocket"/>
            <div className="loading__rocket-garage"/>
          </div>

          <div className="loading-powered">
            <img
              src={nrgaming}
              alt="Powered By"
              className="loading-powered-img"
            />
          </div>
        </div>
      </div>
      <div className="play-demo">
        <div className="play-demo__left">
          <div className="validity__link">
            <span className="validity__link-icon">
              <img
                src={leaderValidity}
                alt="Validity Icon"
                className="validity-icon-svg"
              />
            </span>
            <span className="validity__link-text">Proof of validity</span>
          </div>
          <div className="play-demo__powered">
            <img
              src={nrgaming}
              alt="Powered By"
              className="play-demo__powered-img"
            />
          </div>
        </div>
        <div className="play-demo__center">
          <div className="play-demo__logo">
            <img src={startLogo} alt="" className="play-demo__logo-img"/>
            <div className="play-demo__rocket-field">
              <div className="rocket__inner"/>
            </div>
          </div>
          <div className="play-demo__button">
            <div className="console__bet">
              <Link
                to={'/game'}
                type="button"
                className="console__bet-button">
                <span className="console__bet-button-text"> PLAY</span>
              </Link>
              <span className="console__bet-button-layer"/>
            </div>
            <div className="main-buttons">
              <div className="how-to-play__field">
                <Link to={'/game'} className="how-top-play">How To Play</Link>
              </div>
              <div className="demo-field">
                <Link to={'/demo'} className="demo">
                  Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="play-demo-bottom">
            <div className="console__bottom-field">
              <div className="console__bottom">
                <div className="popup-avatars__item selected console__avatar">
                  <div className="popup-avatars__photo ">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                </div>
                <div className="console__bottom-id">ID: 12345678</div>
                <div className="console__bottom-price">$100.000</div>
                <div className="console__bottom-steps">
                  <div className="console__bottom-steps-active"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="play-demo__right">
          <Controllers/>
          <div className="play-demo__leaders">
            <div className="play-demo__leaders-top">
              <div className="play-demo__leaders-icon">
                <svg
                  className="play-demo__leaders-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.22 16.92">
                  <polygon
                    className="cls-1"
                    points="13.11 10.67 10.11 1.63 7.11 10.67 0 6.23 4.37 16.92 10.11 16.92 15.85 16.92 20.22 6.23 13.11 10.67"></polygon>
                  <path
                    className="cls-1"
                    d="M12.47,2.36A2.36,2.36,0,1,1,10.11,0a2.36,2.36,0,0,1,2.36,2.36"></path>
                </svg>
              </div>
              <div className="play-demo__leaders-text">TOP LEADERS</div>
            </div>
            <div className="play-demo__leaders-main">
              <div className="leaders__item leaders__item--first leader-icon">
                <div className="leaders__gamers leaders__gamers--width">
                  <div className="game__gamers-photo">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="game__gamers-number">A***1</div>
                </div>
                <div className="leaders__bet leaders__bet--width">$25.000</div>
                <div className="leaders__odd leaders__odd--width wcolor-37">
                  100x
                </div>
                <div className="leaders__win leaders__win--width">$517.000</div>
                <div className="leaders__icons leaders__icons--width">
                  <div className="validity__icon"/>
                </div>
              </div>
              <div className="leaders__item leaders__item--second leader-icon">
                <div className="leaders__gamers leaders__gamers--width">
                  <div className="game__gamers-photo">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="game__gamers-number">A***1</div>
                </div>
                <div className="leaders__bet leaders__bet--width">$25.000</div>
                <div className="leaders__odd leaders__odd--width wcolor-37">
                  100x
                </div>
                <div className="leaders__win leaders__win--width">$517.000</div>
                <div className="leaders__icons leaders__icons--width">
                  <div className="validity__icon"/>
                </div>
              </div>
              <div className="leaders__item leaders__item--third leader-icon">
                <div className="leaders__gamers leaders__gamers--width">
                  <div className="game__gamers-photo">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="game__gamers-number">A***1</div>
                </div>
                <div className="leaders__bet leaders__bet--width">$25.000</div>
                <div className="leaders__odd leaders__odd--width wcolor-37">
                  100x
                </div>
                <div className="leaders__win leaders__win--width">$517.000</div>
                <div className="leaders__icons leaders__icons--width">
                  <div className="validity__icon"/>
                </div>
              </div>
              <div className="leaders__item  ">
                <div className="leaders__gamers leaders__gamers--width">
                  <div className="game__gamers-photo">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="game__gamers-number">A***1</div>
                </div>
                <div className="leaders__bet leaders__bet--width">$25.000</div>
                <div className="leaders__odd leaders__odd--width wcolor-37">
                  100x
                </div>
                <div className="leaders__win leaders__win--width">$517.000</div>
                <div className="leaders__icons leaders__icons--width">
                  <div className="validity__icon"/>
                </div>
              </div>
              <div className="leaders__item  ">
                <div className="leaders__gamers leaders__gamers--width">
                  <div className="game__gamers-photo">
                    <img src={avatarImg} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="game__gamers-number">A***1</div>
                </div>
                <div className="leaders__bet leaders__bet--width">$25.000</div>
                <div className="leaders__odd leaders__odd--width wcolor-37">
                  100x
                </div>
                <div className="leaders__win leaders__win--width">$517.000</div>
                <div className="leaders__icons leaders__icons--width">
                  <div className="validity__icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <div className="how-to-play__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="how-to-play__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};
