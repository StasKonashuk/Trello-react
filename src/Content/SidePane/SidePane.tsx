import React, { useState } from 'react';
import classNames from 'classnames';
import style from './SidePane.module.css';

const SidePane = () => {
  const [sidePaneActive, setSidePaneActive] = useState(false);

  return (
    <div>
      <div
        className={classNames(style.sidePaneContainer, {
          [style.sidePaneContainerActive]: sidePaneActive,
        })}
      >
        {!sidePaneActive && (
          <div
            className={style.sidePaneButtonContainer}
            onClick={() => setSidePaneActive(true)}
          >
            <button
              type="button"
              className={style.sidePaneButton}
              onClick={() => {
                setSidePaneActive(true);
              }}
            >
              <span className={style.sidePaneButtonIconContainer}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.294 9.69805C10.2008 9.60614 10.1268 9.49661 10.0763 9.37584C10.0258 9.25507 9.99976 9.12546 9.99976 8.99455C9.99976 8.86364 10.0258 8.73403 10.0763 8.61327C10.1268 8.4925 10.2008 8.38297 10.294 8.29105C10.4831 8.10449 10.738 7.99988 11.0035 7.99988C11.2691 7.99988 11.524 8.10449 11.713 8.29105L14.678 11.2311C14.7802 11.3324 14.8614 11.453 14.9167 11.5858C14.9721 11.7186 15.0006 11.8611 15.0006 12.0051C15.0006 12.149 14.9721 12.2915 14.9167 12.4243C14.8614 12.5572 14.7802 12.6777 14.678 12.7791L11.723 15.7091C11.534 15.8959 11.2789 16.0007 11.013 16.0007C10.7472 16.0007 10.4921 15.8959 10.303 15.7091C10.2098 15.6171 10.1358 15.5076 10.0853 15.3868C10.0348 15.2661 10.0088 15.1365 10.0088 15.0056C10.0088 14.8746 10.0348 14.745 10.0853 14.6243C10.1358 14.5035 10.2098 14.394 10.303 14.3021L12.621 12.0051L10.294 9.69805V9.69805Z"
                    fill="white"
                    className="_14TyY7wB85QoVU"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}
        {sidePaneActive && (
          <div className={style.activeSidePaneContainer}>
            <div className={style.activeSidePaneContentContainer}>
              <div className={style.activeSidePaneContent}>
                <div className={style.activeSidePaneItem}>
                  <div className={style.leftactivePaneItem}>
                    <a className={style.activeSidePaneUserButton} href="/">
                      <div className={style.activeSidePaneUserImgContainer}>
                        <div className={style.activeSidePaneUserImg}>T</div>
                      </div>
                    </a>
                    <div className={style.activeSidePanelUserInfo}>
                      <span className={style.userLinkContainer}>
                        <a href="/" className={style.userLink}>
                          Trello
                        </a>
                      </span>
                      <p className={style.userStatus}>Бесплатно</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={style.closeSidePaneButton}
                    onClick={() => {
                      setSidePaneActive(false);
                    }}
                  >
                    <div>
                      <img
                        className={style.closeSidePaneButtonIcon}
                        src="https://a.trellocdn.com/prgb/dist/images/workspace-navigation/chevron-left.58243262833f693f6101.svg"
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className={style.activeSidePaneItem}>
                <a className={style.userActivityLink} href="/">
                  <span className={style.boardIcon}>
                    <svg
                      width="24"
                      height="24"
                      role="presentation"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p>Доски</p>
                </a>
              </div>
              <div className={style.activeSidePaneItem}>
                <a className={style.userActivityLink} href="/">
                  <div className={style.usersIconContainer}>
                    <img
                      className={style.activityIcon}
                      src="https://img.icons8.com/material-sharp/24/000000/user.png"
                      alt=""
                    />
                  </div>
                  <p>Участники</p>
                </a>
              </div>
              <div className={style.activeSidePaneItem}>
                <a className={style.userActivityLink} href="/">
                  <div className={style.usersIconContainer}>
                    <img
                      className={style.activityIcon}
                      src="https://img.icons8.com/material/24/000000/settings--v5.png"
                      alt=""
                    />
                  </div>
                  <p>Настройки</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePane;
