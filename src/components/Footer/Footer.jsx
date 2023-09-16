import React, {useState} from 'react';
import classNames from "classnames";
import leaderValidity from "../../assets/img/leader-validity.svg";

const Footer = () => {
  const [chatOpened, setChatOpened] = useState(false)
  const [coefficientOpened, setCoefficientOpened] = useState(false)

  return (
    <div className="main__bottom">
      <div className="coefficient">
        <div className="coefficient__list-field">
          <div className={classNames('coefficient__list',
            coefficientOpened && 'open'
          )}>
            <div className="coefficient__item wcolor-25">4.05x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
            <div className="coefficient__item wcolor-45">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-92">4.05x</div>
            <div className="coefficient__item wcolor-70">1.05x</div>
            <div className="coefficient__item wcolor-75">4.05x</div>
            <div className="coefficient__item wcolor-25">4.05x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
            <div className="coefficient__item wcolor-45">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-92">4.05x</div>
            <div className="coefficient__item wcolor-70">1.05x</div>
            <div className="coefficient__item wcolor-75">4.05x</div>
            <div className="coefficient__item wcolor-25">4.05x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
            <div className="coefficient__item wcolor-45">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
            <div className="coefficient__item wcolor-45">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
            <div className="coefficient__item wcolor-45">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-92">4.05x</div>
            <div className="coefficient__item wcolor-70">1.55x</div>
            <div className="coefficient__item wcolor-75">4.05x</div>
            <div className="coefficient__item wcolor-80">1.05x</div>
            <div className="coefficient__item wcolor-83">5.55x</div>
            <div className="coefficient__item wcolor-86">2x</div>
            <div className="coefficient__item wcolor-89">4.05x</div>
            <div className="coefficient__item wcolor-90">5.55x</div>
            <div className="coefficient__item wcolor-92">4.05x</div>
            <div className="coefficient__item wcolor-93">1.05x</div>
            <div className="coefficient__item wcolor-94">4.05x</div>
            <div className="coefficient__item wcolor-95">5.55x</div>
            <div className="coefficient__item wcolor-96">4.05x</div>
            <div className="coefficient__item wcolor-97">1.05x</div>
            <div className="coefficient__item wcolor-25">4.05x</div>
            <div className="coefficient__item wcolor-30">1.05x</div>
          </div>
          <div className="coefficient-right">
            <button type="button" className={classNames('coefficient__button',
              coefficientOpened && 'open'
            )} onClick={() => setCoefficientOpened(!coefficientOpened)}/>
          </div>
        </div>
      </div>
      <div className={classNames('chat',
        chatOpened && 'open'
      )}>
        <div className="chat__button" onClick={() => setChatOpened(!chatOpened)}>
          <div className="chat__button-icon">
                <span className="chat__button-icon-left">
                  <svg
                    className="chat__button-svg"
                    enableBackground="new 0 0 465.882 465.882"
                    height="512"
                    viewBox="0 0 465.882 465.882"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m232.941 0c-128.649 0-232.941 91.254-232.941 203.824 0 27.129 6.06 53.017 17.059 76.689 26.899 57.893 23.683 125.862-12.218 178.647-3.011 4.427-4.841 6.722-4.841 6.722s117.187-21.41 178.37-64.091c17.534 3.689 35.743 5.856 54.571 5.856 128.65 0 232.941-91.256 232.941-203.824 0-112.569-104.291-203.823-232.941-203.823z"/>
                  </svg>
                </span>
            <span className="chat__button-icon-right">Chat</span>
          </div>
          <div className="chat__button-online">
            <span className="chat__button-online-left">Online</span>
            <span className="chat__button-online-right">123</span>
          </div>
          <div className="chat__button-arrow">
            <svg
              className="chat__button-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 491.996 491.996">
              <path
                d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z"
              />
            </svg>
          </div>
        </div>
        <div className="chat__body">
          <div className="message__list">
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eaque facilis ipsam mollitia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eaque facilis ipsam mollitia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
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
                    <div className="message__share-bot-title-left">
                      Captain BOT
                    </div>
                    <div className="message__share-bot-title-right">
                      Best in this Round
                    </div>
                  </div>
                  <div className="message__share-bot-title">
                    <div className="message__share-bot-win-left">
                      With HUGE WIN!
                    </div>
                    <div className="message__share-bot-win-right">
                      A***12
                    </div>
                  </div>
                </div>
                <div className="message__share-bot-right">
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
              <div className="message__share-bottom">
                <div className="message__share-user">
                  <div className="message__user-photo"></div>
                  <div className="message__share-user-name">A***12</div>
                  <div className="message__share-user-validity">
                        <span className="validity__link-icon">
                          <img
                            src={leaderValidity}
                            alt="Validity Icon"
                            className="validity-icon-svg"
                          />
                        </span>
                  </div>
                </div>
                <div className="message__share-bet">
                  <div className="message__share-bet-left message__share-bet-left--width">
                    BET
                  </div>
                  <div className="message__share-bet-center message__share-bet-center--width">
                    X
                  </div>
                  <div className="message__share-bet-right">WIN</div>
                </div>
                <div className="message__share-odd">
                  <div className="message__share-odd-left message__share-bet-left--width">
                    $25.000
                  </div>
                  <div className="message__share-odd-center message__share-bet-center--width">
                    <span className="message__odd wcolor-50">8.0x</span>
                  </div>
                  <div className="message__share-bet-right">$200.000</div>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eaque facilis ipsam mollitia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">Hi howe are you ?</div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="message__item">
              <div className="message__user-photo"></div>
              <div className="message__field">
                <div className="message__user-name">A***21</div>
                <div className="message__body">
                  <div className="message__text">
                    Lorem ipsia natus, neque sunt.
                  </div>
                  <button
                    type="button"
                    className="message__like"
                    tabIndex="-1">
                        <span className="message__like-icon">
                          {' '}
                          <svg
                            className="message__like-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.23 18.43">
                            {' '}
                            <g className="cls-1">
                              <path
                                className="cls-2"
                                d="M2,8a2,2,0,0,0-2,2v6.41a2,2,0,0,0,2,2H4.41a2,2,0,0,0,1.2-.4V8Z"
                              />
                              <path
                                className="cls-2"
                                d="M19.23,11a1.78,1.78,0,0,0-.52-1.26,1.94,1.94,0,0,0,.51-1.53,2.07,2.07,0,0,0-2.09-1.82H12.18a11.32,11.32,0,0,0,.64-3.2c0-1.74-1.48-3.21-2.4-3.21A2.53,2.53,0,0,0,9,.49.4.4,0,0,0,8.81.8V3.52l-2.3,5-.1.05v8.59a5.39,5.39,0,0,0,2,.47h7.36a1.85,1.85,0,0,0,1.82-1.4,1.82,1.82,0,0,0-.15-1.2,1.81,1.81,0,0,0,1-1.61,1.71,1.71,0,0,0-.19-.8A1.78,1.78,0,0,0,19.23,11Z"
                              />
                            </g>
                          </svg>
                        </span>
                    <span className="message__like-count">120</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="message__write-field">
            <form className="message__write">
              <div className="message__write-top">
                <label className="message__write-label">
                      <textarea
                        className="message__write-textarea"
                        maxLength="160"
                        placeholder="Your Message"
                      />
                </label>
                <button type="submit" className="message__submit-button">
                  <svg
                    className="message__submit-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.96 13.63">
                    <path
                      className="cls-1"
                      d="M17.11,0H12.83a1.43,1.43,0,0,0-1.42,1.43h0a1.43,1.43,0,0,0,1.42,1.42H16A1.14,1.14,0,0,1,17.11,4V6a1.17,1.17,0,0,1-1.17,1.17H5.7L6.77,6.06a1.51,1.51,0,0,0,0-2.14h0a1.51,1.51,0,0,0-2.14,0L0,8.56l4.63,4.63a1.51,1.51,0,0,0,2.14,0h0a1.51,1.51,0,0,0,0-2.14L5.7,10H17.11A2.86,2.86,0,0,0,20,7.13V2.85A2.86,2.86,0,0,0,17.11,0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="message__write-bottom">
                <button
                  type="button"
                  className="message__write-bottom-button">
                  <svg
                    className="message__write-bottom-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.6 17.6">
                    <path
                      className="cls-1"
                      d="M12.89,7.56a.67.67,0,0,1-.68-.68.35.35,0,0,0-.35-.35.35.35,0,0,0-.34.35.69.69,0,0,1-1.38,0,1.72,1.72,0,0,1,3.44,0A.68.68,0,0,1,12.89,7.56ZM7.5,6.88a1.72,1.72,0,0,0-3.44,0,.69.69,0,0,0,1.37,0,.35.35,0,0,1,.35-.35.35.35,0,0,1,.34.35.69.69,0,0,0,1.38,0Zm5.86,9.46a.69.69,0,0,0-.72-1.18A7.5,7.5,0,1,1,15,12.92a.69.69,0,1,0,1.14.77A8.8,8.8,0,0,0,2.58,2.58,8.81,8.81,0,0,0,13.36,16.34ZM11.76,10a.69.69,0,0,0-.55.27,3.51,3.51,0,0,1-4.82,0A.65.65,0,0,0,5.85,10a.68.68,0,0,0-.69.68.69.69,0,0,0,.21.5A4.79,4.79,0,0,0,8.8,12.62a4.74,4.74,0,0,0,3.43-1.43.7.7,0,0,0,.22-.5A.68.68,0,0,0,11.76,10Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="message__write-bottom-button">
                  <svg
                    className="message__write-bottom-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.29 17.29">
                    <g className="cls-1">
                      <path
                        className="cls-2"
                        d="M5,7c.43,0,.53.2.55.53,0,.15.09.49.67.49.29,0,.68-.07.68-.65,0-1-.78-1.6-1.94-1.6A1.7,1.7,0,0,0,3.12,7.63v2A1.72,1.72,0,0,0,5,11.52,1.72,1.72,0,0,0,6.93,9.65V8.79a.49.49,0,0,0-.5-.5H5.27a.51.51,0,0,0-.49.57.53.53,0,0,0,.49.57h.31v.22c0,.57-.32.63-.56.63s-.55-.07-.55-.63v-2C4.47,7.08,4.77,7,5,7Z"
                      />
                      <path
                        className="cls-2"
                        d="M8.67,5.77c-.41,0-.68.2-.68.49V11c0,.3.28.5.68.5s.67-.21.67-.5V6.26C9.34,6,9.07,5.77,8.67,5.77Z"
                      />
                      <path
                        className="cls-2"
                        d="M11.14,5.77a.55.55,0,0,0-.61.5V11c0,.3.27.5.67.5s.67-.21.67-.5V9.19h.91a.51.51,0,0,0,.49-.56.52.52,0,0,0-.49-.58h-.91V7h1.8c.29,0,.49-.25.49-.62s-.2-.61-.49-.61Z"
                      />
                      <path
                        className="cls-2"
                        d="M8.64,0a8.65,8.65,0,1,0,8.65,8.64A8.66,8.66,0,0,0,8.64,0Zm0,15.94a7.3,7.3,0,1,1,7.3-7.3A7.31,7.31,0,0,1,8.64,15.94Z"
                      />
                    </g>
                  </svg>
                </button>
                <div className="message__write-count">160</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
