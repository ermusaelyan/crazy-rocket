import profileAvatar from '../../assets/imgMobile/profile-avatar.jpg'
import logo from '../../assets/imgMobile/logo.svg'
import nrgaming from '../../assets/imgMobile/nrgaming.svg'
import group from '../../assets/img/group.png'
import layer1 from '../../assets/img/layer1.png'
import layer2 from '../../assets/img/layer2.png'
import landscapeIcon from '../../assets/imgMobile/landscape-icon.png'
import avatar1 from '../../assets/img/avatars/1.png'
import avatar2 from '../../assets/img/avatars/2.png'
import avatar3 from '../../assets/img/avatars/3.png'
import avatar4 from '../../assets/img/avatars/4.png'
import avatar5 from '../../assets/img/avatars/5.png'
import error from '../../assets/imgMobile/error.svg'
import avatar6 from '../../assets/img/avatars/6.png'
import {useEffect, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";

export const Mobile = ({demo = false}) => {
  const [menuActiveIndex, setMenuActiveIndex] = useState(1)
  const [popupPrevious, setPopupPrevious] = useState(false)
  const [popupAllGamers, setPopupAllGamers] = useState(false)
  const [popupLeaders, setPopupLeaders] = useState(false)
  const [popupAllBets, setPopupAllBets] = useState(false)
  const [popupAvatars, setPopupAvatars] = useState(false)
  const [popupMenu, setPopupMenu] = useState(false)
  const [popupChat, setPopupChat] = useState(false)
  const [popupProbably, setPopupProbably] = useState(false)
  const [popupValidity, setPopupValidity] = useState(false)
  const [secondTicket, setSecondTicket] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [backgroundFast, setBackgroundFast] = useState(false)

  useEffect(() => {
    if (startGame) {
      setTimeout(() => {
        setBackgroundFast(true)
      }, 4000)
      setTimeout(() => {
        setBackgroundFast(false)
        setEndGame(true)
      }, 9000)
      setTimeout(() => {
        setBackgroundFast(false)
        setEndGame(false)
        setStartGame(false)
      }, 12500)
    }
  }, [startGame])

  return (
    <div>
      <div
        className={classNames('crazy-rocket', startGame && 'start', backgroundFast && 'background-fast', endGame && 'end', demo && 'crazy-rocket__demo')}>
        <div className="main-field">
          <header className="header">
            <div className="header__left">
              <div className="header__home">
                <div className="home__button">
                  <button type="button" className="header__home-button header__home-button-main"
                          onClick={() => setPopupProbably(true)}>
                    <svg className="header__icons-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path
                        d="M46.71,20.88h0L27.13,1.29a4.43,4.43,0,0,0-6.25,0L1.3,20.86l0,0a4.43,4.43,0,0,0,0,6.24,4.34,4.34,0,0,0,2.93,1.29h.92V42.83A5.18,5.18,0,0,0,10.31,48H18a1.41,1.41,0,0,0,1.41-1.41V35.3a2.36,2.36,0,0,1,2.36-2.36h4.52a2.36,2.36,0,0,1,2.36,2.36V46.59A1.41,1.41,0,0,0,30,48h7.66a5.18,5.18,0,0,0,5.17-5.17V28.42h.72a4.42,4.42,0,0,0,3.13-7.54Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="header__home">
                <div className="validity__button">
                  <button type="button" className="header__home-button header__home-button-validity"
                          onClick={() => setPopupValidity(true)}>
                    <svg className="header__icons-validity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.99 44.4">
                      <path
                        d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="header__center">
              <div className="user__field" onClick={() => setPopupAvatars(true)}>
                <div className="user__photo">
                  <img className="game__item-user-img" src={avatar1} alt="icon"/>
                </div>
                <div className="user__money">$155.000</div>
              </div>
              <div className="time-field">
                <div className="time"/>
              </div>
            </div>
            <div className="header__right">
              <div className="header__home burger__field">
                <div className="burger__button">
                  <button type="button" className="header__home-button  header__home-button-menu"
                          onClick={() => setPopupMenu(true)}>
                    <svg className="header__icons-burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.43 44.22">
                      <path
                        d="M3.09,37.91H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.12,3.12,0,0,1-3.09,3.15H3.09A3.12,3.12,0,0,1,0,41.07H0A3.12,3.12,0,0,1,3.09,37.91Z"/>
                      <path
                        d="M3.09,19H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.13,3.13,0,0,1-3.09,3.16H3.09A3.12,3.12,0,0,1,0,22.11H0A3.13,3.13,0,0,1,3.09,19Z"/>
                      <path
                        d="M3.09,0H46.34a3.13,3.13,0,0,1,3.09,3.16h0a3.13,3.13,0,0,1-3.09,3.16H3.09A3.13,3.13,0,0,1,0,3.16H0A3.12,3.12,0,0,1,3.09,0Z"/>
                    </svg>
                  </button>
                </div>
                <div className={classNames('game__popup-field',
                  'burger__body-field',
                  popupMenu && 'active'
                )}>
                  <div className="burger__body">
                    <div className="burger__body-top">
                      <div className="burger__body-title">
                        <div className="logo">
                          <img src={logo} alt="Logo" className="logo-img"/>
                        </div>

                        <button type="button" className="burger__body-close" onClick={() => setPopupMenu(false)}>
                          <svg className="chat__popup-close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                            <path
                              d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                          </svg>
                        </button>

                      </div>
                      <div className="main__head-right">
                        <button type="button" className="settings settings-sound settings-off">
                  <span className="settings__icon"> <svg className="sound-svg" xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 15.62 12.07">
                    <g className="cls-2">
                      <g className="cls-3">
                        <path className="cls-4"
                              d="M9.1,0A6,6,0,0,0,4,2.8H1.7A1.7,1.7,0,0,0,0,4.5V7.57a1.7,1.7,0,0,0,1.7,1.7H4a6,6,0,0,0,5.1,2.8.44.44,0,0,0,.43-.44V.44A.44.44,0,0,0,9.1,0"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M11.24,2.67a.44.44,0,0,0-.61.11.43.43,0,0,0,.11.6,3.23,3.23,0,0,1,0,5.31.44.44,0,0,0-.11.61.44.44,0,0,0,.36.19.49.49,0,0,0,.25-.08,4.11,4.11,0,0,0,0-6.74"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M12.92.87a.44.44,0,0,0-.61.11.43.43,0,0,0,.11.6,5.42,5.42,0,0,1,0,8.91.43.43,0,0,0-.11.6.41.41,0,0,0,.36.19.46.46,0,0,0,.25-.08,6.29,6.29,0,0,0,0-10.33"
                              transform="translate(0)"></path>
                      </g>
                    </g>
                  </svg></span>
                          <span className="settings__text">Sound Off</span>

                        </button>
                        <button type="button" className="settings">
                             <span className="settings__icon">  <svg className="music-svg"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 10.82 15.62">
                    <g className="cls-2">
                      <g className="cls-3">
                        <path className="cls-4"
                              d="M9.94,9.93a6.39,6.39,0,0,0,.87-2.85,4,4,0,0,0-.42-2A5.56,5.56,0,0,0,8.23,3a6.23,6.23,0,0,1-1.6-1.35l-.07-.1A2.82,2.82,0,0,1,6,.52.6.6,0,0,0,5.36,0a.59.59,0,0,0-.55.6V11.31a3.47,3.47,0,0,0-1.8-.5c-1.66,0-3,1.08-3,2.4a2.76,2.76,0,0,0,3,2.41,2.76,2.76,0,0,0,3-2.41v-7A4.32,4.32,0,0,1,8.79,9.49a3.88,3.88,0,0,1-.23.33.6.6,0,0,0,.9.79A4.61,4.61,0,0,0,9.9,10l0-.06"></path>
                      </g>
                    </g>
                  </svg></span>
                          <span className="settings__text">Music On</span>

                        </button>
                        <button type="button" className="settings">
                             <span className="settings__icon">  <svg className="rocket-svg"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 15.86 15.86">
                    <g className="cls-2">
                      <g className="cls-3">
                        <path className="cls-4"
                              d="M2.32,10.16a.47.47,0,0,0,.08.54l.12.11c.32-.38.71-.81,1.17-1.27l.1-.08-.73-.73c-.43.77-.67,1.29-.74,1.43"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M6.32,12.17c-.47.46-.89.85-1.27,1.17l.15.16a.45.45,0,0,0,.54.08c.24-.12.62-.3,1.42-.75l-.76-.76-.08.1"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M6.07,9.79c-.33-.34-1.28,0-1.72.41a12.21,12.21,0,0,0-2.46,3.15.47.47,0,0,0,.09.53.46.46,0,0,0,.53.09,12.24,12.24,0,0,0,3.15-2.46c.49-.49.73-1.4.41-1.72Z"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M1.45,6.19.14,7.5a.47.47,0,0,0-.08.56.48.48,0,0,0,.52.22,3.8,3.8,0,0,1,1.76-.16A24.87,24.87,0,0,1,4.26,5.18c-.39-.25-1.69-.11-2.81,1"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M7.87,15.81a.44.44,0,0,0,.53-.09l1.32-1.31a2.93,2.93,0,0,0,1-2.75,26.9,26.9,0,0,1-2.93,1.91,5.76,5.76,0,0,1-.14,1.76.46.46,0,0,0,.26.48"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M15.83.45A.46.46,0,0,0,15.4,0,9.34,9.34,0,0,0,12,.42a3.92,3.92,0,0,0,1.16,2.27,3.86,3.86,0,0,0,2.31,1.15A9.62,9.62,0,0,0,15.83.45"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M12.51,3.35A5,5,0,0,1,11.11.74,16.89,16.89,0,0,0,3.54,7.9l1,1a2,2,0,0,1,2.14.18,2,2,0,0,1,.18,2.14L8,12.35c2.71-1.63,5.85-4.19,7.19-7.6a4.91,4.91,0,0,1-2.67-1.4"
                              transform="translate(0)"></path>
                      </g>
                    </g>
                  </svg></span>
                          <span className="settings__text"> Animation On</span>

                        </button>
                        <button type="button" className="settings">
                             <span className="settings__icon">  <svg className="resize-svg"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 14.06 13.89">
                    <g className="cls-2">
                      <g className="cls-3">
                        <path className="cls-4"
                              d="M.06,4.75,0,.4A.4.4,0,0,1,.4,0L4.75.06A.4.4,0,0,1,5,.74L3.82,2l2,2L4,5.83l-2-2L.73,5a.4.4,0,0,1-.67-.28"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M12.11,3.84l1.22,1.21A.39.39,0,0,0,14,4.78L14.06.43a.4.4,0,0,0-.4-.4L9.31.09A.39.39,0,0,0,9,.76L10.24,2l-2,2L10.1,5.85Z"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M9,13.16a.4.4,0,0,0,.28.67l4.35.06a.39.39,0,0,0,.4-.4L14,9.14a.4.4,0,0,0-.68-.27l-1.21,1.21-2-2L8.23,9.94l2,2Z"
                              transform="translate(0)"></path>
                        <path className="cls-4"
                              d="M.4,13.86l4.35-.06A.4.4,0,0,0,5,13.13L3.82,11.92l2-2L4,8l-2,2L.73,8.84a.39.39,0,0,0-.67.27L0,13.47a.39.39,0,0,0,.4.39"
                              transform="translate(0)"></path>
                      </g>
                    </g>
                  </svg></span>
                          <span className="settings__text">Full Screen</span>
                        </button>
                      </div>
                    </div>
                    <div className="settings__body">
                      <ul className="settings__list">
                        <li className="settings__item">
                          <a className="settings__link active">Provably Fair</a>
                        </li>
                        <li className="settings__item">
                          <a className="settings__link ">Game Rules</a>
                        </li>
                        <li className="settings__item">
                          <a className="settings__link ">Game Limits</a>
                        </li>
                      </ul>
                      <ul className="settings__row-list">
                        <li className="settings__row-item">
                          <div className="settings__top">
                            <div className="settings__main">
                              <div className="provably-fair">
                                <div className="provably-fair__title">Provably Fair Settings</div>
                                <div className="provably-fair__question">What is Probably Fair?</div>
                                <div className="provably-fair__answer">This game uses Provably Fair technology to
                                  determine game
                                  result.
                                  This tool gives you ability to change your seed and check fairness of the game.
                                </div>
                                <div className="provably-fair__center">
                                  <div className="provably-fair__center-left">
                                    <svg className="provably-fair__laptop" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 42.9 28.17">
                                      <path
                                        d="M42.84,24a.21.21,0,0,0-.16-.08H.22A.21.21,0,0,0,.05,24a.21.21,0,0,0,0,.17s.65,4,5.62,4H37.28c5,0,5.61-3.93,5.61-4A.21.21,0,0,0,42.84,24ZM24.64,26.8H18.25V25.33h6.39Z"></path>
                                      <path
                                        d="M4.63,22.42H38.27a.88.88,0,0,0,.88-.88V.88A.88.88,0,0,0,38.27,0H4.63a.87.87,0,0,0-.88.88V21.54A.87.87,0,0,0,4.63,22.42ZM6.83,3.08H36.06V19.34H6.83Z"></path>
                                    </svg>
                                  </div>
                                  <div className="provably-fair__center-right">
                                    <div className="provably-fair__center-title">
                                      Next Client (your) side:
                                    </div>
                                    <div className="provably-fair__center-text">
                                      Round result is determined form combination of server seed and first 3 bets of the
                                      round.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="settings__hash">
                              <div className="settings__hash-item">
                                <label className="settings__hash-label">
                                  <input type="radio" name="radio" className="settings__hash-input"/>
                                  <span className="settings__hash-radio"/>
                                  <span className="settings__hash-radio-text">Random on every New Game</span>
                                </label>
                                <div className="settings__hash-bottom">
                                  <label className="settings__hash-bottom-text  ">
                                    <span className="settings__hash-current">Current</span>
                                    <input className="settings__hash-code" value="As322sd15d1sfc5sdz1c5d" disabled/>
                                    <button type="button" className="settings__hash-copy">
                                      <svg className="settings__hash-copy-svg" xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 17.06 20.37">
                                        <path
                                          d="M13.17.25H4.56A1.66,1.66,0,0,0,2.9,1.91v1h-1A1.66,1.66,0,0,0,.25,4.56V18.47a1.65,1.65,0,0,0,1.66,1.65H12.5a1.65,1.65,0,0,0,1.66-1.65v-1h1a1.65,1.65,0,0,0,1.66-1.65V3.89a.3.3,0,0,0-.1-.23L13.4.35A.3.3,0,0,0,13.17.25Zm.33,18.22a1,1,0,0,1-1,1H1.91a1,1,0,0,1-1-1V4.56a1,1,0,0,1,1-1h8.28V5.22a1.65,1.65,0,0,0,1.65,1.65H13.5ZM10.85,5.22V4L13,6.21H11.84A1,1,0,0,1,10.85,5.22Zm5.3,10.6a1,1,0,0,1-1,1h-1V6.54a.29.29,0,0,0-.1-.23L10.75,3a.29.29,0,0,0-.23-.1h-7v-1a1,1,0,0,1,1-1h8.28V2.57a1.65,1.65,0,0,0,1.65,1.65h1.66ZM13.5,1.38l2.18,2.18H14.49a1,1,0,0,1-1-1Z"
                                          stroke="rgba(var(--rocket-gray2),1)" stroke-miterlimit="10"
                                          stroke-width="0.8"></path>
                                      </svg>
                                    </button>
                                  </label>
                                </div>
                              </div>
                              <div className="settings__hash-item">
                                <label className="settings__hash-label">
                                  <input type="radio" name="radio" className="settings__hash-input"/>
                                  <span className="settings__hash-radio"></span>
                                  <span className="settings__hash-radio-text">Enter Manually</span>
                                </label>
                                <div className="settings__hash-bottom">
                                  <label className="settings__hash-bottom-text settings__hash-bottom-text--change ">
                                    <span className="settings__hash-current">Current</span>
                                    <input className="settings__hash-code" value="As322sd15d1sfc5sdz1c5d" disabled/>
                                    <button type="button" className="settings__hash-copy">
                                      <svg className="settings__hash-copy-svg" xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 17.06 20.37">
                                        <path
                                          d="M13.17.25H4.56A1.66,1.66,0,0,0,2.9,1.91v1h-1A1.66,1.66,0,0,0,.25,4.56V18.47a1.65,1.65,0,0,0,1.66,1.65H12.5a1.65,1.65,0,0,0,1.66-1.65v-1h1a1.65,1.65,0,0,0,1.66-1.65V3.89a.3.3,0,0,0-.1-.23L13.4.35A.3.3,0,0,0,13.17.25Zm.33,18.22a1,1,0,0,1-1,1H1.91a1,1,0,0,1-1-1V4.56a1,1,0,0,1,1-1h8.28V5.22a1.65,1.65,0,0,0,1.65,1.65H13.5ZM10.85,5.22V4L13,6.21H11.84A1,1,0,0,1,10.85,5.22Zm5.3,10.6a1,1,0,0,1-1,1h-1V6.54a.29.29,0,0,0-.1-.23L10.75,3a.29.29,0,0,0-.23-.1h-7v-1a1,1,0,0,1,1-1h8.28V2.57a1.65,1.65,0,0,0,1.65,1.65h1.66ZM13.5,1.38l2.18,2.18H14.49a1,1,0,0,1-1-1Z"
                                          stroke="rgba(var(--rocket-gray2),1)" stroke-miterlimit="10"
                                          stroke-width="0.8"></path>
                                      </svg>
                                    </button>
                                  </label>
                                  <button type="button" className="settings__hash-bottom-change">Change</button>
                                </div>
                              </div>
                            </div>
                            <div className="settings__server">
                              <div className="settings__server-left">
                                <svg className="settings__server-svg" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 35.92 35.92">
                                  <path
                                    d="M0,0V10.57H35.92V0ZM4.21,6.34V4.23H6.32V6.34Zm4.21,0V4.23h2.11V6.34Zm14.17,0V4.23h9.12V6.34Z"></path>
                                  <path
                                    d="M0,23.24H35.92V12.68H0Zm31.71-6.33V19H22.59v-2.1Zm-21.18,0V19H8.42v-2.1Zm-4.21,0V19H4.21v-2.1Z"></path>
                                  <path
                                    d="M0,35.92H35.92V25.35H0Zm31.71-6.34v2.11H22.59V29.58Zm-21.18,0v2.11H8.42V29.58Zm-4.21,0v2.11H4.21V29.58Z"></path>
                                </svg>
                              </div>
                              <div className="settings__server-right">
                                <div className="settings__server-text--bold">Next Server Seed</div>
                                <div className="settings__server-text">SHA256</div>

                              </div>
                            </div>
                            <div className="settings__server-name">
                              As322sd15d1sfc5sdz1c5d1f514ewa5s14fg5
                            </div>
                          </div>
                          <div className="settings__bottom">
                            <div className="settings__server-bottom">
                              You can check fairness of each bet from bets history
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="game__popup-close__field burger__popup-close__field"
                       onClick={() => setPopupMenu(false)}/>
                </div>
                <div className="popup-seed__field">
                  <div className="popup-seed__field-close"></div>
                  <div className="popup-seed">
                    <div className="popup-seed__header">
                      <div className="popup-seen__title">CHANGE SEED</div>
                      <button type="button" className="popup-seed__close">
                        <svg className="popup-validity__close-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                          <path
                            d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="popup-seed__body">
                      <div className="popup-seed__new">
                        <div className="popup-seed__new-title">Enter New Seed:</div>
                        <div className="popup-seed__new-server"> As322sd15d1sfc5sdz1c5d1f51</div>
                      </div>
                      <div className="popup-seed__random">
                        <button type="button" className="popup-seed__button popup-seed__random-button">Random</button>
                      </div>
                      <div className="popup-seed__bottom">
                        <button type="button" className="popup-seed__button popup-seed__save-button">Save</button>
                        <button type="button" className="popup-seed__button popup-seed__cancel-button">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__home chat__field">
                <div className="chat__button-field">
                  <button type="button" className="header__home-button header__home-button-chat"
                          onClick={() => setPopupChat(true)}>
                    <svg className="header__icons-chat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.52 49.76">
                      <path
                        d="M8.23,49.76h-4l2.84-2.83a9.58,9.58,0,0,0,2.73-5.67C3.25,37,0,30.76,0,24.24,0,12.22,11.05,0,28.35,0,46.69,0,56.52,11.24,56.52,23.19S46.58,46.44,28.35,46.44a37.88,37.88,0,0,1-9.5-1.21A14.82,14.82,0,0,1,8.23,49.76Z"/>
                    </svg>
                  </button>
                </div>
                <div className="chat__body">
                  <div className={classNames('game__popup-field',
                    'chat__popup-field',
                    popupChat && 'active'
                  )}>
                    <div className="chat">
                      <div className="chat__button">
                        <div className="chat__button-icon">
                          <svg className="header__icons-chat chat__button-svg" xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 56.52 49.76">
                            <path
                              d="M8.23,49.76h-4l2.84-2.83a9.58,9.58,0,0,0,2.73-5.67C3.25,37,0,30.76,0,24.24,0,12.22,11.05,0,28.35,0,46.69,0,56.52,11.24,56.52,23.19S46.58,46.44,28.35,46.44a37.88,37.88,0,0,1-9.5-1.21A14.82,14.82,0,0,1,8.23,49.76Z"></path>
                          </svg>
                        </div>
                        <div className="chat__button-online">
                          <span className="chat__button-online-left">Online</span><span
                          className="chat__button-online-right">123</span>
                        </div>
                        <button type="button" className="chat__button-close" onClick={() => setPopupChat(false)}>
                          <svg className="chat__popup-close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                            <path
                              d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                          </svg>
                        </button>

                      </div>
                      <div className="chat__body">
                        <div className="message__list">
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem Ipsum is simply dummy text of the printing and
                                  typesetting
                                  industry
                                </div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Eaque
                                  facilis
                                  ipsam mollitia natus, neque sunt.
                                </div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Hi howe are you ?</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Hi howe are you ?</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Eaque
                                  facilis
                                  ipsam mollitia natus, neque sunt.
                                </div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__share">
                            <div className="message__share-top">
                              <div className="message__share-bot-left">
                                <div className="message__user-photo message__user-photo--bot">
                                  B
                                </div>
                              </div>
                              <div className="message__share-bot-center">
                                <div className="message__share-bot-title">
                                  <div className="message__share-bot-title-left">Captain BOT</div>
                                  <div className="message__share-bot-title-right">Best in this Round</div>
                                  <div className="message__share-bot-win-left">With HUGE WIN!</div>
                                  <div className="message__share-bot-win-right">A***12</div>
                                </div>
                              </div>
                              <div className="message__share-bot-right">
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>

                                </button>

                              </div>
                            </div>
                            <div className="message__share-bottom">
                              <div className="message__share-user">
                                <div className="message__user-photo-field">
                                  <div className="message__user-photo">
                                  </div>
                                  <div className="message__share-user-name">
                                    A***12
                                  </div>
                                </div>
                                <div className="message__share-bet-field">
                                  <div className="message__share-bet">
                                    <div className="message__share-bet-left message__share-bet-left--width">BET</div>
                                    <div className="message__share-bet-center message__share-bet-center--width">X</div>
                                    <div className="message__share-bet-right">WIN</div>
                                  </div>
                                  <div className="message__share-odd">
                                    <div className="message__share-odd-left message__share-bet-left--width">$25.000
                                    </div>
                                    <div className="message__share-odd-center message__share-bet-center--width">
                    <span className="message__odd wcolor-50">
                      8.0x
                    </span>
                                    </div>
                                    <div className="message__share-bet-right">$200.000</div>
                                  </div>
                                </div>

                                <div className="message__share-user-validity">
                                  <svg className="chat__validity-svg"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 34.99 44.4">
                                    <path
                                      d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"></path>
                                  </svg>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Hi howe are you ?</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsia natus, neque sunt.</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Hi howe are you ?</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Eaque
                                  facilis
                                  ipsam mollitia natus, neque sunt.
                                </div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Hi howe are you ?</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsia natus, neque sunt.</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="message__item">
                            <div className="message__user-photo">

                            </div>
                            <div className="message__field">
                              <div className="message__user-name">A***21</div>
                              <div className="message__body">
                                <div className="message__text">Lorem ipsia natus, neque sunt.</div>
                                <button type="button" className="message__like">
                                  <svg className="message__like-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 19.23 18.43">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"></path>
                                      <path className="cls-2"
                                            d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"></path>
                                    </g>
                                  </svg>
                                  <span className="like__count">5</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message__write-field">
                          <form className="message__write">
                            <div className="message__write-top">
                              <textarea className="message__write-textarea" maxLength="160"
                                        placeholder="Your Message"></textarea>
                              <button type="submit" className="message__submit-button">
                                <svg className="message__submit-svg" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 19.96 13.63">
                                  <path className="cls-1"
                                        d="M17.11,0H12.83a1.43,1.43,0,0,0-1.42,1.43h0a1.43,1.43,0,0,0,1.42,1.42H16A1.14,1.14,0,0,1,17.11,4V6a1.17,1.17,0,0,1-1.17,1.17H5.7L6.77,6.06a1.51,1.51,0,0,0,0-2.14h0a1.51,1.51,0,0,0-2.14,0L0,8.56l4.63,4.63a1.51,1.51,0,0,0,2.14,0h0a1.51,1.51,0,0,0,0-2.14L5.7,10H17.11A2.86,2.86,0,0,0,20,7.13V2.85A2.86,2.86,0,0,0,17.11,0Z"></path>
                                </svg>
                              </button>
                            </div>
                            <div className="message__write-bottom">
                              <div className="message__write-bottom-left">
                                <button type="button" className="message__write-bottom-button">
                                  <svg className="message__write-bottom-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 17.6 17.6">
                                    <path className="cls-1"
                                          d="M12.89,7.56a.67.67,0,0,1-.68-.68.35.35,0,0,0-.35-.35.35.35,0,0,0-.34.35.69.69,0,0,1-1.38,0,1.72,1.72,0,0,1,3.44,0A.68.68,0,0,1,12.89,7.56ZM7.5,6.88a1.72,1.72,0,0,0-3.44,0,.69.69,0,0,0,1.37,0,.35.35,0,0,1,.35-.35.35.35,0,0,1,.34.35.69.69,0,0,0,1.38,0Zm5.86,9.46a.69.69,0,0,0-.72-1.18A7.5,7.5,0,1,1,15,12.92a.69.69,0,1,0,1.14.77A8.8,8.8,0,0,0,2.58,2.58,8.81,8.81,0,0,0,13.36,16.34ZM11.76,10a.69.69,0,0,0-.55.27,3.51,3.51,0,0,1-4.82,0A.65.65,0,0,0,5.85,10a.68.68,0,0,0-.69.68.69.69,0,0,0,.21.5A4.79,4.79,0,0,0,8.8,12.62a4.74,4.74,0,0,0,3.43-1.43.7.7,0,0,0,.22-.5A.68.68,0,0,0,11.76,10Z"></path>
                                  </svg>
                                </button>
                                <button type="button" className="message__write-bottom-button">
                                  <svg className="message__write-bottom-svg" xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 17.29 17.29">
                                    <g className="cls-1">
                                      <path className="cls-2"
                                            d="M5,7c.43,0,.53.2.55.53,0,.15.09.49.67.49.29,0,.68-.07.68-.65,0-1-.78-1.6-1.94-1.6A1.7,1.7,0,0,0,3.12,7.63v2A1.72,1.72,0,0,0,5,11.52,1.72,1.72,0,0,0,6.93,9.65V8.79a.49.49,0,0,0-.5-.5H5.27a.51.51,0,0,0-.49.57.53.53,0,0,0,.49.57h.31v.22c0,.57-.32.63-.56.63s-.55-.07-.55-.63v-2C4.47,7.08,4.77,7,5,7Z"></path>
                                      <path className="cls-2"
                                            d="M8.67,5.77c-.41,0-.68.2-.68.49V11c0,.3.28.5.68.5s.67-.21.67-.5V6.26C9.34,6,9.07,5.77,8.67,5.77Z"></path>
                                      <path className="cls-2"
                                            d="M11.14,5.77a.55.55,0,0,0-.61.5V11c0,.3.27.5.67.5s.67-.21.67-.5V9.19h.91a.51.51,0,0,0,.49-.56.52.52,0,0,0-.49-.58h-.91V7h1.8c.29,0,.49-.25.49-.62s-.2-.61-.49-.61Z"></path>
                                      <path className="cls-2"
                                            d="M8.64,0a8.65,8.65,0,1,0,8.65,8.64A8.66,8.66,0,0,0,8.64,0Zm0,15.94a7.3,7.3,0,1,1,7.3-7.3A7.31,7.31,0,0,1,8.64,15.94Z"></path>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="message__write-count">160</div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames('popup-avatars',
              popupAvatars && 'active')}>
              <div className="popup-avatars__top">
                <div className="popup-avatars__title">Avatars</div>
                <button type="button" className="popup-avatars__button" onClick={() => setPopupAvatars(false)}>
                  <span className="popup-avatars__button-line">
                    <svg className="chat__popup-close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                          <path
                            d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                        </svg>
                  </span>
                </button>
              </div>
              <div className="popup-avatars__list">
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar1} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Alien</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar2} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Star of Mars</div>
                </div>
                <div className="popup-avatars__item selected">
                  <div className="popup-avatars__photo ">
                    <img src={avatar3} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Alien</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar4} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Scout Scout</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar5} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Scout Scout</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar6} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Scout Scout</div>
                </div>
              </div>
            </div>
            <div className="popup-error  ">
              <button type="button" className="popup__error-close">
                <svg className="chat__popup-close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                  <path
                    d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                </svg>
              </button>
              <div className="popup-error__center">
                <div className="popup-error__icon">
                  <img className="popup-error__icon-svg" src={error} alt="Error Icon"/>
                </div>
                <div className="popup-error__text">You have insufficient funds</div>
              </div>
            </div>
            <div className={classNames('game__popup-field',
              'probably__popup-field',
              popupProbably && 'active')
            }>
              <div className="popup-probably ">
                <div className="popup-probably__top">
                  <div className="popup-probably__header">
                    <div className="popup-probably__head">
                      <div className="popup-probably__head-id popup-probably__head--border">ID: 12345678</div>
                      <div className="popup-probably__head-odd popup-probably__head--border">
               <span className="message__odd wcolor-95">
                      8.0x
                    </span></div>
                      <div className="popup-probably__head-date popup-probably__head--border">13.02.20</div>
                      <div className="popup-probably__head-time">13:12:25</div>
                    </div>
                    <div className="popup-probably__close-field">
                      <button className="popup-probably__close" onClick={() => setPopupProbably(false)}>
                        <svg className="popup-probably__close-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                          <path
                            d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="popup-probably__center">
                    <div className="settings__server">
                      <div className="settings__server-left">
                        <svg className="settings__server-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 35.92 35.92">
                          <path
                            d="M0,0V10.57H35.92V0ZM4.21,6.34V4.23H6.32V6.34Zm4.21,0V4.23h2.11V6.34Zm14.17,0V4.23h9.12V6.34Z"></path>
                          <path
                            d="M0,23.24H35.92V12.68H0Zm31.71-6.33V19H22.59v-2.1Zm-21.18,0V19H8.42v-2.1Zm-4.21,0V19H4.21v-2.1Z"></path>
                          <path
                            d="M0,35.92H35.92V25.35H0Zm31.71-6.34v2.11H22.59V29.58Zm-21.18,0v2.11H8.42V29.58Zm-4.21,0v2.11H4.21V29.58Z"></path>
                        </svg>
                      </div>
                      <div className="settings__server-right">
                        <div className="settings__server-text--bold"> Next Server Seed</div>
                        <div className="settings__server-text">Generated on our side</div>
                      </div>
                    </div>
                    <div className="settings__server-name">
                      As322sd15d1sfc5sdz1c5d1f514ewa5s14fg5
                    </div>
                    <div className="provably-fair__center">
                      <div className="provably-fair__center-left ">
                        <svg className="provably-fair__laptop" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 42.9 28.17">
                          <path
                            d="M42.84,24a.21.21,0,0,0-.16-.08H.22A.21.21,0,0,0,.05,24a.21.21,0,0,0,0,.17s.65,4,5.62,4H37.28c5,0,5.61-3.93,5.61-4A.21.21,0,0,0,42.84,24ZM24.64,26.8H18.25V25.33h6.39Z"></path>
                          <path
                            d="M4.63,22.42H38.27a.88.88,0,0,0,.88-.88V.88A.88.88,0,0,0,38.27,0H4.63a.87.87,0,0,0-.88.88V21.54A.87.87,0,0,0,4.63,22.42ZM6.83,3.08H36.06V19.34H6.83Z"></path>
                        </svg>
                      </div>
                      <div className="provably-fair__center-right">
                        <div className="provably-fair__center-title">
                          Client Seed:
                        </div>
                        <div className="provably-fair__center-text">
                          Generated on Players Seed
                        </div>
                      </div>

                    </div>
                    <div className="popup-probably__column">
                      <div className="popup-probably__column-gamer">GAMER 1</div>
                      <div className="popup-probably__column-user">
                        <div className="game__gamers ">
                          <div className="game__gamers-photo">
                            <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                          </div>
                          <div className="game__gamers-number ">A**d*1</div>
                        </div>
                      </div>
                      <div className="popup-probably__column-seed">SEED</div>
                      <div className="popup-probably__column-hash">As322sd15d1sfc5sdz1c5d</div>

                    </div>
                    <div className="popup-probably__column">
                      <div className="popup-probably__column-gamer">GAMER 1</div>
                      <div className="popup-probably__column-user">
                        <div className="game__gamers ">
                          <div className="game__gamers-photo">
                            <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                          </div>
                          <div className="game__gamers-number ">A**d*1</div>
                        </div>
                      </div>
                      <div className="popup-probably__column-seed">SEED</div>
                      <div className="popup-probably__column-hash">As322sd15d1sfc5sdz1c5d</div>

                    </div>
                    <div className="popup-probably__column">
                      <div className="popup-probably__column-gamer">GAMER 1</div>
                      <div className="popup-probably__column-user">
                        <div className="game__gamers ">
                          <div className="game__gamers-photo">
                            <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                          </div>
                          <div className="game__gamers-number ">A**d*1</div>
                        </div>
                      </div>
                      <div className="popup-probably__column-seed">SEED</div>
                      <div className="popup-probably__column-hash">As322sd15d1sfc5sdz1c5d</div>

                    </div>
                    <div className="provably-fair__center">
                      <div className="provably-fair__center-left provably-fair__center-left-lock">
                        <svg className="popup-probably-lock" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 37.32 37.31">
                          <path
                            d="M3.18,37.31a10.35,10.35,0,0,1-2.3-1.53,3.7,3.7,0,0,1-.13-4.63,3.84,3.84,0,0,1,4.44-1.4.92.92,0,0,0,1.15-.27C7.13,28.63,8,27.82,8.79,27A2.59,2.59,0,0,0,9,26.74l-1.44-2c-.69.75-1.34,1.43-1.95,2.14a1.59,1.59,0,0,1-1.44.63c-.74-.05-1.49,0-2.29,0V25.34a1.48,1.48,0,0,1,.54-.08c2.15.41,2.91-1.46,4.14-2.53.11-.09.06-.41,0-.61-.14-.74-.3-1.47-.47-2.33h-6V17.57H1.94c.58,0,1.16,0,1.75,0,.79,0,1.83.22,2.31-.19s.43-1.48.56-2.27a1,1,0,0,0-.23-.71,27.31,27.31,0,0,0-1.94-1.94,1.62,1.62,0,0,0-.88-.34c-.54,0-1.09,0-1.73,0a14.27,14.27,0,0,1,0-1.76.69.69,0,0,1,.51-.44,15.23,15.23,0,0,1,2.24,0,1.52,1.52,0,0,1,.83.45c.73.71,1.41,1.46,2.16,2.25l1.51-2.15c-1-.95-2-1.94-3.06-2.86-.16-.15-.6,0-.9,0A3.78,3.78,0,0,1,1,6.42a3.69,3.69,0,0,1-.53-4.2A3.83,3.83,0,0,1,5.27.27,3.8,3.8,0,0,1,7.61,5.06,1.13,1.13,0,0,0,8,6.42c.89.83,1.7,1.75,2.53,2.62L12.7,7.48c-.78-.69-1.48-1.34-2.23-1.95a1.62,1.62,0,0,1-.6-1.45c.05-.74,0-1.48,0-2.27H12a1.08,1.08,0,0,1,.1.45c-.45,2.17,1.39,3,2.5,4.24.08.1.35.08.53.06s.59-.15.89-.21c1.56-.3,1.56-.3,1.56-1.93V.06h2.21V6c.9.2,1.7.4,2.51.52a1,1,0,0,0,.7-.28A22.23,22.23,0,0,0,24.87,4.4a2.33,2.33,0,0,0,.37-1.12,11.75,11.75,0,0,0,0-1.46h2.2c0,1,0,1.92,0,2.86a1.27,1.27,0,0,1-.4.68c-.73.72-1.47,1.42-2.27,2.19L26.86,9c1-1,1.94-2,2.87-3,.14-.15.08-.55,0-.81A3.82,3.82,0,0,1,30.89,1,3.7,3.7,0,0,1,35,.36a3.86,3.86,0,0,1,2.07,4.87,3.8,3.8,0,0,1-4.77,2.38A1.19,1.19,0,0,0,30.88,8c-.82.86-1.71,1.65-2.58,2.48l1.52,2.18c.7-.75,1.35-1.43,2-2.15a1.61,1.61,0,0,1,1.45-.62c.74.05,1.48,0,2.29,0V12a1.91,1.91,0,0,1-.43.06c-2.18-.48-3,1.37-4.24,2.48-.11.1-.08.41-.05.61a10.91,10.91,0,0,1,.29,1.47c0,.84.43,1,1.16.93,1.65,0,3.31,0,5,0v2.21c-1.72,0-3.41,0-5.09,0-.7,0-.89.21-1.12.9a3,3,0,0,0,1.15,3.56,2.9,2.9,0,0,0,2.53,1,4.37,4.37,0,0,1,.78,0v2.14c-1,0-2,0-3,0-.2,0-.42-.24-.59-.41-.72-.73-1.42-1.47-2.17-2.26l-1.5,2.13c1,.95,2,1.93,3,2.88a.69.69,0,0,0,.58.06,3.91,3.91,0,1,1,2.39,7.42.55.55,0,0,0-.15.08H32.66c-2.83-1.22-3.52-2.57-2.81-5.47a.73.73,0,0,0-.08-.51c-1-1-1.94-2-2.91-3L24.72,29.8c.8.74,1.54,1.43,2.28,2.14.17.17.41.39.41.59.05,1,0,2,0,3H25.25c0-.57,0-1.09,0-1.61,0-.22,0-.51-.09-.64a15.88,15.88,0,0,0-2.49-2.43c-.37-.26-1.2.13-1.82.23a1.64,1.64,0,0,0-.56.1c-.2.12-.49.32-.49.49,0,1.88,0,3.77,0,5.65H17.5c0-1.49.05-3,.06-4.48s0-1.55-1.47-1.84c-.32-.06-.64-.16-1-.21-.17,0-.44-.05-.53,0-1.11,1.24-2.95,2.06-2.5,4.23,0,.14-.06.3-.09.46H9.88c0-.79,0-1.54,0-2.27a1.62,1.62,0,0,1,.61-1.46c.73-.6,1.43-1.26,2.2-1.95L10.5,28.31c-1,1-1.93,2-2.87,3-.13.15-.09.49-.07.73a11.08,11.08,0,0,1,.18,2c-.2,1.83-1.44,2.78-3.06,3.34ZM18.67,8.25A10.42,10.42,0,1,0,29.09,18.62,10.44,10.44,0,0,0,18.67,8.25ZM33.45,5.61a1.73,1.73,0,0,0,1.69-1.7A1.77,1.77,0,0,0,33.37,2.2a1.71,1.71,0,0,0,.08,3.41ZM4,35.13a1.71,1.71,0,0,0,0-3.41A1.74,1.74,0,0,0,2.2,33.48,1.79,1.79,0,0,0,4,35.13ZM3.8,5.61A1.7,1.7,0,0,0,5.61,4,1.73,1.73,0,0,0,4.07,2.2,1.76,1.76,0,0,0,2.21,3.82,1.73,1.73,0,0,0,3.8,5.61Zm31.34,27.8a1.73,1.73,0,0,0-1.7-1.69,1.71,1.71,0,0,0-1.71,1.67,1.73,1.73,0,0,0,1.73,1.74A1.76,1.76,0,0,0,35.14,33.41Z"></path>
                          <path
                            d="M23.07,15.42h2.08V25.63H12.2V15.42h2.06c.62-3.66,2-5.14,4.52-5.09S22.64,12,23.07,15.42Zm-8.71,8H23V17.68h-8.6Zm6.34-8a2.26,2.26,0,0,0-1-2.59,2,2,0,0,0-2.26.13,2.15,2.15,0,0,0-.75,2.46Z"></path>
                          <path
                            d="M19.72,19.4v2.21H17.58c0-.61,0-1.24,0-1.85,0-.14.33-.33.52-.35C18.61,19.37,19.11,19.4,19.72,19.4Z"></path>
                        </svg>
                      </div>
                      <div className="provably-fair__center-right">
                        <div className="provably-fair__center-title">
                          Combined SHA512 Hash
                        </div>
                        <div className="provably-fair__center-text">
                          Above Seeds combined and convertd to SHA512 Hash.
                        </div>
                        <div className="provably-fair__center-text"> This is your Game Result
                        </div>
                      </div>

                    </div>
                    <div className="settings__server-name">As322sd15d1sfc5sdz1c5d1f514ewa5s14fg514ewa5s14fg5
                    </div>
                    <div className="popup-probably__row-list">
                      <div className="popup-probably__row-item">
                        <div className="popup-probably__row-item-top">
                          HEX
                        </div>
                        <div className="popup-probably__row-item-bottom">
                          As322sd15d1dsds
                        </div>
                      </div>
                      <div className="popup-probably__row-item">
                        <div className="popup-probably__row-item-top">
                          DECIMAL
                        </div>
                        <div className="popup-probably__row-item-bottom">
                          As322sd15d1dsds
                        </div>
                      </div>
                      <div className="popup-probably__row-item">
                        <div className="popup-probably__row-item-top">
                          RESULT
                        </div>
                        <div className="popup-probably__row-item-bottom">
                          As322sd15d1dsds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-probably__footer">
                  <div className="popup-probably__footer-left">For Instructions check</div>
                  <div className="popup-probably__footer-right">What is Probably Fair</div>
                </div>
              </div>
              <div className="game__popup-close__field probably__popup-close__field"
                   onClick={() => setPopupProbably(false)}/>
            </div>
            <div className={classNames('game__popup-field',
              'validity__popup-field',
              popupValidity && 'active')
            }>
              <div className="popup-validity ">
                <div className="popup-validity__header">
                  <div className="popup-validity__header-left">
                    <span className="popup-validity__question">What is</span>
                    <span className="validity__link-icon">
            <svg className="popup-validity__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.99 44.4">
                <path
                  d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"></path>
              </svg></span>
                    <span className="validity__link-text">Proof of Validity?</span>
                  </div>
                  <div className="popup-validity__close">
                    <button className="popup-validity__close" onClick={() => setPopupValidity(false)}>
                      <svg className="popup-validity__close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path
                          d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="popup-validity__body">
                  <div className="popup-validity__body-top">
                    <p className="popup-validity__body-text">
                      <b>“Crazy Rocket” </b> is based on cryptographic technology called “Provably Fair”. This
                      technology
                      guarantees 100% fairness of game result. With this technology, it’s impossible for any third party
                      to
                      interfere in game process.
                    </p>

                    <h4 className="popup-validity__body-title">How it works</h4>
                    <p className="popup-validity__body-text">
                      Result of each round (Game’s “Fly away” coefficient ) is not generated on our servers. It’s
                      generated
                      with help of round players and is fully transparent. This way, it’s impossible for anyone to
                      manipulate
                      game output. Also, anyone can check and confirm game fairness
                    </p>
                    <h4 className="popup-validity__body-title">More info</h4>
                    <p className="popup-validity__body-text">Round result is generated from four independent
                      participants of the
                      round: game operator and first 3 betters of the round. Operator is generating server seed (random
                      16
                      symbols). Hashed version of this server seed is available publicly before round starts
                    </p>
                    <p className="popup-validity__body-text">
                      When round starts, game merges server seed with three client seeds. From merged symbols is
                      generated
                      SHA512 hash, and from this hash - game result.</p>
                  </div>
                  <div className="popup-validity__body-center">
                    <img src={group} alt="Validity-photo" className="popup-validity__body-img"/>
                  </div>
                  <div className="popup-validity__check">
                    <h4 className="popup-validity__body-title">How to Check</h4>
                    <div className="popup-validity__check-top">
                      <div className="popup-validity__check-left">
                        <img src={layer1} alt="Layer" className="popup-validity__check-img"/>
                      </div>
                      <div className="popup-validity__check-right">
                        <p className="popup-validity__body-text">
                          You can check fairness of each round from game history, by clicking on green icon.
                        </p>
                        <p className="popup-validity__body-text">
                          In opened window, you will see server seed, 3 pair of players seeds, combined hash and round
                          result.
                        </p>
                      </div>
                    </div>
                    <div className="popup-validity__check-top">
                      <div className="popup-validity__check-right popup-validity__check-right--left">
                        <p className="popup-validity__body-text">
                          Hashed version of next rounds server seed is available publicly in settings window (In user
                          menu,
                          check “Provably Fair Settings” and then “Next server seed SHA256").
                        </p>
                        <p className="popup-validity__body-text">
                          If you want to participate in round result generation, make sure you are between first 3
                          players who
                          make bet in that round.
                        </p>
                      </div>
                      <div className="popup-validity__check-left">
                        <img src={layer2} alt="Layer" className="popup-validity__check-img"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-validity__footer">
                  <div className="popup-validity__footer-top">Correctness of Hash can be checked in any online
                    calculator, for
                    example
                  </div>
                  <div className="popup-validity__footer-bottom">www.miniwebtool.com/sha512-hash-generator</div>
                </div>
              </div>
              <div className="game__popup-close__field validity__popup-close__field"></div>
            </div>
          </header>
          <div className="wrapper">
            <div className="main">
              <div className="rocket__coefficient-field">
                <div className="rocket__coefficient">
                  <span className="rocket__coefficient-win">Congratulations to winners</span>
                  <span className="rocket__coefficient-background wcolor-50"/>
                  <span className="rocket__coefficient-count">4.55</span><span
                  className="rocket__coefficient-x">x</span></div>
              </div>
              <div className="rocket-field">
                <div className="rocket-inner">
                  <div className="rocket">
                  </div>
                </div>
                <div className="rocket-garage"></div>
              </div>
              <div className="background-z1"/>
              <div className="background-z2"/>
              <div className="console-field">
                <div className={classNames('console',
                  'console-first',
                  secondTicket && 'active')}>
                  <div className="console__settings">
                    <div className="console-top">
                      <div className="console-top__circle-field">
                        <div className="console-top__circle">
                          <div className="console-top__arrow-field">
                            <div className="console-top__arrow">
                              <span className="console-top__arrow-top"></span>
                              <span className="console-top__arrow-bottom"></span>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="console-top__next-round">
                        <svg className="console-top__next-round-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 182.53 38.28">
                          <path
                            d="M0,25.49l2.21-1.24L9.13,31,6.56,21.8l2.23-1.25.82,3.23L14.3,28.1l-2.56-9.21,2.19-1.23,3.12,12.52-2.4,1.35-4-3.62,1.23,5.16-2.4,1.35Z"/>
                          <path
                            d="M19.67,26.3l-.35-.77a2.19,2.19,0,0,1,.32-2.64,3.47,3.47,0,0,1,1.05-.72l2.41-1.11-.24-.53c-.26-.54-.6-.78-1-.7a3.13,3.13,0,0,0-.52.21c-.67.3-1.79.89-3.37,1.75l-.61-1.33a11.75,11.75,0,0,1,3.48-2.27q2.4-1.12,3.63.36a4.23,4.23,0,0,1,.55.91l2.63,5.71L25.9,26,25,25.27a2.28,2.28,0,0,1-.55.93A4.05,4.05,0,0,1,23,27.42a2.43,2.43,0,0,1-2.61-.23A2.36,2.36,0,0,1,19.67,26.3Zm2-1.3q.31.67.9.48l.22-.08a2.85,2.85,0,0,0,.8-.56,4.47,4.47,0,0,0,.59-.66l.2-.3-.69-1.49-1.92,1.07a.81.81,0,0,0-.28,1.14Z"/>
                          <path
                            d="M24.73,15.17l-.57-1.38a.42.42,0,0,1,.21-.56L26,12.54a.41.41,0,0,1,.52.27l.57,1.38a.36.36,0,0,1-.2.51l-1.65.68A.42.42,0,0,1,24.73,15.17Zm4,9.56-3.44-8.35,2.2-.91L31,23.82Z"/>
                          <path
                            d="M29.26,16.69l-.46-1.24,1.19-1L29.47,12l1.87-.69.88,2.35,1.89-.71.64,1.7-1.89.71,1.27,3.39c.32.85.68,1.32,1.09,1.39l.26,0,1.19-.07.51,1.37-1.94.73c-1.38.49-2.44-.26-3.2-2.25l-1.41-3.74Z"/>
                          <path
                            d="M34.83,11.29l-.48-1.41a.41.41,0,0,1,.24-.55l1.69-.58a.41.41,0,0,1,.5.3l.48,1.42A.36.36,0,0,1,37,11l-1.69.57A.41.41,0,0,1,34.83,11.29Zm3.41,9.8-2.9-8.55,2.25-.76,2.9,8.54Z"/>
                          <path
                            d="M41.82,19.85l-2.54-8.67,1.82-.53.73.79a6.44,6.44,0,0,1,1.32-1.37,3.77,3.77,0,0,1,1.11-.51q2.58-.72,3.48,2.28l1.69,5.77-2.28.67-1.7-5.81c-.25-.76-.69-1.06-1.31-.89a3.19,3.19,0,0,0-1.67,1.13l-.2.24,1.83,6.23Z"/>
                          <path
                            d="M50.06,15.65a1.51,1.51,0,0,1,.53-1.71l.14-.1a2.63,2.63,0,0,1-1.48-2c0-.07,0-.14,0-.2-.47-2.08.31-3.36,2.32-3.84l5.35-1.23L57.21,8l-.91.53a3.75,3.75,0,0,1,.6,1.2,3.17,3.17,0,0,1,.12.44,2.69,2.69,0,0,1-.89,3,4,4,0,0,1-1.44.63l-2,.47c-.43.12-.62.3-.57.53s.33.39.76.29l2.7-.62a2.32,2.32,0,0,1,2.93,1.2,3.94,3.94,0,0,1,.27.82l.22.95a2.28,2.28,0,0,1-1.29,2.89,4.23,4.23,0,0,1-.87.29l-2.49.57a2.57,2.57,0,0,1-2.76-.7A2.88,2.88,0,0,1,51,19.24l-.26-1.11.59-1a1.77,1.77,0,0,1-1.18-1.26Zm1.47-4.56c.21.9.67,1.27,1.37,1.12l.93-.22c.74-.18,1-.72.81-1.61-.18-.68-.49-1-.92-1.06a3.28,3.28,0,0,0-.52,0l-.87.21a1,1,0,0,0-.87,1.24C51.48,10.9,51.5,11,51.53,11.09Zm1.72,7.33c.12.56.41.82.86.8l.41-.06,1.36-.31c.55-.13.8-.4.77-.82,0-.11,0-.22,0-.33l-.15-.64a.76.76,0,0,0-1-.63h-.07l-1.79.42-.71.11Z"/>
                          <path
                            d="M63.58,7.26l-.21-1.51,1.35-.48L64.49,3.6C64.26,2,64.88,1,66.36.67l.4-.07a5.88,5.88,0,0,1,2.31.09l.2,1.39-1.62.21c-.48.06-.75.26-.79.6a4.51,4.51,0,0,0,.06.93l.16,1.11,2-.28.25,1.8-2,.28,1,7.14L66,14.2,65,7.07Z"/>
                          <path
                            d="M71.23,9c-.17-1.91.06-3.22.69-3.94a4.34,4.34,0,0,1,3-1.13c1.59-.14,2.71.12,3.36.79a6,6,0,0,1,1.16,3.55c.15,1.76-.07,3-.67,3.68a4.51,4.51,0,0,1-3,1.14c-1.68.15-2.85-.17-3.51-1A5.78,5.78,0,0,1,71.23,9Zm2.37-.21c.11,1.24.36,2,.74,2.23a2.08,2.08,0,0,0,1.21.15,1.89,1.89,0,0,0,1.29-.43,3.74,3.74,0,0,0,.21-2.26,4.53,4.53,0,0,0-.6-2.4,1.93,1.93,0,0,0-1.37-.26q-1,.09-1.29.51A4.54,4.54,0,0,0,73.6,8.83Z"/>
                          <path
                            d="M81.08,12.63l-.33-9,2-.07.41,1.13a3.75,3.75,0,0,1,2.54-1.32,3,3,0,0,1,1,.07l.08,2.29c-.33,0-.77,0-1.31,0a2.68,2.68,0,0,0-1.92.68,4,4,0,0,0-.32.4l.21,5.76Z"/>
                          <path
                            d="M93.66,12.42,94.38,0l2.41.14,4.45,8.31.47-8,2.37.14L103.36,13,101,12.85,96.51,4.62l-.46,7.94Z"/>
                          <path
                            d="M105.14,8.61c.23-1.87.69-3.07,1.37-3.6a3.89,3.89,0,0,1,2.8-.46l.3,0a5.77,5.77,0,0,1,2.7.78c.62.48.87,1.4.72,2.76,0,.06,0,.13,0,.18a2,2,0,0,1-2.28,2l-.5,0-2.85-.35c-.1.84,0,1.38.44,1.62a3.41,3.41,0,0,0,1.24.31,22.51,22.51,0,0,0,3.32.22l-.2,1.6a15.27,15.27,0,0,1-4.65-.09A2.48,2.48,0,0,1,105.24,12,8.31,8.31,0,0,1,105.14,8.61Zm2.45-.4,2.25.28c.48,0,.76-.16.82-.59.08-.62,0-1-.14-1.18a1.93,1.93,0,0,0-1-.31,2.26,2.26,0,0,0-1.33.09A2.52,2.52,0,0,0,107.59,8.21Z"/>
                          <path
                            d="M112.94,14.16l3.89-3.88-2.27-5,2.84.52,1.14,3,2.16-2.35,2.82.51-3.93,3.91,2.17,4.95-2.69-.49-1.17-2.93-2.12,2.32Z"/>
                          <path
                            d="M124,8.89l.3-1.29,1.54-.14,1-2.36,1.93.46L128.11,8l2,.46-.42,1.77-2-.46-.83,3.52c-.21.88-.17,1.47.12,1.76l.21.15,1,.61-.34,1.43-2-.48q-2.13-.54-1.41-3.65l.92-3.89Z"/>
                          <path
                            d="M134.26,19l3.91-11.81,5.16,1.7c2,.66,2.72,2.08,2.16,4.24l-.15.51c-.6,1.82-1.46,2.77-2.59,2.85a3.05,3.05,0,0,1-.45,0l.71,5.39L140.46,21,140,15.91,138.07,15l-1.55,4.7Zm4.41-5.72,2.68.89c.51.16.88.12,1.12-.14a3,3,0,0,0,.6-1.14c.32-1,.22-1.6-.29-1.9l-.32-.17-2.68-.88Z"/>
                          <path
                            d="M145.3,18.07c.71-1.78,1.51-2.84,2.4-3.2a4.37,4.37,0,0,1,3.17.34c1.49.6,2.37,1.34,2.64,2.24a5.9,5.9,0,0,1-.58,3.68c-.66,1.64-1.41,2.64-2.25,3a4.5,4.5,0,0,1-3.23-.36c-1.57-.63-2.47-1.44-2.7-2.44A5.73,5.73,0,0,1,145.3,18.07Zm2.2.89c-.46,1.15-.58,1.93-.34,2.33a2,2,0,0,0,1,.68,1.87,1.87,0,0,0,1.35.19,3.8,3.8,0,0,0,1.2-1.91,4.57,4.57,0,0,0,.55-2.42,1.9,1.9,0,0,0-1.1-.85c-.64-.25-1.09-.3-1.38-.13A4.5,4.5,0,0,0,147.5,19Z"/>
                          <path
                            d="M153.6,22.91l2.56-5.43,2.15,1L155.73,24c-.33.73-.2,1.24.39,1.52a3.28,3.28,0,0,0,2,.28l.31-.06,2.77-5.86,2.15,1L159.49,29l-1.74-.82V27.16a5.17,5.17,0,0,0-.53.05,4.77,4.77,0,0,1-1.88,0,4.44,4.44,0,0,1-.66-.25Q152.27,25.76,153.6,22.91Z"/>
                          <path
                            d="M160.71,29.66,165,21.73l1.67.91-.05,1.08a6.87,6.87,0,0,1,1.9,0,4.32,4.32,0,0,1,1.15.42q2.34,1.32.85,4.07l-2.88,5.29-2.09-1.14,2.9-5.32c.37-.71.27-1.23-.29-1.55a3.21,3.21,0,0,0-2-.38l-.31,0-3.11,5.7Z"/>
                          <path
                            d="M171,30.21a6.7,6.7,0,0,1,2.67-2.82,2.63,2.63,0,0,1,2.31.4,6.61,6.61,0,0,1,2,1.9.61.61,0,0,1,0,.06l2.53-4.05,2,1.26-7.08,11.32-1.67-1.05.14-1a4.58,4.58,0,0,1-2.45-.37,4,4,0,0,1-.41-.22c-1.3-.81-1.61-2-1-3.73A11.81,11.81,0,0,1,171,30.21Zm2.07,1.19c-.81,1.29-1,2.16-.66,2.62a1,1,0,0,0,.28.23,3.88,3.88,0,0,0,2.07.66l2.37-3.79a6,6,0,0,0-1.6-1.41,1,1,0,0,0-1.2.1A6.79,6.79,0,0,0,173.06,31.4Z"/>
                        </svg>

                      </div>
                    </div>
                    <div className="console__buttons">
                      <div className="console__buttons-top">
                        <label className="circle">
                          <span className="circle__input"></span>
                          <span className="circle__letters-field">
                    <span className="circle__letters"></span>
                    </span>
                        </label>
                        <button type="button" className="console__buttons-minus">
                          <span className="console__buttons-minus-line"></span>
                          <span className="console__buttons-tooltip">
                        <span className="console__buttons-tooltip-inner">Min 20</span></span>
                        </button>
                        <button type="button" className="console__buttons-plus">
                          <span className="console__buttons-minus-line"></span><span
                          className="console__buttons-minus-line console__button-plus-line"></span>
                          <span className="console__buttons-tooltip">
                        <span className="console__buttons-tooltip-inner">Max 200.0000</span></span>
                        </button>
                      </div>
                      <div className="console__buttons-bottom">
                        <button type="button" className="odd-button odd-button-first">
                          <span className="odd-button-first1">1</span><span className="odd-button-first2">0</span><span
                          className="odd-button-first3">0</span>
                        </button>
                        <button type="button" className="odd-button odd-button-second">
                          <span className="odd-button-second1">2</span><span
                          className="odd-button-second2">0</span><span
                          className="odd-button-second3">0</span>
                        </button>
                        <button type="button" className="odd-button odd-button-third">
                          <span className="odd-button-third1">5</span><span className="odd-button-third2">0</span><span
                          className="odd-button-third3">0</span>
                        </button>
                      </div>
                    </div>
                    <div className="console__bet">
                      <button type="button" className={classNames('console__bet-button', startGame && 'push')}
                              onClick={() => setStartGame(true)}>
                  <span className="console__bet-button-cashout">
                    <span className="console__bet-button-cashout-top">777.777.777</span>
                    <span className="console__bet-button-cashout-bottom">CASHOUT</span>
                  </span>
                        <span className="console__bet-button-text"> BET</span>
                        <span className="console__bet-button-autogame"> 10.000</span>
                        <span
                          className="lds-spinner"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>
                      </button>

                      <span className={classNames('console__bet-button-layer', startGame && 'push')}/>
                    </div>
                    <div className="console__settings-right">
                      <button className="add-ticket__button" onClick={() => setSecondTicket(true)}>
                      </button>
                      <div className="add-ticket__text">
                  <span className="add-ticket__text-add">Add Ticket
</span>
                        <span className="add-ticket__text-delete">Delete</span>
                      </div>
                    </div>
                    <div className="console-switchers-list-field">
                      <div className="console-switchers-list console-switchers-auto">
                        <div className="switch__title">Auto Game</div>
                        <label className="switch__label switch__label-auto">
                          <input type="checkbox" className="switch__input"/>
                          <span className="switch__slider"></span>
                        </label>
                      </div>
                      <div className="console-switchers-list console-switchers-cashout">
                        <div className="switch__title">Cashout</div>
                        <div className="switch__label-field">
                          <label className="switch__label switch__label-cashout">
                            <input type="checkbox" className="switch__input switch__input-cashout"/>
                            <span className="switch__slider"></span>
                          </label>
                          <div className="switch__price-input">10.000</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className={classNames('console',
                  'console-second',
                  secondTicket && 'active')}>
                  <div className="console__settings">
                    <div className="console-top">
                      <div className="console-top__circle-field">
                        <div className="console-top__circle">
                          <div className="console-top__arrow-field">
                            <div className="console-top__arrow">
                              <span className="console-top__arrow-top"></span>
                              <span className="console-top__arrow-bottom"></span>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="console-top__next-round">
                        <svg className="console-top__next-round-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 182.53 38.28">
                          <path
                            d="M0,25.49l2.21-1.24L9.13,31,6.56,21.8l2.23-1.25.82,3.23L14.3,28.1l-2.56-9.21,2.19-1.23,3.12,12.52-2.4,1.35-4-3.62,1.23,5.16-2.4,1.35Z"/>
                          <path
                            d="M19.67,26.3l-.35-.77a2.19,2.19,0,0,1,.32-2.64,3.47,3.47,0,0,1,1.05-.72l2.41-1.11-.24-.53c-.26-.54-.6-.78-1-.7a3.13,3.13,0,0,0-.52.21c-.67.3-1.79.89-3.37,1.75l-.61-1.33a11.75,11.75,0,0,1,3.48-2.27q2.4-1.12,3.63.36a4.23,4.23,0,0,1,.55.91l2.63,5.71L25.9,26,25,25.27a2.28,2.28,0,0,1-.55.93A4.05,4.05,0,0,1,23,27.42a2.43,2.43,0,0,1-2.61-.23A2.36,2.36,0,0,1,19.67,26.3Zm2-1.3q.31.67.9.48l.22-.08a2.85,2.85,0,0,0,.8-.56,4.47,4.47,0,0,0,.59-.66l.2-.3-.69-1.49-1.92,1.07a.81.81,0,0,0-.28,1.14Z"/>
                          <path
                            d="M24.73,15.17l-.57-1.38a.42.42,0,0,1,.21-.56L26,12.54a.41.41,0,0,1,.52.27l.57,1.38a.36.36,0,0,1-.2.51l-1.65.68A.42.42,0,0,1,24.73,15.17Zm4,9.56-3.44-8.35,2.2-.91L31,23.82Z"/>
                          <path
                            d="M29.26,16.69l-.46-1.24,1.19-1L29.47,12l1.87-.69.88,2.35,1.89-.71.64,1.7-1.89.71,1.27,3.39c.32.85.68,1.32,1.09,1.39l.26,0,1.19-.07.51,1.37-1.94.73c-1.38.49-2.44-.26-3.2-2.25l-1.41-3.74Z"/>
                          <path
                            d="M34.83,11.29l-.48-1.41a.41.41,0,0,1,.24-.55l1.69-.58a.41.41,0,0,1,.5.3l.48,1.42A.36.36,0,0,1,37,11l-1.69.57A.41.41,0,0,1,34.83,11.29Zm3.41,9.8-2.9-8.55,2.25-.76,2.9,8.54Z"/>
                          <path
                            d="M41.82,19.85l-2.54-8.67,1.82-.53.73.79a6.44,6.44,0,0,1,1.32-1.37,3.77,3.77,0,0,1,1.11-.51q2.58-.72,3.48,2.28l1.69,5.77-2.28.67-1.7-5.81c-.25-.76-.69-1.06-1.31-.89a3.19,3.19,0,0,0-1.67,1.13l-.2.24,1.83,6.23Z"/>
                          <path
                            d="M50.06,15.65a1.51,1.51,0,0,1,.53-1.71l.14-.1a2.63,2.63,0,0,1-1.48-2c0-.07,0-.14,0-.2-.47-2.08.31-3.36,2.32-3.84l5.35-1.23L57.21,8l-.91.53a3.75,3.75,0,0,1,.6,1.2,3.17,3.17,0,0,1,.12.44,2.69,2.69,0,0,1-.89,3,4,4,0,0,1-1.44.63l-2,.47c-.43.12-.62.3-.57.53s.33.39.76.29l2.7-.62a2.32,2.32,0,0,1,2.93,1.2,3.94,3.94,0,0,1,.27.82l.22.95a2.28,2.28,0,0,1-1.29,2.89,4.23,4.23,0,0,1-.87.29l-2.49.57a2.57,2.57,0,0,1-2.76-.7A2.88,2.88,0,0,1,51,19.24l-.26-1.11.59-1a1.77,1.77,0,0,1-1.18-1.26Zm1.47-4.56c.21.9.67,1.27,1.37,1.12l.93-.22c.74-.18,1-.72.81-1.61-.18-.68-.49-1-.92-1.06a3.28,3.28,0,0,0-.52,0l-.87.21a1,1,0,0,0-.87,1.24C51.48,10.9,51.5,11,51.53,11.09Zm1.72,7.33c.12.56.41.82.86.8l.41-.06,1.36-.31c.55-.13.8-.4.77-.82,0-.11,0-.22,0-.33l-.15-.64a.76.76,0,0,0-1-.63h-.07l-1.79.42-.71.11Z"/>
                          <path
                            d="M63.58,7.26l-.21-1.51,1.35-.48L64.49,3.6C64.26,2,64.88,1,66.36.67l.4-.07a5.88,5.88,0,0,1,2.31.09l.2,1.39-1.62.21c-.48.06-.75.26-.79.6a4.51,4.51,0,0,0,.06.93l.16,1.11,2-.28.25,1.8-2,.28,1,7.14L66,14.2,65,7.07Z"/>
                          <path
                            d="M71.23,9c-.17-1.91.06-3.22.69-3.94a4.34,4.34,0,0,1,3-1.13c1.59-.14,2.71.12,3.36.79a6,6,0,0,1,1.16,3.55c.15,1.76-.07,3-.67,3.68a4.51,4.51,0,0,1-3,1.14c-1.68.15-2.85-.17-3.51-1A5.78,5.78,0,0,1,71.23,9Zm2.37-.21c.11,1.24.36,2,.74,2.23a2.08,2.08,0,0,0,1.21.15,1.89,1.89,0,0,0,1.29-.43,3.74,3.74,0,0,0,.21-2.26,4.53,4.53,0,0,0-.6-2.4,1.93,1.93,0,0,0-1.37-.26q-1,.09-1.29.51A4.54,4.54,0,0,0,73.6,8.83Z"/>
                          <path
                            d="M81.08,12.63l-.33-9,2-.07.41,1.13a3.75,3.75,0,0,1,2.54-1.32,3,3,0,0,1,1,.07l.08,2.29c-.33,0-.77,0-1.31,0a2.68,2.68,0,0,0-1.92.68,4,4,0,0,0-.32.4l.21,5.76Z"/>
                          <path
                            d="M93.66,12.42,94.38,0l2.41.14,4.45,8.31.47-8,2.37.14L103.36,13,101,12.85,96.51,4.62l-.46,7.94Z"/>
                          <path
                            d="M105.14,8.61c.23-1.87.69-3.07,1.37-3.6a3.89,3.89,0,0,1,2.8-.46l.3,0a5.77,5.77,0,0,1,2.7.78c.62.48.87,1.4.72,2.76,0,.06,0,.13,0,.18a2,2,0,0,1-2.28,2l-.5,0-2.85-.35c-.1.84,0,1.38.44,1.62a3.41,3.41,0,0,0,1.24.31,22.51,22.51,0,0,0,3.32.22l-.2,1.6a15.27,15.27,0,0,1-4.65-.09A2.48,2.48,0,0,1,105.24,12,8.31,8.31,0,0,1,105.14,8.61Zm2.45-.4,2.25.28c.48,0,.76-.16.82-.59.08-.62,0-1-.14-1.18a1.93,1.93,0,0,0-1-.31,2.26,2.26,0,0,0-1.33.09A2.52,2.52,0,0,0,107.59,8.21Z"/>
                          <path
                            d="M112.94,14.16l3.89-3.88-2.27-5,2.84.52,1.14,3,2.16-2.35,2.82.51-3.93,3.91,2.17,4.95-2.69-.49-1.17-2.93-2.12,2.32Z"/>
                          <path
                            d="M124,8.89l.3-1.29,1.54-.14,1-2.36,1.93.46L128.11,8l2,.46-.42,1.77-2-.46-.83,3.52c-.21.88-.17,1.47.12,1.76l.21.15,1,.61-.34,1.43-2-.48q-2.13-.54-1.41-3.65l.92-3.89Z"/>
                          <path
                            d="M134.26,19l3.91-11.81,5.16,1.7c2,.66,2.72,2.08,2.16,4.24l-.15.51c-.6,1.82-1.46,2.77-2.59,2.85a3.05,3.05,0,0,1-.45,0l.71,5.39L140.46,21,140,15.91,138.07,15l-1.55,4.7Zm4.41-5.72,2.68.89c.51.16.88.12,1.12-.14a3,3,0,0,0,.6-1.14c.32-1,.22-1.6-.29-1.9l-.32-.17-2.68-.88Z"/>
                          <path
                            d="M145.3,18.07c.71-1.78,1.51-2.84,2.4-3.2a4.37,4.37,0,0,1,3.17.34c1.49.6,2.37,1.34,2.64,2.24a5.9,5.9,0,0,1-.58,3.68c-.66,1.64-1.41,2.64-2.25,3a4.5,4.5,0,0,1-3.23-.36c-1.57-.63-2.47-1.44-2.7-2.44A5.73,5.73,0,0,1,145.3,18.07Zm2.2.89c-.46,1.15-.58,1.93-.34,2.33a2,2,0,0,0,1,.68,1.87,1.87,0,0,0,1.35.19,3.8,3.8,0,0,0,1.2-1.91,4.57,4.57,0,0,0,.55-2.42,1.9,1.9,0,0,0-1.1-.85c-.64-.25-1.09-.3-1.38-.13A4.5,4.5,0,0,0,147.5,19Z"/>
                          <path
                            d="M153.6,22.91l2.56-5.43,2.15,1L155.73,24c-.33.73-.2,1.24.39,1.52a3.28,3.28,0,0,0,2,.28l.31-.06,2.77-5.86,2.15,1L159.49,29l-1.74-.82V27.16a5.17,5.17,0,0,0-.53.05,4.77,4.77,0,0,1-1.88,0,4.44,4.44,0,0,1-.66-.25Q152.27,25.76,153.6,22.91Z"/>
                          <path
                            d="M160.71,29.66,165,21.73l1.67.91-.05,1.08a6.87,6.87,0,0,1,1.9,0,4.32,4.32,0,0,1,1.15.42q2.34,1.32.85,4.07l-2.88,5.29-2.09-1.14,2.9-5.32c.37-.71.27-1.23-.29-1.55a3.21,3.21,0,0,0-2-.38l-.31,0-3.11,5.7Z"/>
                          <path
                            d="M171,30.21a6.7,6.7,0,0,1,2.67-2.82,2.63,2.63,0,0,1,2.31.4,6.61,6.61,0,0,1,2,1.9.61.61,0,0,1,0,.06l2.53-4.05,2,1.26-7.08,11.32-1.67-1.05.14-1a4.58,4.58,0,0,1-2.45-.37,4,4,0,0,1-.41-.22c-1.3-.81-1.61-2-1-3.73A11.81,11.81,0,0,1,171,30.21Zm2.07,1.19c-.81,1.29-1,2.16-.66,2.62a1,1,0,0,0,.28.23,3.88,3.88,0,0,0,2.07.66l2.37-3.79a6,6,0,0,0-1.6-1.41,1,1,0,0,0-1.2.1A6.79,6.79,0,0,0,173.06,31.4Z"/>
                        </svg>

                      </div>
                    </div>
                    <div className="console__buttons">
                      <div className="console__buttons-top">
                        <label className="circle">
                          <span className="circle__input"></span>
                          <span className="circle__letters-field">
                    <span className="circle__letters"></span>
                    </span>
                        </label>
                        <button type="button" className="console__buttons-minus">
                          <span className="console__buttons-minus-line"></span>
                          <span className="console__buttons-tooltip">
                        <span className="console__buttons-tooltip-inner">Min 20</span></span>
                        </button>
                        <button type="button" className="console__buttons-plus">
                          <span className="console__buttons-minus-line"></span><span
                          className="console__buttons-minus-line console__button-plus-line"></span>
                          <span className="console__buttons-tooltip">
                        <span className="console__buttons-tooltip-inner">Max 200.000</span></span>
                        </button>
                      </div>
                      <div className="console__buttons-bottom">
                        <button type="button" className="odd-button odd-button-first">
                          <span className="odd-button-first1">1</span><span className="odd-button-first2">0</span><span
                          className="odd-button-first3">0</span>
                        </button>
                        <button type="button" className="odd-button odd-button-second">
                          <span className="odd-button-second1">2</span><span
                          className="odd-button-second2">0</span><span
                          className="odd-button-second3">0</span>
                        </button>
                        <button type="button" className="odd-button odd-button-third">
                          <span className="odd-button-third1">5</span><span className="odd-button-third2">0</span><span
                          className="odd-button-third3">0</span>
                        </button>
                      </div>
                    </div>
                    <div className="console__bet">
                      <button type="button" className="console__bet-button">
                  <span className="console__bet-button-cashout">
                    <span className="console__bet-button-cashout-top">777.777.777</span>
                    <span className="console__bet-button-cashout-bottom">CASHOUT</span>
                  </span>
                        <span className="console__bet-button-text"> BET</span>
                        <span className="console__bet-button-autogame"> 10.000</span>
                        <span
                          className="lds-spinner"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>
                      </button>
                      <span className="console__bet-button-layer"></span>
                    </div>
                    <div className="console__settings-right">
                      <button className="add-ticket__button">
                      </button>
                      <div className="add-ticket__text">
                  <span className="add-ticket__text-add">Add Ticket
</span>
                        <span className="add-ticket__text-delete">Delete</span>
                      </div>
                    </div>
                    <div className="console-switchers-list-field">
                      <div className="console-switchers-list console-switchers-auto">
                        <div className="switch__title">Auto Game</div>
                        <label className="switch__label switch__label-auto">
                          <input type="checkbox" className="switch__input"/>
                          <span className="switch__slider"></span>
                        </label>
                      </div>
                      <div className="console-switchers-list console-switchers-cashout">
                        <div className="switch__title">Cashout</div>
                        <div className="switch__label-field">
                          <label className="switch__label switch__label-cashout">
                            <input type="checkbox" className="switch__input switch__input-cashout"/>
                            <span className="switch__slider"></span>
                          </label>
                          <div className="switch__price-input">10.000</div>
                        </div>

                      </div>
                    </div>
                    <button className="add-ticket__button-delete" onClick={() => setSecondTicket(false)}>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="coefficient__list ">
              {Array.from(Array(20), (e, i) => {
                return (<div className={classNames('coefficient__item', `wcolor-${(i + 1) * 5}`)} key={i}>
                    0.55x
                  </div>
                )
              })}
            </div>
            <div className="popup-bet__field">
              <div className="popup-bet__close-field popup-bet__close-field-cashout"></div>
              <div className="popup-bet">
                <div className="popup-bet__title">
                  <span className="popup-bet__title-text popup-bet__title-text--betting">Betting</span>
                  <span className="popup-bet__title-text popup-bet__title-text--cashout">Auto Cashout</span>
                  <button type="button" className="popup-bet__close popup-bet__close-cashout">
                    <svg className="popup-bet__lose-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path
                        d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="popup-bet__input-field">
                  <div className="popup-bet__input"></div>
                  <button type="button" className="popup-bet__backspace">
                    <svg className="popup-bet__backspace-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path
                        d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="popup-bet__plus-buttons-list">
                  <button type="button" className="popup-bet__plus-buttons">MIN</button>
                  <button type="button" className="popup-bet__plus-buttons">+50</button>
                  <button type="button" className="popup-bet__plus-buttons">+100</button>
                  <button type="button" className="popup-bet__plus-buttons">+200</button>
                  <button type="button" className="popup-bet__plus-buttons">+500</button>
                  <button type="button" className="popup-bet__plus-buttons">MAX</button>
                </div>
                <div className="popup-bet__buttons-list">
                  <button type="button" className="popup-bet__buttons">1</button>
                  <button type="button" className="popup-bet__buttons">2</button>
                  <button type="button" className="popup-bet__buttons">3</button>
                  <button type="button" className="popup-bet__buttons">4</button>
                  <button type="button" className="popup-bet__buttons">5</button>
                  <button type="button" className="popup-bet__buttons">6</button>
                  <button type="button" className="popup-bet__buttons">7</button>
                  <button type="button" className="popup-bet__buttons">8</button>
                  <button type="button" className="popup-bet__buttons">9</button>
                  <button type="button" className="popup-bet__buttons">0</button>
                </div>
                <div className="popup-bet__bottom-buttons-list">
                  <button type="button" className="popup-bet__plus-buttons">.</button>
                  <button type="button" className="popup-bet__plus-buttons">x2</button>
                  <button type="button" className="popup-bet__bottom-ok">OK</button>
                </div>
              </div>
              <footer className="footer popup-bet__footer">
                <img src={nrgaming} alt="NRGaming" className="footer-img"/>
              </footer>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu__top">
            <ul className="menu__list">
              <li className={classNames('menu__item', menuActiveIndex === 1 && 'active')}
                  onClick={() => setMenuActiveIndex(1)}
              >
                <span className="menu__link ">
          <span className="menu__link-inner">
          <span className="menu__link-icon menu__link--bets">
          <svg className="menu__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.45 12.3"><path
            className="cls-1"
            d="M15.82,6.15a3.64,3.64,0,0,1,3.63-3.63V0H0V2.52A3.64,3.64,0,0,1,3.63,6.15,3.64,3.64,0,0,1,0,9.78V12.3H19.45V9.78a3.64,3.64,0,0,1-3.63-3.63"></path></svg>
          </span>
          <span className="menu__link-text">MY BETS</span>
          </span>
                </span>
              </li>
              <li className={classNames('menu__item', menuActiveIndex === 2 && 'active')}
                  onClick={() => setMenuActiveIndex(2)}
              >
                <span className="menu__link ">
          <span className="menu__link-inner">
          <span className="menu__link-icon menu__link--game">
          <svg className="menu__icon-svg menu__icon-game" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 10.45 15.07"><path className="cls-1"
                                               d="M9.88,8.72l-7.39,6A1.53,1.53,0,0,1,0,13.55v-12A1.53,1.53,0,0,1,2.49.34l7.39,6a1.53,1.53,0,0,1,0,2.37"></path></svg>
          </span>
          <span className="menu__link-text">GAME</span>
          </span>
                </span>
              </li>
              <li className={classNames('menu__item', menuActiveIndex === 3 && 'active')}
                  onClick={() => setMenuActiveIndex(3)}
              >
                <span className="menu__link ">
          <span className="menu__link-inner">
          <span className="menu__link-icon menu__link--leader">
          <svg className="menu__icon-svg menu__icon-leaders" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20.22 16.92"><polygon
            className="cls-1"
            points="13.11 10.67 10.11 1.63 7.11 10.67 0 6.23 4.37 16.92 10.11 16.92 15.85 16.92 20.22 6.23 13.11 10.67"></polygon><path
            className="cls-1" d="M12.47,2.36A2.36,2.36,0,1,1,10.11,0a2.36,2.36,0,0,1,2.36,2.36"></path></svg>
          </span>
          <span className="menu__link-text">LEADERS</span>
          </span>
                </span>
              </li>
            </ul>
            {demo
              ? <div className="when-demo">
                <div className="when-demo__text">You are Playing Demo Version</div>
                <Link to={'/game'} className="when-demo__link">Play Real Game</Link>
              </div>
              : <ul className="menu-types__list">
                <li className={classNames('menu-types__item', 'my-bets', menuActiveIndex === 1 && 'active')}>
                  <div className="game__list">
                    <div className="game__item all-bets__item all-bets__item--first">
                      <div className="all-bets__top">
                        <span className="all-bets__top-date"></span>
                        <span className="all-bets__top-time">17:48</span>
                      </div>
                      <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={avatar6} alt="icon"/>
                </span>
                        <span className="game__item-user-name">A***12</span>
                      </div>
                      <div className="game__item-bet">
                        <span className="game__item-bet-count">BET 125.000</span>
                        <span className="game__item-bet-odd  ">9.00x </span>
                      </div>
                      <div className="game__item-win">
                        <span className="game__item-win-text">WIN</span>
                        <span className="game__item-win-count empty">- - - - </span>
                      </div>
                      <div className="leader__item-icon">
                        <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>
                        <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>

                      </div>
                    </div>
                    {Array.from(Array(10), (e, i) => {
                      return (<div key={i} className="game__item all-bets__item ">
                        <div className="all-bets__top">
                          <span className="all-bets__top-date">07.04</span>
                          <span className="all-bets__top-time">17:48</span>
                        </div>
                        <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={avatar4} alt="icon"/>
                </span>
                          <span className="game__item-user-name">A***12</span>
                        </div>
                        <div className="game__item-bet">
                          <span className="game__item-bet-count">BET 125.000</span>
                          <span className="game__item-bet-odd  empty">- - - </span>
                        </div>
                        <div className="game__item-win">
                          <span className="game__item-win-text loss">Loss</span>
                          <span className="game__item-win-count empty ">- - - - </span>
                        </div>
                        <div className="leader__item-icon">
                          <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                          </a>
                          <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                          </a>

                        </div>
                      </div>)
                    })}
                  </div>
                  <div className="game__more">
                    <button type='button' className="game__more-link my-bets-button"
                            onClick={() => setPopupAllBets(true)}
                    >
                  <span className="game__more-icon all-bets__icon">
          <svg className="menu__icon-svg menu__icon-bets" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.45 12.3"><path
            className="cls-1"
            d="M15.82,6.15a3.64,3.64,0,0,1,3.63-3.63V0H0V2.52A3.64,3.64,0,0,1,3.63,6.15,3.64,3.64,0,0,1,0,9.78V12.3H19.45V9.78a3.64,3.64,0,0,1-3.63-3.63"></path></svg>
          </span>
                      <span className="game__more-previous-text"> See All Bets</span>
                    </button>
                  </div>
                  <div className={classNames('game__popup-field',
                    'my-bets__popup-field',
                    popupAllBets && 'active'
                  )}>
                    <div className="game__popup">
                      <div className="game-popup-head-field">
                        <div className="game-popup-title">
                          <span className="game-popup-title-text">My Bets</span>
                          <button type="button" className="game-popup-title-close my-bets__popup-close"
                                  onClick={() => setPopupAllBets(false)}
                          >
                            <svg className="game-popup-title-svg" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 14 14">
                              <path
                                d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="my-bets__list">
                        <div className="my-bets__item my-bets__item--main">
                          <div className="my-bets__head">
                            <div className="my-bets__head-left">
                              <div className="my-bets__head-id">
                      <span className="my-bets__head-id-icon">
                        <svg className="my-bets__head-id-svg" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 10.45 15.07"><path
                          className="cls-1"
                          d="M9.88,8.72l-7.39,6A1.53,1.53,0,0,1,0,13.55v-12A1.53,1.53,0,0,1,2.49.34l7.39,6a1.53,1.53,0,0,1,0,2.37"></path></svg>
                      </span>
                                <span className="my-bets__head-id-text">
                        ID: 12345678
                      </span>
                              </div>
                              <div className="my-bets__head-time">
                                11:48:25
                              </div>
                            </div>
                            <div className="my-bets__head-right">
                              <div className="validity__icon">

                              </div>
                            </div>
                          </div>
                          <div className="my-bets__inner-list ">
                            <div className="my-bets__inner-item my-bets__inner-item--green">
                              <div className="my-bets__inner-bet">
                                <div className="my-bets__inner-bet-left">BET</div>
                                <div className="my-bets__inner-bet-right">25.000</div>
                              </div>
                              <div className="my-bets__inner-odd ">9.00x</div>
                              <div className="my-bets__inner-win">
                                <div className="my-bets__inner-win-left">WIN</div>
                                <div className="my-bets__inner-win-right">$777.000.000</div>
                              </div>

                            </div>
                          </div>
                        </div>
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <div className="my-bets__item" key={i}>
                              <div className="my-bets__head">
                                <div className="my-bets__head-left">
                                  <div className="my-bets__head-id">
                    <span className="my-bets__head-id-text">
                        ID: 12345678
                      </span>
                                  </div>
                                  <div className="my-bets__head-time my-bets__head-time--line">
                                    12.12.20
                                  </div>
                                  <div className="my-bets__head-time  ">
                                    12.12.20
                                  </div>
                                </div>
                                <div className="my-bets__head-right">
                                  <div className="validity__icon">

                                  </div>
                                </div>
                              </div>
                              <div className="my-bets__inner-list ">
                                <div className="my-bets__inner-item my-bets__inner--empty">
                                  <div className="my-bets__inner-bet">
                                    <div className="my-bets__inner-bet-left">BET</div>
                                    <div className="my-bets__inner-bet-right">$10.000</div>
                                  </div>
                                  <div className="my-bets__inner-odd ">- - -</div>
                                  <div className="my-bets__inner-win ">
                                    <div className="my-bets__inner-win-left">Loss</div>
                                    <div className="my-bets__inner-win-right "> - - - - - -</div>
                                  </div>
                                </div>
                                <div className="my-bets__inner-item ">
                                  <div className="my-bets__inner-bet">
                                    <div className="my-bets__inner-bet-left">BET</div>
                                    <div className="my-bets__inner-bet-right">$25.000</div>
                                  </div>
                                  <div className="my-bets__inner-odd wcolor-2">9.00x</div>
                                  <div className="my-bets__inner-win">
                                    <div className="my-bets__inner-win-left">WIN</div>
                                    <div className="my-bets__inner-win-right">$777.000.000</div>
                                  </div>
                                  <div className="leader__item-icon leader__item-icon-popup my-bets__item-icon-popup">
                                    <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>
                                    <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>

                                  </div>
                                </div>
                              </div>
                            </div>)
                        })}
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <div className="my-bets__item" key={i}>
                              <div className="my-bets__head">
                                <div className="my-bets__head-left">
                                  <div className="my-bets__head-id">
                    <span className="my-bets__head-id-text">
                        ID: 12345678
                      </span>
                                  </div>
                                  <div className="my-bets__head-time my-bets__head-time--line">
                                    12.12.20
                                  </div>
                                  <div className="my-bets__head-time  ">
                                    12.12.20
                                  </div>
                                </div>
                                <div className="my-bets__head-right">
                                  <div className="validity__icon">

                                  </div>
                                </div>
                              </div>
                              <div className="my-bets__inner-list ">
                                <div className="my-bets__inner-item ">
                                  <div className="my-bets__inner-bet">
                                    <div className="my-bets__inner-bet-left">BET</div>
                                    <div className="my-bets__inner-bet-right">$25.000</div>
                                  </div>
                                  <div className="my-bets__inner-odd wcolor-25">9.00x</div>
                                  <div className="my-bets__inner-win">
                                    <div className="my-bets__inner-win-left">WIN</div>
                                    <div className="my-bets__inner-win-right">$777.000.000</div>
                                  </div>
                                  <div className="leader__item-icon leader__item-icon-popup my-bets__item-icon-popup">
                                    <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>
                                    <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>

                                  </div>
                                </div>
                                <div className="my-bets__inner-item ">
                                  <div className="my-bets__inner-bet">
                                    <div className="my-bets__inner-bet-left">BET</div>
                                    <div className="my-bets__inner-bet-right">$25.000</div>
                                  </div>
                                  <div className="my-bets__inner-odd wcolor-20">9.00x</div>
                                  <div className="my-bets__inner-win">
                                    <div className="my-bets__inner-win-left">WIN</div>
                                    <div className="my-bets__inner-win-right">$777.000.000</div>
                                  </div>
                                  <div className="leader__item-icon leader__item-icon-popup my-bets__item-icon-popup">
                                    <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>
                                    <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                    </a>

                                  </div>
                                </div>

                              </div>
                            </div>)
                        })}
                      </div>
                    </div>
                    <div className="my-bets__popup-close__field"
                         onClick={() => setPopupAllBets(false)}/>
                  </div>
                </li>
                <li className={classNames('menu-types__item', 'game', menuActiveIndex === 2 && 'active')}>
                  <div className="game__list ">
                    {Array.from(Array(10), (e, i) => {
                      return (<div className="game__item" key={i}>
                        <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={profileAvatar} alt="icon"/>
                </span>
                          <span className="game__item-user-name">A***12</span>
                        </div>
                        <div className="game__item-bet">
                          <span className="game__item-bet-count">BET 125.000</span>
                          <span className="game__item-bet-odd wcolor-10">5x </span>
                        </div>
                        <div className="game__item-win">
                          <span className="game__item-win-text">WIN</span>
                          <span className="game__item-win-count ">$555.000.000</span>
                        </div>
                      </div>)
                    })}
                  </div>
                  <div className="game__more">
                    <button type="button" className="game__more-link previous-button"
                            onClick={() => setPopupPrevious(true)}>
              <span className="game__more-icon game__more-icon--previous">
                <svg className="game__more-previous-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.1 34.14"><path
                  d="M28.57,18.17l-6.91,5.62a1.43,1.43,0,0,1-2.32-1.11V11.45a1.42,1.42,0,0,1,2.32-1.1L28.57,16a1.43,1.43,0,0,1,0,2.21"/><path
                  d="M23,0A17.14,17.14,0,0,0,6.3,13.8H0l8.08,8.08,8.08-8.08H10.63A12.83,12.83,0,1,1,12.91,25l-.59-.76L9,26.81l.6.76A17.07,17.07,0,1,0,23,0"/></svg>
              </span>
                      <span className="game__more-previous-text"> Previous Game</span>
                    </button>
                    <button type="button" className="game__more-link all-gamers-button"
                            onClick={() => setPopupAllGamers(true)}>
              <span className="game__more-icon game__more-icon--all">
                <svg className="game__more-previous-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.96 24.11"><path
                  d="M23.56,12.75l1.29.27a8.74,8.74,0,0,1,6.67,6.84.77.77,0,0,1-.41.95Q20,27.41,8.85,20.8a.71.71,0,0,1-.41-.88,8.25,8.25,0,0,1,5-6.27c.94-.43,2-.7,3-1.06a7,7,0,0,1-2.95-5.88,6.78,6.78,0,0,1,1.85-4.66,6.29,6.29,0,0,1,9-.26,6.78,6.78,0,0,1,2.09,5.66,6.77,6.77,0,0,1-3,5.13Z"/><path
                  d="M26.24,12A7.26,7.26,0,0,1,30,10.28,4.77,4.77,0,0,1,27.9,6.2,4.48,4.48,0,0,1,29.26,3a4.21,4.21,0,0,1,6.08.12c1.86,2,1.62,4.56-.67,7.09.51.15,1,.28,1.48.46a5.81,5.81,0,0,1,3.76,4.18.66.66,0,0,1-.35.89,15.24,15.24,0,0,1-6.65,2.11.83.83,0,0,1-.68-.31,10.21,10.21,0,0,0-5.73-5.45Z"/><path
                  d="M5.29,10.21C3,7.9,2.76,5.12,4.64,3.14a4.23,4.23,0,0,1,6.23,0c1.84,2,1.57,4.73-.77,7.07a7.4,7.4,0,0,1,3.54,1.65c-1,.58-1.91,1.09-2.8,1.72a9.31,9.31,0,0,0-3,3.82.85.85,0,0,1-.62.43A14.67,14.67,0,0,1,.36,15.72a.62.62,0,0,1-.3-.85A5.94,5.94,0,0,1,3.23,11C3.88,10.66,4.57,10.47,5.29,10.21Z"/></svg>
              </span>
                      <span className="game__more-previous-text ">See All Gamers</span></button>
                  </div>
                  <div className={classNames('game__popup-field',
                    'all-gamers__popup-field',
                    popupAllGamers && 'active'
                  )}>
                    <div className="game__popup">
                      <div className="game-popup-head-field">
                        <div className="game-popup-title">
                          <span className="game-popup-title-text">Gamers 123</span>
                          <button type="button" className="game-popup-title-close all-gamers-title-close"
                                  onClick={() => setPopupAllGamers(false)}
                          >
                            <svg className="game-popup-title-svg" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 14 14">
                              <path
                                d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="game-popup-head">
                          <div className="game-popup-head__gamers game-popup__gamers--width">
                            <div className="game-popup-head__gamers-text">GAMERS</div>
                          </div>
                          <div className="game-popup-head__bet game-popup__bet--width">
                            BET
                          </div>
                          <div className="game-popup-head__odd game-popup__odd--width">
                            X
                          </div>
                          <div className="game-popup-head__win game-popup__win--width">
                            WIN
                          </div>
                        </div>
                      </div>
                      <div className="game-popup__list">
                        {Array.from(Array(10), (e, i) => {
                          return (<div className="game-popup__item game-popup__item--light" key={i}>
                            <div className="game-popup__gamers  game-popup__gamers--width">
                              <div className="game-popup__gamers-photo">
                                <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                              </div>
                              <div className="game-popup__gamers-number">A***1</div>
                            </div>
                            <div className="game-popup__bet game-popup__bet--width">
                              $250.0.000
                            </div>
                            <div className="game-popup__odd game-popup__odd--width">
                              4.00x
                            </div>
                            <div className="game-popup__win game-popup__win--width">
                              $317.000
                            </div>
                          </div>)
                        })}
                        {Array.from(Array(10), (e, i) => {
                          return (<div className="game-popup__item" key={i}>
                            <div className="game-popup__gamers game-popup__gamers--width">
                              <div className="game-popup__gamers-photo">
                                <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                              </div>
                              <div className="game-popup__gamers-number">A***1</div>
                            </div>
                            <div className="game-popup__bet game-popup__bet--width">
                              $250.000.000
                            </div>
                            <div className="game-popup__odd game-popup__odd--width game-popup__odd--laurel">
                              7.00
                            </div>
                            <div className="game-popup__win game-popup__win--width empty">
                              - - - -
                            </div>
                          </div>)
                        })}
                      </div>
                    </div>
                    <div className="game__popup-close__field all-gamers__popup-close__field"
                         onClick={() => setPopupAllGamers(false)}
                    ></div>
                  </div>
                  <div className={classNames('game__popup-field',
                    'previous__popup-field',
                    popupPrevious && 'active'
                  )}>
                    <div className="game__popup">
                      <div className="game-popup-head-field">
                        <div className="game-popup-title">
                          <span className="game-popup-title-text">Previous Game</span>
                          <button type="button" className="game-popup-title-close previous__popup-close"
                                  onClick={() => setPopupPrevious(false)}
                          >
                            <svg className="game-popup-title-svg" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 14 14">
                              <path
                                d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="previous-popup__player">
                          <span className="previous-popup__player-id">ID: 12345678</span>
                          <span className="previous-popup__player-time">13:45:03</span>
                        </div>
                        <div className="game-popup-head">
                          <div className="game-popup-head__gamers game-popup__gamers--width">
                            <div className="game-popup-head__gamers-text">GAMERS</div>
                          </div>
                          <div className="game-popup-head__bet game-popup__bet--width">
                            BET
                          </div>
                          <div className="game-popup-head__odd game-popup__odd--width">
                            X
                          </div>
                          <div className="game-popup-head__win game-popup__win--width">
                            WIN
                          </div>
                        </div>
                      </div>
                      <div className="game-popup__list">
                        {Array.from(Array(10), (e, i) => {
                          return (<div className="game-popup__item game-popup__item--light" key={i}>
                            <div className="game-popup__gamers  game-popup__gamers--width">
                              <div className="game-popup__gamers-photo">
                                <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                              </div>
                              <div className="game-popup__gamers-number">A***1</div>
                            </div>
                            <div className="game-popup__bet game-popup__bet--width">
                              $250.0.000
                            </div>
                            <div className="game-popup__odd game-popup__odd--width">
                              4.00x
                            </div>
                            <div className="game-popup__win game-popup__win--width">
                              $317.000
                            </div>
                          </div>)
                        })}
                        {Array.from(Array(10), (e, i) => {
                          return (<div className="game-popup__item" key={i}>
                            <div className="game-popup__gamers game-popup__gamers--width">
                              <div className="game-popup__gamers-photo">
                                <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                              </div>
                              <div className="game-popup__gamers-number">A***1</div>
                            </div>
                            <div className="game-popup__bet game-popup__bet--width">
                              $250.000.000
                            </div>
                            <div className="game-popup__odd game-popup__odd--width game-popup__odd--laurel">
                              7.00
                            </div>
                            <div className="game-popup__win game-popup__win--width empty">
                              - - - -
                            </div>
                          </div>)
                        })}
                      </div>
                    </div>
                    <div className="previous__popup-close__field"
                         onClick={() => setPopupPrevious(false)}
                    ></div>
                  </div>
                </li>
                <li className={classNames('menu-types__item', 'leaders', menuActiveIndex === 3 && 'active')}>
                  <div className="game__list">
                    <div className="game__item leaders__item game__item--first ">
                      <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={avatar4} alt="icon"/>
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
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>
                        <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>

                      </div>
                    </div>
                    <div className="game__item leaders__item game__item--second ">
                      <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={avatar1} alt="icon"/>
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
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>
                        <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>

                      </div>
                    </div>
                    <div className="game__item leaders__item game__item--third ">
                      <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={profileAvatar} alt="icon"/>
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
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>
                        <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                        </a>

                      </div>
                    </div>
                    {Array.from(Array(5), (e, i) => {
                      return (<div className="game__item leaders__item" key={i}>
                        <div className="game__item-user">
                <span className="game__item-user-photo">
                  <img className="game__item-user-img" src={profileAvatar} alt="icon"/>
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
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"/></svg>
                </span>
                          </a>
                          <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"/></svg>
                </span>
                          </a>

                        </div>
                      </div>)
                    })}
                  </div>
                  <div className="game__more">
                    <button type="button" className="game__more-link leaders-button"
                            onClick={() => setPopupLeaders(true)}
                    >
                    <span className="game__more-icon leaders-icon">
             <svg className="menu__icon-svg menu__icon-leaders" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.22 16.92"><polygon className="cls-1"
                                                     points="13.11 10.67 10.11 1.63 7.11 10.67 0 6.23 4.37 16.92 10.11 16.92 15.85 16.92 20.22 6.23 13.11 10.67"></polygon><path
               className="cls-1" d="M12.47,2.36A2.36,2.36,0,1,1,10.11,0a2.36,2.36,0,0,1,2.36,2.36"></path></svg>
              </span>
                      <span className="game__more-previous-text leaders-button"
                      >
                      See All Leaders
                    </span></button>
                  </div>
                  <div className={classNames('game__popup-field',
                    'leaders__popup-field',
                    popupLeaders && 'active'
                  )}>
                    <div className="game__popup">
                      <div className="game-popup-head-field">
                        <div className="game-popup-title">
                          <span className="game-popup-title-text">Leaders</span>
                          <button type="button" className="game-popup-title-close leaders__popup-close"
                                  onClick={() => setPopupLeaders(false)}
                          >
                            <svg className="game-popup-title-svg" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 14 14">
                              <path
                                d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="game-popup-head">
                          <div className="game-popup-head__gamers game-popup__gamers--width">
                            <div className="game-popup-head__gamers-text">GAMERS</div>
                          </div>
                          <div className="game-popup-head__bet game-popup__bet--width">
                            BET
                          </div>
                          <div className="game-popup-head__odd game-popup__odd--width">
                            X
                          </div>
                          <div className="game-popup-head__win game-popup__win--width">
                            WIN
                          </div>
                        </div>
                      </div>
                      <div className="game-popup__list">
                        <div className="game-popup__item game-popup__item--light game__item--first">
                          <div className="game-popup__gamers game-popup__gamers--width">
                            <div className="game-popup__gamers-photo game__item-user-photo">
                              <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                            </div>
                            <div className="game-popup__gamers-number game__item-user-name ">A***1</div>
                          </div>
                          <div className="game-popup__bet game-popup__bet--width">
                            235.000
                          </div>
                          <div className="game-popup__odd game-popup__odd--width wcolor-15">
                            8.00x
                          </div>
                          <div className="game-popup__win game-popup__win--width">
                            $777.000.000
                          </div>
                          <div className="leader__item-icon leader__item-icon-popup">
                            <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>
                            <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>

                          </div>
                        </div>
                        <div className="game-popup__item game-popup__item--light game__item--second">
                          <div className="game-popup__gamers game-popup__gamers--width">
                            <div className="game-popup__gamers-photo game__item-user-photo">
                              <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                            </div>
                            <div className="game-popup__gamers-number game__item-user-name ">A***1</div>
                          </div>
                          <div className="game-popup__bet game-popup__bet--width">
                            235.000
                          </div>
                          <div className="game-popup__odd game-popup__odd--width wcolor-35">
                            8.00x
                          </div>
                          <div className="game-popup__win game-popup__win--width">
                            $777.000.000
                          </div>
                          <div className="leader__item-icon leader__item-icon-popup">
                            <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>
                            <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>

                          </div>
                        </div>
                        <div className="game-popup__item game-popup__item--light game__item--third">
                          <div className="game-popup__gamers game-popup__gamers--width">
                            <div className="game-popup__gamers-photo game__item-user-photo">
                              <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                            </div>
                            <div className="game-popup__gamers-number game__item-user-name ">A***1</div>
                          </div>
                          <div className="game-popup__bet game-popup__bet--width">
                            235.000
                          </div>
                          <div className="game-popup__odd game-popup__odd--width wcolor-45">
                            8.00x
                          </div>
                          <div className="game-popup__win game-popup__win--width">
                            $777.000.000
                          </div>
                          <div className="leader__item-icon leader__item-icon-popup">
                            <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>
                            <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                            </a>

                          </div>
                        </div>
                        {Array.from(Array(20), (e, i) => {
                          return (<div className="game-popup__item game-popup__item--light" key={i}>
                              <div className="game-popup__gamers game-popup__gamers--width">
                                <div className="game-popup__gamers-photo game__item-user-photo">
                                  <img src={profileAvatar} alt="avatar" className="avatars-img"/>
                                </div>
                                <div className="game-popup__gamers-number game__item-user-name ">A***1</div>
                              </div>
                              <div className="game-popup__bet game-popup__bet--width">
                                235.000
                              </div>
                              <div className="game-popup__odd game-popup__odd--width wcolor-35">
                                8.00x
                              </div>
                              <div className="game-popup__win game-popup__win--width">
                                $777.000.000
                              </div>
                              <div className="leader__item-icon leader__item-icon-popup">
                                <a className="leader__item-icon-link">
                 <span className="leader__item-icon-validity">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 34.99 44.4"><path
                    d="M4,20a2.76,2.76,0,0,1,3.91-3.91l9.82,9.81L35,8.57V6.68A6.68,6.68,0,0,0,28.31,0H6.68A6.68,6.68,0,0,0,0,6.68V26.51a6.67,6.67,0,0,0,1.87,4.63L12.69,42.36a6.68,6.68,0,0,0,9.61,0L33.12,31.14A6.67,6.67,0,0,0,35,26.51V16.39l-17.3,17.3Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                </a>
                                <a className="leader__item-icon-link">
                  <span className="leader__item-icon-share">
                  <svg className="leader__item-validity-svg" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 21.06 19.14"><path
                    d="M13.06,2.49c4,.78,7,3.43,7,6.58,0,4.86-3.7,6.8-9.53,6.8a12.15,12.15,0,0,1-3-.35c-1.32-.31-5.95,1.91-5.95,1.91s.7-4.82.16-5.72A5.29,5.29,0,0,1,1,9.07c0-2.34,1.67-4.4,4.2-5.64"
                    fill="none" stroke="#8a9dad" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path
                    d="M11,12.68,15.7,7.86a.53.53,0,0,0,.12-.58A.47.47,0,0,0,15.31,7L13,7V6.85A7,7,0,0,0,5.78,0L4.7,0a.54.54,0,0,0-.51.43V.59a.5.5,0,0,0,.31.46A5.93,5.93,0,0,1,7.92,6.27l0,.85L5.63,7.2a.56.56,0,0,0-.51.35.5.5,0,0,0,.16.58l5,4.55A.48.48,0,0,0,11,12.68Z"
                    fill="#8a9dad"></path></svg>
                </span>
                                </a>

                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="leaders__popup-close__field"
                         onClick={() => setPopupLeaders(false)}
                    ></div>
                  </div>
                </li>
              </ul>
            }
          </div>
          <footer className="footer">
            <img src={nrgaming} alt="NRGaming" className="footer-img"/>
          </footer>
        </div>
      </div>
      <div className="landscape">
        <div className="landscape__icon">
          <img src={landscapeIcon} alt="" className="landscape__icons-svg"/>
        </div>
      </div>
    </div>
  )
};
