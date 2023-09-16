import logo from '../../assets/img/logo.svg'
import avatar from '../../assets/img/avatar-img.png'
import previous from '../../assets/img/previous.svg'
import leaderValidity from '../../assets/img/leader-validity.svg'
import avatar1 from '../../assets/img/avatars/1.png'
import avatar2 from '../../assets/img/avatars/2.png'
import avatar3 from '../../assets/img/avatars/3.png'
import avatar4 from '../../assets/img/avatars/4.png'
import avatar5 from '../../assets/img/avatars/5.png'
import avatar6 from '../../assets/img/avatars/6.png'
import error from '../../assets/img/error.svg'
import layer1 from '../../assets/img/layer1.png'
import layer2 from '../../assets/img/layer2.png'
import group from '../../assets/img/group.png'
import {useEffect, useState} from "react";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import Controllers from "../../components/Controllers/Controllers";
import {Menu} from "../../components/Menu/Menu";
import {Rocket} from "../../components/Rocket/Rocket";


export const Desktop = () => {
  const [popupValidity, setPopupValidity] = useState(false)
  const [popupProbably, setPopupProbably] = useState(false)
  const [popupAvatars, setPopupAvatars] = useState(false)
  const [popupSeed, setPopupSeed] = useState(false)
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
    <div
      className={classNames('crazy-rocket', startGame && 'start', backgroundFast && 'background-fast', endGame && 'end')}>
      <Menu/>
      <div className="main">
        <div className="main__head">
          <div className="main__head-left">
            <span className="validity__link" onClick={() => setPopupValidity(true)}>
              <span className="validity__link-icon">
                <img
                  src={leaderValidity}
                  alt="Validity Icon"
                  className="validity-icon-svg"
                />
              </span>
              <span className="validity__link-text">Proof of validity</span>
            </span>
            <span className="validity__id" onClick={() => setPopupProbably(true)}>ID: 12345678</span>
          </div>
          <Controllers/>
        </div>
        <div className="main__middle">
          <Rocket startGame={startGame} setStartGame={setStartGame} popupAvatars={popupAvatars}
                  setPopupAvatars={setPopupAvatars}/>
          <div className="popup__field">
            <div className="popup-error">
              <div className="popup-error__center">
                <div className="popup-error__icon">
                  <img
                    className="popup-error__icon-svg"
                    src={error}
                    alt="Error Icon"
                  />
                </div>
                <div className="popup-error__text">
                  You have insufficient funds
                </div>
              </div>
            </div>
            <div className={classNames('popup-avatars',
              popupAvatars && 'active'
            )}>
              <div className="popup-avatars__top">
                <button type="button" className="popup-avatars__button" onClick={() => setPopupAvatars(false)}>
                  <span className="popup-avatars__button-line"/>
                </button>
              </div>
              <div className="popup-avatars__list">
                <div className="popup-avatars__item selected">
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
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar3} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Star of Mars</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar4} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Star of Mars</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar5} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Alien</div>
                </div>
                <div className="popup-avatars__item ">
                  <div className="popup-avatars__photo ">
                    <img src={avatar6} alt="avatar" className="avatars-img"/>
                  </div>
                  <div className="popup-avatars__name">Scout Scout</div>
                </div>
              </div>
            </div>
            <div className={classNames('popup-validity',
              popupValidity && 'active'
            )}>
              <div className="popup-validity__header">
                <div className="popup-validity__header-left">
                  <span className="popup-validity__question">What is</span>
                  <span className="validity__link-icon">
                    <img
                      src={leaderValidity}
                      alt="Validity Icon"
                      className="validity-icon-svg"
                    />
                  </span>
                  <span className="validity__link-text">
                    Proof of Validity?
                  </span>
                </div>
                <div className="popup-validity__close" onClick={() => setPopupValidity(false)}>
                  <button className="popup-validity__close">
                    <svg
                      className="popup-validity__close-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14">
                      <path
                        d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="popup-validity__body">
                <div className="popup-validity__body-top">
                  <p className="popup-validity__body-text">
                    <b>“Crazy Rocket” </b> is based on cryptographic technology
                    called “Provably Fair”. This technology guarantees 100%
                    fairness of game result. With this technology, it’s
                    impossible for any third party to interfere in game process.
                  </p>

                  <h4 className="popup-validity__body-title">How it works</h4>
                  <p className="popup-validity__body-text">
                    Result of each round (Game’s “Fly away” coefficient ) is not
                    generated on our servers. It’s generated with help of round
                    players and is fully transparent. This way, it’s impossible
                    for anyone to manipulate game output. Also, anyone can check
                    and confirm game fairness
                  </p>
                  <h4 className="popup-validity__body-title">More info</h4>
                  <p className="popup-validity__body-text">
                    Round result is generated from four independent participants
                    of the round: game operator and first 3 betters of the
                    round. Operator is generating server seed (random 16
                    symbols). Hashed version of this server seed is available
                    publicly before round starts
                  </p>
                  <p className="popup-validity__body-text">
                    When round starts, game merges server seed with three client
                    seeds. From merged symbols is generated SHA512 hash, and
                    from this hash - game result.
                  </p>
                </div>
                <div className="popup-validity__body-center">
                  <img
                    src={group}
                    alt="Validity-photo"
                    className="popup-validity__body-img"
                  />
                </div>
                <div className="popup-validity__check">
                  <h4 className="popup-validity__body-title">How to Check</h4>
                  <div className="popup-validity__check-top">
                    <div className="popup-validity__check-left">
                      <img
                        src={layer1}
                        alt="Layer"
                        className="popup-validity__check-img"
                      />
                    </div>
                    <div className="popup-validity__check-right">
                      <p className="popup-validity__body-text">
                        You can check fairness of each round from game history,
                        by clicking on green icon.
                      </p>
                      <p className="popup-validity__body-text">
                        In opened window, you will see server seed, 3 pair of
                        players seeds, combined hash and round result.
                      </p>
                    </div>
                  </div>
                  <div className="popup-validity__check-top">
                    <div className="popup-validity__check-right">
                      <p className="popup-validity__body-text">
                        Hashed version of next rounds server seed is available
                        publicly in settings window (In user menu, check
                        “Provably Fair Settings” and then “Next server seed
                        SHA256").
                      </p>
                      <p className="popup-validity__body-text">
                        If you want to participate in round result generation,
                        make sure you are between first 3 players who make bet
                        in that round.
                      </p>
                    </div>
                    <div className="popup-validity__check-left">
                      <img
                        src={layer2}
                        alt="Layer"
                        className="popup-validity__check-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup-validity__footer">
                <div className="popup-validity__footer-top">
                  Correctness of Hash can be checked in any online calculator,
                  for example
                </div>
                <div className="popup-validity__footer-bottom">
                  www.miniwebtool.com/sha512-hash-generator
                </div>
              </div>
            </div>
            <div className={classNames('popup-probably',
              popupProbably && 'active'
            )}>
              <div className="popup-probably__header">
                <div className="popup-probably__head">
                  <div className="popup-probably__head-id popup-probably__head--border">
                    ID: 12345678
                  </div>
                  <div className="popup-probably__head-odd popup-probably__head--border">
                    <span className="message__odd wcolor-95">8.0x</span>
                  </div>
                  <div className="popup-probably__head-date popup-probably__head--border">
                    13.02.20
                  </div>
                  <div className="popup-probably__head-time">13:12:25</div>
                </div>
                <div className="popup-probably__close">
                  <button className="popup-validity__close" onClick={() => setPopupProbably(false)}>
                    <svg
                      className="popup-validity__close-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14">
                      <path
                        d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="popup-probably__center">
                <div className="settings__server">
                  <div className="settings__server-left">
                    <svg
                      className="settings__server-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35.92 35.92">
                      <path
                        d="M0,0V10.57H35.92V0ZM4.21,6.34V4.23H6.32V6.34Zm4.21,0V4.23h2.11V6.34Zm14.17,0V4.23h9.12V6.34Z"/>
                      <path
                        d="M0,23.24H35.92V12.68H0Zm31.71-6.33V19H22.59v-2.1Zm-21.18,0V19H8.42v-2.1Zm-4.21,0V19H4.21v-2.1Z"/>
                      <path
                        d="M0,35.92H35.92V25.35H0Zm31.71-6.34v2.11H22.59V29.58Zm-21.18,0v2.11H8.42V29.58Zm-4.21,0v2.11H4.21V29.58Z"/>
                    </svg>
                  </div>
                  <div className="settings__server-right">
                    <div className="settings__server-text--bold">
                      Server Seed
                    </div>
                    <div className="settings__server-text">
                      Generated on our side
                    </div>
                  </div>
                </div>
                <div className="settings__server-name">
                  As322sd15d1sfc5sdz1c5d1f514ewa5s14fg5e5dFSfC
                </div>
                <div className="provably-fair__center">
                  <div className="provably-fair__center-left">
                    <svg
                      className="provably-fair__laptop"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 42.9 28.17">
                      <path
                        d="M42.84,24a.21.21,0,0,0-.16-.08H.22A.21.21,0,0,0,.05,24a.21.21,0,0,0,0,.17s.65,4,5.62,4H37.28c5,0,5.61-3.93,5.61-4A.21.21,0,0,0,42.84,24ZM24.64,26.8H18.25V25.33h6.39Z"/>
                      <path
                        d="M4.63,22.42H38.27a.88.88,0,0,0,.88-.88V.88A.88.88,0,0,0,38.27,0H4.63a.87.87,0,0,0-.88.88V21.54A.87.87,0,0,0,4.63,22.42ZM6.83,3.08H36.06V19.34H6.83Z"/>
                    </svg>
                  </div>
                  <div className="provably-fair__center-right">
                    <div className="provably-fair__center-title">
                      Client Seed:
                    </div>
                    <div className="provably-fair__center-text">
                      Generated on players side
                    </div>
                  </div>
                </div>
                <div className="popup-probably__column">
                  <div className="popup-probably__column-gamer">GAMER 1</div>
                  <div className="popup-probably__column-user">
                    <div className="game__gamers ">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number ">A**d*1</div>
                    </div>
                  </div>
                  <div className="popup-probably__column-seed">SEED</div>
                  <div className="popup-probably__column-hash">
                    As322sd15d1sfc5sdz1c5d
                  </div>
                </div>
                <div className="popup-probably__column">
                  <div className="popup-probably__column-gamer">GAMER 1</div>
                  <div className="popup-probably__column-user">
                    <div className="game__gamers ">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number ">A**d*1</div>
                    </div>
                  </div>
                  <div className="popup-probably__column-seed">SEED</div>
                  <div className="popup-probably__column-hash">
                    As322sd15d1sfc5sdz1c5d
                  </div>
                </div>
                <div className="popup-probably__column">
                  <div className="popup-probably__column-gamer">GAMER 1</div>
                  <div className="popup-probably__column-user">
                    <div className="game__gamers ">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number ">A**d*1</div>
                    </div>
                  </div>
                  <div className="popup-probably__column-seed">SEED</div>
                  <div className="popup-probably__column-hash">
                    As322sd15d1sfc5sdz1c5d
                  </div>
                </div>
                <div className="provably-fair__center">
                  <div className="provably-fair__center-left">
                    <svg
                      className="popup-probably-lock"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 37.32 37.31">
                      <path
                        d="M3.18,37.31a10.35,10.35,0,0,1-2.3-1.53,3.7,3.7,0,0,1-.13-4.63,3.84,3.84,0,0,1,4.44-1.4.92.92,0,0,0,1.15-.27C7.13,28.63,8,27.82,8.79,27A2.59,2.59,0,0,0,9,26.74l-1.44-2c-.69.75-1.34,1.43-1.95,2.14a1.59,1.59,0,0,1-1.44.63c-.74-.05-1.49,0-2.29,0V25.34a1.48,1.48,0,0,1,.54-.08c2.15.41,2.91-1.46,4.14-2.53.11-.09.06-.41,0-.61-.14-.74-.3-1.47-.47-2.33h-6V17.57H1.94c.58,0,1.16,0,1.75,0,.79,0,1.83.22,2.31-.19s.43-1.48.56-2.27a1,1,0,0,0-.23-.71,27.31,27.31,0,0,0-1.94-1.94,1.62,1.62,0,0,0-.88-.34c-.54,0-1.09,0-1.73,0a14.27,14.27,0,0,1,0-1.76.69.69,0,0,1,.51-.44,15.23,15.23,0,0,1,2.24,0,1.52,1.52,0,0,1,.83.45c.73.71,1.41,1.46,2.16,2.25l1.51-2.15c-1-.95-2-1.94-3.06-2.86-.16-.15-.6,0-.9,0A3.78,3.78,0,0,1,1,6.42a3.69,3.69,0,0,1-.53-4.2A3.83,3.83,0,0,1,5.27.27,3.8,3.8,0,0,1,7.61,5.06,1.13,1.13,0,0,0,8,6.42c.89.83,1.7,1.75,2.53,2.62L12.7,7.48c-.78-.69-1.48-1.34-2.23-1.95a1.62,1.62,0,0,1-.6-1.45c.05-.74,0-1.48,0-2.27H12a1.08,1.08,0,0,1,.1.45c-.45,2.17,1.39,3,2.5,4.24.08.1.35.08.53.06s.59-.15.89-.21c1.56-.3,1.56-.3,1.56-1.93V.06h2.21V6c.9.2,1.7.4,2.51.52a1,1,0,0,0,.7-.28A22.23,22.23,0,0,0,24.87,4.4a2.33,2.33,0,0,0,.37-1.12,11.75,11.75,0,0,0,0-1.46h2.2c0,1,0,1.92,0,2.86a1.27,1.27,0,0,1-.4.68c-.73.72-1.47,1.42-2.27,2.19L26.86,9c1-1,1.94-2,2.87-3,.14-.15.08-.55,0-.81A3.82,3.82,0,0,1,30.89,1,3.7,3.7,0,0,1,35,.36a3.86,3.86,0,0,1,2.07,4.87,3.8,3.8,0,0,1-4.77,2.38A1.19,1.19,0,0,0,30.88,8c-.82.86-1.71,1.65-2.58,2.48l1.52,2.18c.7-.75,1.35-1.43,2-2.15a1.61,1.61,0,0,1,1.45-.62c.74.05,1.48,0,2.29,0V12a1.91,1.91,0,0,1-.43.06c-2.18-.48-3,1.37-4.24,2.48-.11.1-.08.41-.05.61a10.91,10.91,0,0,1,.29,1.47c0,.84.43,1,1.16.93,1.65,0,3.31,0,5,0v2.21c-1.72,0-3.41,0-5.09,0-.7,0-.89.21-1.12.9a3,3,0,0,0,1.15,3.56,2.9,2.9,0,0,0,2.53,1,4.37,4.37,0,0,1,.78,0v2.14c-1,0-2,0-3,0-.2,0-.42-.24-.59-.41-.72-.73-1.42-1.47-2.17-2.26l-1.5,2.13c1,.95,2,1.93,3,2.88a.69.69,0,0,0,.58.06,3.91,3.91,0,1,1,2.39,7.42.55.55,0,0,0-.15.08H32.66c-2.83-1.22-3.52-2.57-2.81-5.47a.73.73,0,0,0-.08-.51c-1-1-1.94-2-2.91-3L24.72,29.8c.8.74,1.54,1.43,2.28,2.14.17.17.41.39.41.59.05,1,0,2,0,3H25.25c0-.57,0-1.09,0-1.61,0-.22,0-.51-.09-.64a15.88,15.88,0,0,0-2.49-2.43c-.37-.26-1.2.13-1.82.23a1.64,1.64,0,0,0-.56.1c-.2.12-.49.32-.49.49,0,1.88,0,3.77,0,5.65H17.5c0-1.49.05-3,.06-4.48s0-1.55-1.47-1.84c-.32-.06-.64-.16-1-.21-.17,0-.44-.05-.53,0-1.11,1.24-2.95,2.06-2.5,4.23,0,.14-.06.3-.09.46H9.88c0-.79,0-1.54,0-2.27a1.62,1.62,0,0,1,.61-1.46c.73-.6,1.43-1.26,2.2-1.95L10.5,28.31c-1,1-1.93,2-2.87,3-.13.15-.09.49-.07.73a11.08,11.08,0,0,1,.18,2c-.2,1.83-1.44,2.78-3.06,3.34ZM18.67,8.25A10.42,10.42,0,1,0,29.09,18.62,10.44,10.44,0,0,0,18.67,8.25ZM33.45,5.61a1.73,1.73,0,0,0,1.69-1.7A1.77,1.77,0,0,0,33.37,2.2a1.71,1.71,0,0,0,.08,3.41ZM4,35.13a1.71,1.71,0,0,0,0-3.41A1.74,1.74,0,0,0,2.2,33.48,1.79,1.79,0,0,0,4,35.13ZM3.8,5.61A1.7,1.7,0,0,0,5.61,4,1.73,1.73,0,0,0,4.07,2.2,1.76,1.76,0,0,0,2.21,3.82,1.73,1.73,0,0,0,3.8,5.61Zm31.34,27.8a1.73,1.73,0,0,0-1.7-1.69,1.71,1.71,0,0,0-1.71,1.67,1.73,1.73,0,0,0,1.73,1.74A1.76,1.76,0,0,0,35.14,33.41Z"/>
                      <path
                        d="M23.07,15.42h2.08V25.63H12.2V15.42h2.06c.62-3.66,2-5.14,4.52-5.09S22.64,12,23.07,15.42Zm-8.71,8H23V17.68h-8.6Zm6.34-8a2.26,2.26,0,0,0-1-2.59,2,2,0,0,0-2.26.13,2.15,2.15,0,0,0-.75,2.46Z"/>
                      <path
                        d="M19.72,19.4v2.21H17.58c0-.61,0-1.24,0-1.85,0-.14.33-.33.52-.35C18.61,19.37,19.11,19.4,19.72,19.4Z"/>
                    </svg>
                  </div>
                  <div className="provably-fair__center-right">
                    <div className="provably-fair__center-title">
                      Combined SHA512 Hash
                    </div>
                    <div className="provably-fair__center-text">
                      Above Seeds combined and convertd to SHA512 Hash. This is
                      your Game Result
                    </div>
                  </div>
                </div>
                <div className="settings__server-name">
                  As322sd15d1sfc5sdz1c5d1f514ewa5s14fg5e5dFSfCsdfcksfjshnfjsndfjnsjf
                </div>
                <div className="popup-probably__row-list">
                  <div className="popup-probably__row-item">
                    <div className="popup-probably__row-item-top">HEX</div>
                    <div className="popup-probably__row-item-bottom">
                      As322sd15d1sfc5sdz1c5d
                    </div>
                  </div>
                  <div className="popup-probably__row-item">
                    <div className="popup-probably__row-item-top">HEX</div>
                    <div className="popup-probably__row-item-bottom">
                      As322sd15d1sfc5sdz1c5d
                    </div>
                  </div>
                  <div className="popup-probably__row-item">
                    <div className="popup-probably__row-item-top">HEX</div>
                    <div className="popup-probably__row-item-bottom">
                      As322sd15d1sfc5sdz1c5d
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup-probably__footer">
                <div className="popup-probably__footer-left">
                  For Instructions check
                </div>
                <div className="popup-probably__footer-right">
                  What is Probably Fair
                </div>
              </div>
            </div>
            <div className={classNames('popup-seed',
              popupSeed && 'active'
            )}>
              <div className="popup-seed__header">
                <div className="popup-seen__title">CHANGE SEED</div>
                <button type="button" className="popup-seed__close">
                  <svg
                    className="popup-validity__close-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                      d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z"></path>
                  </svg>
                </button>
              </div>
              <div className="popup-seed__body">
                <div className="popup-seed__new">
                  <div className="popup-seed__new-title">Enter New Seed:</div>
                  <div className="popup-seed__new-server">
                    As322sd15d1sfc5sdz1c5d1f51
                  </div>
                </div>
                <div className="popup-seed__random">
                  <button
                    type="button"
                    className="popup-seed__button popup-seed__random-button">
                    Random
                  </button>
                </div>
                <div className="popup-seed__bottom">
                  <button
                    type="button"
                    className="popup-seed__button popup-seed__save-button">
                    Save
                  </button>
                  <button
                    type="button"
                    className="popup-seed__button popup-seed__cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
};

