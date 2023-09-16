import React, {useState} from 'react';
import classNames from "classnames";

const Controllers = () => {
  const [settingsBody, setSettingsBody] = useState(false)

  return (
    <div>
      <div className="main__head-right">
        <button type="button" className="settings settings-sound">
          <svg
            className="sound-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15.62 12.07">
            <title>sound</title>
            <g className="cls-2">
              <g className="cls-3">
                <path
                  className="cls-4"
                  d="M9.1,0A6,6,0,0,0,4,2.8H1.7A1.7,1.7,0,0,0,0,4.5V7.57a1.7,1.7,0,0,0,1.7,1.7H4a6,6,0,0,0,5.1,2.8.44.44,0,0,0,.43-.44V.44A.44.44,0,0,0,9.1,0"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M11.24,2.67a.44.44,0,0,0-.61.11.43.43,0,0,0,.11.6,3.23,3.23,0,0,1,0,5.31.44.44,0,0,0-.11.61.44.44,0,0,0,.36.19.49.49,0,0,0,.25-.08,4.11,4.11,0,0,0,0-6.74"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M12.92.87a.44.44,0,0,0-.61.11.43.43,0,0,0,.11.6,5.42,5.42,0,0,1,0,8.91.43.43,0,0,0-.11.6.41.41,0,0,0,.36.19.46.46,0,0,0,.25-.08,6.29,6.29,0,0,0,0-10.33"
                  transform="translate(0)"
                />
              </g>
            </g>
          </svg>
        </button>
        <button type="button" className="settings">
          <svg
            className="music-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10.82 15.62">
            <title>Vector Smart Object16</title>
            <g className="cls-2">
              <g className="cls-3">
                <path
                  className="cls-4"
                  d="M9.94,9.93a6.39,6.39,0,0,0,.87-2.85,4,4,0,0,0-.42-2A5.56,5.56,0,0,0,8.23,3a6.23,6.23,0,0,1-1.6-1.35l-.07-.1A2.82,2.82,0,0,1,6,.52.6.6,0,0,0,5.36,0a.59.59,0,0,0-.55.6V11.31a3.47,3.47,0,0,0-1.8-.5c-1.66,0-3,1.08-3,2.4a2.76,2.76,0,0,0,3,2.41,2.76,2.76,0,0,0,3-2.41v-7A4.32,4.32,0,0,1,8.79,9.49a3.88,3.88,0,0,1-.23.33.6.6,0,0,0,.9.79A4.61,4.61,0,0,0,9.9,10l0-.06"
                />
              </g>
            </g>
          </svg>
        </button>
        <button type="button" className="settings">
          <svg
            className="rocket-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15.86 15.86">
            <title>Vector Smart Object17</title>
            <g className="cls-2">
              <g className="cls-3">
                <path
                  className="cls-4"
                  d="M2.32,10.16a.47.47,0,0,0,.08.54l.12.11c.32-.38.71-.81,1.17-1.27l.1-.08-.73-.73c-.43.77-.67,1.29-.74,1.43"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M6.32,12.17c-.47.46-.89.85-1.27,1.17l.15.16a.45.45,0,0,0,.54.08c.24-.12.62-.3,1.42-.75l-.76-.76-.08.1"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M6.07,9.79c-.33-.34-1.28,0-1.72.41a12.21,12.21,0,0,0-2.46,3.15.47.47,0,0,0,.09.53.46.46,0,0,0,.53.09,12.24,12.24,0,0,0,3.15-2.46c.49-.49.73-1.4.41-1.72Z"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M1.45,6.19.14,7.5a.47.47,0,0,0-.08.56.48.48,0,0,0,.52.22,3.8,3.8,0,0,1,1.76-.16A24.87,24.87,0,0,1,4.26,5.18c-.39-.25-1.69-.11-2.81,1"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M7.87,15.81a.44.44,0,0,0,.53-.09l1.32-1.31a2.93,2.93,0,0,0,1-2.75,26.9,26.9,0,0,1-2.93,1.91,5.76,5.76,0,0,1-.14,1.76.46.46,0,0,0,.26.48"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M15.83.45A.46.46,0,0,0,15.4,0,9.34,9.34,0,0,0,12,.42a3.92,3.92,0,0,0,1.16,2.27,3.86,3.86,0,0,0,2.31,1.15A9.62,9.62,0,0,0,15.83.45"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M12.51,3.35A5,5,0,0,1,11.11.74,16.89,16.89,0,0,0,3.54,7.9l1,1a2,2,0,0,1,2.14.18,2,2,0,0,1,.18,2.14L8,12.35c2.71-1.63,5.85-4.19,7.19-7.6a4.91,4.91,0,0,1-2.67-1.4"
                  transform="translate(0)"
                />
              </g>
            </g>
          </svg>
        </button>
        <button type="button" className="settings">
          <svg
            className="resize-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.06 13.89">
            <title>Vector Smart Object18</title>
            <g className="cls-2">
              <g className="cls-3">
                <path
                  className="cls-4"
                  d="M.06,4.75,0,.4A.4.4,0,0,1,.4,0L4.75.06A.4.4,0,0,1,5,.74L3.82,2l2,2L4,5.83l-2-2L.73,5a.4.4,0,0,1-.67-.28"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M12.11,3.84l1.22,1.21A.39.39,0,0,0,14,4.78L14.06.43a.4.4,0,0,0-.4-.4L9.31.09A.39.39,0,0,0,9,.76L10.24,2l-2,2L10.1,5.85Z"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M9,13.16a.4.4,0,0,0,.28.67l4.35.06a.39.39,0,0,0,.4-.4L14,9.14a.4.4,0,0,0-.68-.27l-1.21,1.21-2-2L8.23,9.94l2,2Z"
                  transform="translate(0)"
                />
                <path
                  className="cls-4"
                  d="M.4,13.86l4.35-.06A.4.4,0,0,0,5,13.13L3.82,11.92l2-2L4,8l-2,2L.73,8.84a.39.39,0,0,0-.67.27L0,13.47a.39.39,0,0,0,.4.39"
                  transform="translate(0)"
                />
              </g>
            </g>
          </svg>
        </button>
        <div className={classNames('settings__field',
          settingsBody && 'active'
        )}>
          <button type="button" className="settings settings-burger "
                  onClick={() => setSettingsBody(!settingsBody)}>
            <span className="burger-first"/>
            <span className="burger-second"/>
            <span className="burger-third"/>
          </button>
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
                <div className="settings__main">
                  <div className="provably-fair">
                    <div className="provably-fair__title">
                      Provably Fair Settings
                    </div>
                    <div className="provably-fair__question">
                      What is Probably Fair?
                    </div>
                    <div className="provably-fair__answer">
                      This game uses Provably Fair technology to determine
                      game result. This tool gives you ability to change
                      your seed and check fairness of the game.
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
                          Next Client (your) side:
                        </div>
                        <div className="provably-fair__center-text">
                          Round result is determined form combination of
                          server seed and first 3 bets of the round.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="settings__hash">
                  <div className="settings__hash-item">
                    <label className="settings__hash-label">
                      <input
                        type="radio"
                        name="radio"
                        className="settings__hash-input"
                      />
                      <span className="settings__hash-radio"/>
                      <span className="settings__hash-radio-text">
                            Random on every New Game
                          </span>
                    </label>
                    <div className="settings__hash-bottom">
                      <label className="settings__hash-bottom-text">
                            <span className="settings__hash-current">
                              Current
                            </span>
                        <input
                          className="settings__hash-code"
                          value="As322sd15d1sfc5sdz1c5d"
                          readOnly
                        />
                        <button
                          type="button"
                          className="settings__hash-copy">
                          <svg
                            className="settings__hash-copy-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17.06 20.37">
                            <path
                              d="M13.17.25H4.56A1.66,1.66,0,0,0,2.9,1.91v1h-1A1.66,1.66,0,0,0,.25,4.56V18.47a1.65,1.65,0,0,0,1.66,1.65H12.5a1.65,1.65,0,0,0,1.66-1.65v-1h1a1.65,1.65,0,0,0,1.66-1.65V3.89a.3.3,0,0,0-.1-.23L13.4.35A.3.3,0,0,0,13.17.25Zm.33,18.22a1,1,0,0,1-1,1H1.91a1,1,0,0,1-1-1V4.56a1,1,0,0,1,1-1h8.28V5.22a1.65,1.65,0,0,0,1.65,1.65H13.5ZM10.85,5.22V4L13,6.21H11.84A1,1,0,0,1,10.85,5.22Zm5.3,10.6a1,1,0,0,1-1,1h-1V6.54a.29.29,0,0,0-.1-.23L10.75,3a.29.29,0,0,0-.23-.1h-7v-1a1,1,0,0,1,1-1h8.28V2.57a1.65,1.65,0,0,0,1.65,1.65h1.66ZM13.5,1.38l2.18,2.18H14.49a1,1,0,0,1-1-1Z"
                              stroke="rgba(var(--rocket-gray2),1)"
                              strokeMiterlimit="10"
                              strokeWidth="0.8"
                            />
                          </svg>
                        </button>
                      </label>
                    </div>
                  </div>
                  <div className="settings__hash-item">
                    <label className="settings__hash-label">
                      <input
                        type="radio"
                        name="radio"
                        className="settings__hash-input"
                      />
                      <span className="settings__hash-radio"/>
                      <span className="settings__hash-radio-text">
                            Enter Manually
                          </span>
                    </label>
                    <div className="settings__hash-bottom">
                      <label className="settings__hash-bottom-text settings__hash-bottom-text--change">
                            <span className="settings__hash-current">
                              Current
                            </span>
                        <input
                          className="settings__hash-code"
                          value="As322sd15d1sfc5sdz1c5d"
                          readOnly
                        />
                        <button
                          type="button"
                          className="settings__hash-copy">
                          <svg
                            className="settings__hash-copy-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17.06 20.37">
                            <path
                              d="M13.17.25H4.56A1.66,1.66,0,0,0,2.9,1.91v1h-1A1.66,1.66,0,0,0,.25,4.56V18.47a1.65,1.65,0,0,0,1.66,1.65H12.5a1.65,1.65,0,0,0,1.66-1.65v-1h1a1.65,1.65,0,0,0,1.66-1.65V3.89a.3.3,0,0,0-.1-.23L13.4.35A.3.3,0,0,0,13.17.25Zm.33,18.22a1,1,0,0,1-1,1H1.91a1,1,0,0,1-1-1V4.56a1,1,0,0,1,1-1h8.28V5.22a1.65,1.65,0,0,0,1.65,1.65H13.5ZM10.85,5.22V4L13,6.21H11.84A1,1,0,0,1,10.85,5.22Zm5.3,10.6a1,1,0,0,1-1,1h-1V6.54a.29.29,0,0,0-.1-.23L10.75,3a.29.29,0,0,0-.23-.1h-7v-1a1,1,0,0,1,1-1h8.28V2.57a1.65,1.65,0,0,0,1.65,1.65h1.66ZM13.5,1.38l2.18,2.18H14.49a1,1,0,0,1-1-1Z"
                              stroke="rgba(var(--rocket-gray2),1)"
                              strokeMiterlimit="10"
                              strokeWidth="0.8"
                            />
                          </svg>
                        </button>
                      </label>
                      <button
                        type="button"
                        className="settings__hash-bottom-change">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
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
                    <div className="settings__server-text">
                      Next Server Seed
                    </div>
                    <div className="settings__server-text--bold">
                      SHA256
                    </div>
                  </div>
                </div>
                <div className="settings__server-name">
                  As322sd15d1sfc5sdz1c5d1f514ewa5s14fg5
                </div>
                <div className="settings__server-bottom">
                  You can check fairness of each bet from bets history
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
