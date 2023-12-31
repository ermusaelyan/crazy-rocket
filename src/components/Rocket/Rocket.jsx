import React, {useState} from 'react';
import classNames from "classnames";
import avatar1 from "../../assets/img/avatars/1.png";

export const Rocket = ({startGame, setStartGame, popupAvatars, setPopupAvatars}) => {
  const [secondTicket, setSecondTicket] = useState(false)

  return (
    <div className="wrapper ">
      <div className="rocket__coefficient-field">
        <div className="rocket__coefficient">
                <span className="rocket__coefficient-win">
                  Congratulations to winners
                </span>
          <span className="rocket__coefficient-background wcolor-5"/>
          <span className="rocket__coefficient-count">4.55</span>
          <span className="rocket__coefficient-x">x</span>
        </div>
      </div>
      <div className="console-background--z1"/>
      <div className="console-background--z2"/>
      <div className="rocket">
        <div className="rocket__time-field">
          <div className="rocket__time"/>
        </div>
        <div className="rocket__garage"/>
        <div className="rocket__inner"></div>
      </div>
      <div className="console__field">
        <div className={classNames('console',
          'console-first',
          secondTicket && 'active')}>
          <div className="console__settings">
            <div className="console-top">
              <div className="console-top__circle-field">
                <div className="console-top__circle">
                  <div className="console-top__arrow-field">
                    <div className="console-top__arrow">
                      <span className="console-top__arrow-top"/>
                      <span className="console-top__arrow-bottom"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="console-top__next-round">
                <svg
                  className="console-top__next-round-svg"
                  xmlns="http://www.w3.org/2000/svg"
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
                  <input
                    type="text"
                    className="circle__input"
                    autoFocus
                  />
                  <span className="circle__letters-field">
                          <span className="circle__letters"/>
                        </span>
                </label>
                <button type="button" className="console__buttons-minus">
                  {' '}
                  <span className="console__buttons-tooltip">
                          <span className="console__buttons-tooltip-inner">
                            Min 20
                          </span>
                        </span>
                  <span className="console__buttons-minus-line"/>
                </button>
                <button type="button" className="console__buttons-plus">
                        <span className="console__buttons-tooltip">
                          <span className="console__buttons-tooltip-inner">
                            Max 200.000
                          </span>
                        </span>
                  <span className="console__buttons-minus-line"/>
                  <span className="console__buttons-minus-line console__button-plus-line"/>
                </button>
              </div>
              <div className="console__buttons-bottom">
                <button
                  type="button"
                  className="odd-button odd-button-first">
                  <span className="odd-button-first1">1</span>
                  <span className="odd-button-first2">0</span>
                  <span className="odd-button-first3">0</span>
                </button>
                <button
                  type="button"
                  className="odd-button odd-button-second">
                  <span className="odd-button-second1">2</span>
                  <span className="odd-button-second2">0</span>
                  <span className="odd-button-second3">0</span>
                </button>
                <button
                  type="button"
                  className="odd-button odd-button-third">
                  <span className="odd-button-third1">5</span>
                  <span className="odd-button-third2">0</span>
                  <span className="odd-button-third3">0</span>
                </button>
              </div>
            </div>
            <div className="console__settings-left">
              <div className="console-switchers">
                <div className="console-switchers__type">
                  <div className="console-switchers__type-item active ">
                    Classic
                  </div>
                  <div className="console-switchers__type-item console-switcher-auto">
                    Auto
                  </div>
                </div>
                <div className="console-switchers__auto">
                  <div className="console-switchers-list">
                    <div className="console-switchers-list">
                      <div className="switch__title">Auto Game</div>
                      <label className="switch__label">
                        <input
                          type="checkbox"
                          className="switch__input"
                          disabled=""
                        />
                        <span className="switch__slider"/>
                      </label>
                    </div>
                    <div className="console-switchers-list">
                      <div className="switch__title">Qashout</div>
                      <label className="switch__label">
                        <input
                          type="checkbox"
                          className="switch__input switch__input-qashout"
                          disabled=""
                        />
                        <span className="switch__slider"/>
                        <input
                          type="text"
                          className="switch__price-input"
                          value="1000"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="console__bet">
              <button type="button" className={classNames('console__bet-button', startGame && 'push')}
                      onClick={() => setStartGame(true)}>
                      <span className="console__bet-button-qashout">
                        <span className="console__bet-button-qashout-top">
                          7777777
                        </span>
                        <span className="console__bet-button-qashout-bottom">
                          QASHOUT
                        </span>
                      </span>
                <span className="console__bet-button-text"> BET</span>
                <span className="lds-spinner">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                      </span>
              </button>
              <span className={classNames('console__bet-button-layer', startGame && 'push')}/>
            </div>
            <div className="console__settings-right">
              <button className="add-ticket__button" onClick={() => setSecondTicket(true)}/>
              <div className="add-ticket__text">
                <span className="add-ticket__text-add">Add Ticket</span>
                <span className="add-ticket__text-delete">Delete</span>
              </div>
            </div>
          </div>
          <div className="console__notification">
            Your Bet is accepted!
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
                      <span className="console-top__arrow-top"/>
                      <span className="console-top__arrow-bottom"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="console-top__next-round">
                <svg
                  className="console-top__next-round-svg"
                  xmlns="http://www.w3.org/2000/svg"
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
                  <input
                    type="text"
                    className="circle__input"
                    autoFocus
                  />
                  <span className="circle__letters-field">
                          <span className="circle__letters"/>
                        </span>
                </label>
                <button type="button" className="console__buttons-minus">
                  <span className="console__buttons-minus-line"/>
                </button>
                <button type="button" className="console__buttons-plus">
                  <span className="console__buttons-minus-line"/>
                  <span className="console__buttons-minus-line console__button-plus-line"/>
                </button>
              </div>
              <div className="console__buttons-bottom">
                <button
                  type="button"
                  className="odd-button odd-button-first">
                  <span className="odd-button-first1">1</span>
                  <span className="odd-button-first2">0</span>
                  <span className="odd-button-first3">0</span>
                </button>
                <button
                  type="button"
                  className="odd-button odd-button-second">
                  <span className="odd-button-second1">2</span>
                  <span className="odd-button-second2">0</span>
                  <span className="odd-button-second3">0</span>
                </button>
                <button
                  type="button"
                  className="odd-button odd-button-third">
                  <span className="odd-button-third1">5</span>
                  <span className="odd-button-third2">0</span>
                  <span className="odd-button-third3">0</span>
                </button>
              </div>
            </div>
            <div className="console__settings-left">
              <div className="console-switchers">
                <div className="console-switchers__auto">
                  <div className="console-switchers-list">
                    <div className="console-switchers-list">
                      <div className="switch__title">Auto Bet</div>
                      <label className="switch__label">
                        <input
                          type="checkbox"
                          className="switch__input"
                        />
                        <span className="switch__slider"/>
                      </label>
                    </div>
                    <div className="console-switchers-list">
                      <div className="switch__title">Auto Cashout</div>
                      <label className="switch__label">
                        <input
                          type="checkbox"
                          className="switch__input switch__input-qashout"
                        />
                        <span className="switch__slider"/>
                        <input
                          type="text"
                          className="switch__price-input"
                          value="1000"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="console__bet">
              <button type="button" className="console__bet-button">
                      <span className="console__bet-button-qashout">
                        <span className="console__bet-button-qashout-top">
                          7777777
                        </span>
                        <span className="console__bet-button-qashout-bottom">
                          QASHOUT
                        </span>
                      </span>
                <span className="console__bet-button-text"> BET</span>
                <span className="lds-spinner">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
              </button>
              <span className="console__bet-button-layer"/>
            </div>
            <div className="console__settings-right">
              <button className="add-ticket__button" onClick={() => setSecondTicket(false)}/>
              <div className="add-ticket__text">
                <span className="add-ticket__text-add">Add Ticket</span>
                <span className="add-ticket__text-delete">Delete</span>
              </div>
            </div>
          </div>
          <div className="console__notification">
            Your Bet is accepted!
          </div>
        </div>
        <div className="console__bottom-field">
          <div className="console__bottom" onClick={() => setPopupAvatars(!popupAvatars)}>
            <div className="popup-avatars__item selected console__avatar">
              <div className="popup-avatars__photo ">
                <img src={avatar1} alt="avatar" className="avatars-img"/>
              </div>
            </div>
            <div className="console__bottom-id">ID: 12345678</div>
            <div className="console__bottom-price">$100.000</div>
            <div className="console__bottom-steps">
              <div className="console__bottom-steps-active"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
