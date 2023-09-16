import React, {useEffect, useMemo, useState} from 'react';
import logo from "../../assets/img/logo.svg";
import classNames from "classnames";
import avatar from "../../assets/img/avatar-img.png";
import previous from "../../assets/img/previous.svg";
import {Link} from "react-router-dom";

export const Menu = ({demo}) => {
  useEffect(() => {
    if (demo) {
      setMenuIndex(null)
    }
  }, [demo])
  const [menuIndex, setMenuIndex] = useState(1)
  const [gamePrevious, setGamePrevious] = useState(false)
  return (
    <aside className={classNames('left-menu',
      demo && "left-menu_demo")}>
      <header className={classNames('header',
        demo && "header_demo")}>
        <div className="header__logo">
          <Link to={'/game'} className="header__logo-link">
            <img src={logo} alt="Logo" className="header__logo-img"/>
          </Link>
        </div>
        <div className="header__menu">
          <ul className="menu__list">
            <li className="menu__item">
              <button className={classNames("menu__link",
                menuIndex === 1 && 'active'
              )}
                      onClick={() => setMenuIndex(1)}
              >
                  <span className="menu__icon">
                    <span className="menu__icon-bets ">
                      <svg
                        className="menu__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.45 12.3">
                        <path
                          className="cls-1"
                          d="M15.82,6.15a3.64,3.64,0,0,1,3.63-3.63V0H0V2.52A3.64,3.64,0,0,1,3.63,6.15,3.64,3.64,0,0,1,0,9.78V12.3H19.45V9.78a3.64,3.64,0,0,1-3.63-3.63"
                        />
                      </svg>
                    </span>
                  </span>
                <span className="menu__text">MY BETS</span>
              </button>
            </li>
            <li className="menu__item">
              <button className={classNames("menu__link",
                menuIndex === 2 && 'active'
              )}
                      onClick={() => setMenuIndex(2)}
              >
                  <span className="menu__icon">
                    <span className="menu__icon-game">
                      <svg
                        className="menu__icon-svg menu__icon-game"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10.45 15.07">
                        <path
                          className="cls-1"
                          d="M9.88,8.72l-7.39,6A1.53,1.53,0,0,1,0,13.55v-12A1.53,1.53,0,0,1,2.49.34l7.39,6a1.53,1.53,0,0,1,0,2.37"
                        />
                      </svg>
                    </span>
                  </span>
                <span className="menu__text">GAME</span>
              </button>
            </li>
            <li className="menu__item">
              <button className={classNames("menu__link",
                menuIndex === 3 && 'active'
              )}
                      onClick={() => setMenuIndex(3)}
              >
                  <span className="menu__icon">
                    <span className="menu__icon-leaders">
                      <svg
                        className="menu__icon-svg menu__icon-leaders"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.22 16.92">
                        <polygon
                          className="cls-1"
                          points="13.11 10.67 10.11 1.63 7.11 10.67 0 6.23 4.37 16.92 10.11 16.92 15.85 16.92 20.22 6.23 13.11 10.67"
                        />
                        <path
                          className="cls-1"
                          d="M12.47,2.36A2.36,2.36,0,1,1,10.11,0a2.36,2.36,0,0,1,2.36,2.36"
                        />
                      </svg>
                    </span>
                  </span>
                <span className="menu__text">LEADERS</span>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="menu-types-wrapper ">
        {demo
          ? <div className="when-demo">
            <div className="when-demo__text">You are Playing Demo Version</div>
            <Link to={'/game'} className="when-demo__link">
              Play Real Game
            </Link>
          </div>

          : <div className="menu-types">
            <ul className="menu-types__list">
              <li className={classNames('menu-types__item',
                'my-bets',
                menuIndex === 1 && 'active'
              )}>
                <div className="my-bets__list">
                  <div className="my-bets__item my-bets__item--main">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-icon">
                            <svg
                              className="my-bets__head-id-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 10.45 15.07">
                              <title>game</title>
                              <path
                                className="cls-1"
                                d="M9.88,8.72l-7.39,6A1.53,1.53,0,0,1,0,13.55v-12A1.53,1.53,0,0,1,2.49.34l7.39,6a1.53,1.53,0,0,1,0,2.37"
                              />
                            </svg>
                          </span>
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item my-bets__inner-item--green">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd ">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                      <div className="my-bets__inner-item my-bets__inner--empty">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $10.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd ">- - -</div>
                        <div className="my-bets__inner-win ">
                          <div className="my-bets__inner-win-left">Loss</div>
                          <div className="my-bets__inner-win-right ">
                            {' '}
                            - - - - - -
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-2">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor13">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">15:40</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor14">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                      <div className="my-bets__inner-item my-bets__inner--empty">
                        <div className="my-bets__inner-bet ">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor18  ">
                          - - -
                        </div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">Loss</div>
                          <div className="my-bets__inner-win-right ">
                            {' '}
                            - - - - - -
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $15.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor25">5.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $7.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor31">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item my-bets__inner--empty">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $17.0000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-5 ">
                          - - -
                        </div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">Loss</div>
                          <div className="my-bets__inner-win-right">
                            - - - - - -
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-6">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-7">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-8">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-9">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor-10">
                          9.00x
                        </div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-bets__item">
                    <div className="my-bets__head">
                      <div className="my-bets__head-left">
                        <div className="my-bets__head-id">
                          <span className="my-bets__head-id-text">
                            ID: 123456789
                          </span>
                        </div>
                        <div className="my-bets__head-time my-bets__head-time--line">
                          18:50
                        </div>
                        <div className="my-bets__head-time  ">18:50</div>
                      </div>
                      <div className="my-bets__head-right">
                        <div className="validity__icon"></div>
                      </div>
                    </div>
                    <div className="my-bets__inner-list ">
                      <div className="my-bets__inner-item ">
                        <div className="my-bets__inner-bet">
                          <div className="my-bets__inner-bet-left">BET</div>
                          <div className="my-bets__inner-bet-right">
                            $25.000
                          </div>
                        </div>
                        <div className="my-bets__inner-odd wcolor11">9.00x</div>
                        <div className="my-bets__inner-win">
                          <div className="my-bets__inner-win-left">WIN</div>
                          <div className="my-bets__inner-win-right">
                            $777.000.000
                          </div>
                        </div>
                        <div className="my-bets__inner-icon">
                          <button type="button" className="chat-share"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={classNames('menu-types__item',
                'game',
                menuIndex === 2 && 'active'
              )}>
                <div className="game-head">
                  <div className="game-head__gamers game__gamers--width">
                    <div className="game-head__gamers-text">GAMERS</div>
                    <div className="game-head__gamers-number">216</div>
                  </div>
                  <div className="game-head__bet game__bet--width">BET</div>
                  <div className="game-head__odd game__odd--width">X</div>
                  <div className="game-head__win game__win--width">WIN</div>
                </div>
                <div className="game__list">
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number ">A**d*1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width wcolor15">
                      8.00x
                    </div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$144.000</div>
                    <div className="game__odd game__odd--width wcolor-13">
                      5.00x
                    </div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers  game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$250.0.000</div>
                    <div className="game__odd game__odd--width">4.00x</div>
                    <div className="game__win game__win--width">$317.000</div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width game__odd--laurel">
                      7.00
                    </div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width">8.00x</div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $30.000.000
                    </div>
                    <div className="game__odd game__odd--width">- - -</div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$450.000</div>
                    <div className="game__odd game__odd--width wcolor-20">
                      10.00x
                    </div>
                    <div className="game__win game__win--width">
                      $100.000.00
                    </div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $10.000.000
                    </div>
                    <div className="game__odd game__odd--width  wcolor-21">
                      5.00x
                    </div>
                    <div className="game__win game__win--width">
                      $517.000.000
                    </div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number ">A**d*1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width wcolor-22">
                      8.00x
                    </div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$144.000</div>
                    <div className="game__odd game__odd--width wcolor-23">
                      5.00x
                    </div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers  game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$250.0.000</div>
                    <div className="game__odd game__odd--width">4.00x</div>
                    <div className="game__win game__win--width">$317.000</div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width game__odd--laurel">
                      7.00
                    </div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width">8.00x</div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $30.000.000
                    </div>
                    <div className="game__odd game__odd--width">- - -</div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$450.000</div>
                    <div className="game__odd game__odd--width wcolor-24">
                      10.00x
                    </div>
                    <div className="game__win game__win--width">
                      $100.000.00
                    </div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $10.000.000
                    </div>
                    <div className="game__odd game__odd--width  wcolor-25">
                      5.00x
                    </div>
                    <div className="game__win game__win--width">
                      $517.000.000
                    </div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers  game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$250.0.000</div>
                    <div className="game__odd game__odd--width">4.00x</div>
                    <div className="game__win game__win--width">$317.000</div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width game__odd--laurel">
                      7.00
                    </div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $250.000.000
                    </div>
                    <div className="game__odd game__odd--width">8.00x</div>
                    <div className="game__win game__win--width">$517.000</div>
                  </div>
                  <div className="game__item game__item">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $30.000.000
                    </div>
                    <div className="game__odd game__odd--width">- - -</div>
                    <div className="game__win game__win--width game__win--empty">
                      - - - -
                    </div>
                  </div>
                  <div className="game__item game__item--light">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">$450.000</div>
                    <div className="game__odd game__odd--width wcolor-26">
                      10.00x
                    </div>
                    <div className="game__win game__win--width">
                      $100.000.00
                    </div>
                  </div>
                  <div className="game__item ">
                    <div className="game__gamers game__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="game__bet game__bet--width">
                      $10.000.000
                    </div>
                    <div className="game__odd game__odd--width  wcolor-27">
                      5.00x
                    </div>
                    <div className="game__win game__win--width">
                      $517.000.000
                    </div>
                  </div>
                </div>
                <div className={classNames('game__previous',
                  gamePrevious && 'opened')}>
                  <div className="game__previous-button" onClick={() => setGamePrevious(!gamePrevious)}>
                    <div className="game__previous-center">
                      <div className="game__previous-icon">
                        <img
                          src={previous}
                          className="game__previous-icon-img"
                          alt="icon"
                        />
                      </div>
                      <div className="game__previous-text"> Previous Game</div>
                    </div>
                    <div className="game__previous-arrow">
                      <svg
                        className="game__previous-svg"
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
                  <div className="game__previous-main">
                    <div className="game__previous-title">
                      <span className="game__previous-id">ID: 1238554620</span>
                      <span className="game__previous-time">15:35</span>
                    </div>
                    <div className="game__list">
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number ">A**d*1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-28">
                          8.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $144.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-29">
                          5.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item ">
                        <div className="game__gamers  game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.0.000
                        </div>
                        <div className="game__odd game__odd--width">4.00x</div>
                        <div className="game__win game__win--width">
                          $317.000
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width game__odd--laurel">
                          7.00
                        </div>
                        <div className="game__win game__win--width game__win--empty">
                          - - - -
                        </div>
                      </div>
                      <div className="game__item game__item">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width">8.00x</div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item game__item">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $30.000.000
                        </div>
                        <div className="game__odd game__odd--width">- - -</div>
                        <div className="game__win game__win--width game__win--empty">
                          - - - -
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $450.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-30">
                          10.00x
                        </div>
                        <div className="game__win game__win--width">
                          $100.000.00
                        </div>
                      </div>
                      <div className="game__item ">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $10.000.000
                        </div>
                        <div className="game__odd game__odd--width  w31">
                          5.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000.000
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number ">A**d*1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-32">
                          8.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $144.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-34">
                          5.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item ">
                        <div className="game__gamers  game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.0.000
                        </div>
                        <div className="game__odd game__odd--width">4.00x</div>
                        <div className="game__win game__win--width">
                          $317.000
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-35">
                          7.00
                        </div>
                        <div className="game__win game__win--width game__win--empty">
                          - - - -
                        </div>
                      </div>
                      <div className="game__item game__item">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $250.000.000
                        </div>
                        <div className="game__odd game__odd--width">8.00x</div>
                        <div className="game__win game__win--width">
                          $517.000
                        </div>
                      </div>
                      <div className="game__item game__item">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $30.000.000
                        </div>
                        <div className="game__odd game__odd--width">- - -</div>
                        <div className="game__win game__win--width game__win--empty">
                          - - - -
                        </div>
                      </div>
                      <div className="game__item game__item--light">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $450.000
                        </div>
                        <div className="game__odd game__odd--width wcolor-36">
                          10.00x
                        </div>
                        <div className="game__win game__win--width">
                          $100.000.00
                        </div>
                      </div>
                      <div className="game__item ">
                        <div className="game__gamers game__gamers--width">
                          <div className="game__gamers-photo">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="avatars-img"
                            />
                          </div>
                          <div className="game__gamers-number">A***1</div>
                        </div>
                        <div className="game__bet game__bet--width">
                          $10.000.000
                        </div>
                        <div className="game__odd game__odd--width  wcolor-36">
                          5.00x
                        </div>
                        <div className="game__win game__win--width">
                          $517.000.000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={classNames('menu-types__item',
                'leaders',
                menuIndex === 3 && 'active'
              )}>
                <div className="leaders-head">
                  <div className="leaders-head__gamers leaders__gamers--width">
                    <div className="leaders-head__gamers-text">GAMERS</div>
                  </div>
                  <div className="leaders-head__bet leaders__bet--width">
                    BET
                  </div>
                  <div className="leaders-head__odd leaders__odd--width">X</div>
                  <div className="leaders-head__win leaders__win--width">
                    WIN
                  </div>
                  <div className="leaders-head__icons leaders__icons--width"></div>
                </div>
                <div className="leaders__list">
                  <div className="leaders__item leaders__item--first leader-icon">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-37">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.0d00
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"></div>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item leaders__item--second leader-icon">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-38">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item leaders__item--third leader-icon">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***5</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-39">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***11</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-40">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***21</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-45">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A**31</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-49">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $1500
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***2</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-50">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-53">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"></div>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-56">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***5</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-59">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***11</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-60">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***21</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-63">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A**31</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-68">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $1500
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***2</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-70">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-74">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"></div>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A**31</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-79">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $1500
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***21</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-83">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A**31</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-87">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $1500
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***2</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-89">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $15.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A***1</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-90">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $517.000
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"></div>
                      <button type="button" className="chat-share"/>
                    </div>
                  </div>
                  <div className="leaders__item ">
                    <div className="leaders__gamers leaders__gamers--width">
                      <div className="game__gamers-photo">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatars-img"
                        />
                      </div>
                      <div className="game__gamers-number">A**31</div>
                    </div>
                    <div className="leaders__bet leaders__bet--width">
                      $250.000
                    </div>
                    <div className="leaders__odd leaders__odd--width wcolor-94">
                      100x
                    </div>
                    <div className="leaders__win leaders__win--width">
                      $1500
                    </div>
                    <div className="leaders__icons leaders__icons--width">
                      <div className="validity__icon"/>
                      <button type="button" className="chat-share "/>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        }
        <div className="tooltip">
          <div className="tooltip__field">Share in Chat</div>
        </div>
      </div>
    </aside>

  );
};
