import style from './MainPage.module.css';
import Boards from './Boards/Boards';

const MainPage = () => {
  return (
    <div>
      <div className={style.mainPageContainer}>
        <div className={style.mainPageContentContainer}>
          <div className={style.stickyContainer}>
            <nav className={style.leftSideBarContainer}>
              <div>
                <ul className={style.sideBarItemsList}>
                  <li>
                    <a className={style.sideBarActiveItemLink} href="/">
                      <span className={style.sideBarIconContainer}>
                        <img
                          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/14/4a90e2/external-tile-dashboard-layout-for-computer-application-organizing-basic-color-tal-revivo.png"
                          alt=""
                        />
                      </span>
                      <span>Доски</span>
                    </a>
                  </li>
                  <li>
                    <a className={style.sideBarItemLink} href="/">
                      <span className={style.sideBarIconContainer}>
                        <img
                          className={style.sideBarItemIcon}
                          src="https://img.icons8.com/small/16/000000/template.png"
                          alt=""
                        />
                      </span>
                      <span>Шаблоны</span>
                    </a>
                  </li>
                  <li>
                    <a className={style.sideBarItemLink} href="/">
                      <span className={style.sideBarIconContainer}>
                        <img
                          className={style.sideBarItemIcon}
                          src="https://img.icons8.com/material-rounded/16/000000/home.png"
                          alt=""
                        />
                      </span>
                      <span>Главная страница</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={style.teamSideBarContainer}>
                <div>
                  <ul className={style.sideBarItemsList}>
                    <div className={style.workSpaceContainer}>
                      <div>
                        <span>Рабочие пространства</span>
                      </div>
                      <button
                        className={style.addWorkSpaceButton}
                        type="button"
                      >
                        <span>
                          <img
                            className={style.addWorkSpaceIcon}
                            src="https://img.icons8.com/ios-glyphs/16/000000/plus-math.png"
                            alt=""
                          />
                        </span>
                      </button>
                    </div>
                    <li>
                      <a className={style.userImgLink} href="/">
                        <div className={style.userImgContainer}>T</div>
                        <span>trello</span>
                        <span>
                          <span className={style.userLinkArrowContainer}>
                            <svg
                              width="24"
                              height="24"
                              role="presentation"
                              focusable="false"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.7071 7.29289L19.7782 14.364C20.1687 14.7545 20.1687 15.3876 19.7782 15.7782C19.3877 16.1687 18.7545 16.1687 18.364 15.7782L12 9.41421L5.63606 15.7782C5.24554 16.1687 4.61237 16.1687 4.22185 15.7782C3.83132 15.3877 3.83132 14.7545 4.22185 14.364L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                      <ul className={style.sideBarItemsList}>
                        <li>
                          <a className={style.sideBarUserItemLink} href="/">
                            <span className={style.sideBarIconContainer}>
                              <img
                                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/16/000000/external-tile-dashboard-layout-for-computer-application-organizing-basic-bold-tal-revivo.png"
                                alt=""
                              />
                            </span>

                            <span>Доски</span>
                          </a>
                        </li>
                        <li>
                          <a className={style.sideBarUserItemLink} href="/">
                            <span className={style.sideBarIconContainer}>
                              <img
                                src="https://img.icons8.com/material-outlined/16/000000/filled-like.png"
                                alt=""
                              />
                            </span>
                            <span>Важные события</span>
                          </a>
                        </li>
                        <li>
                          <a className={style.sideBarUserItemLink} href="/">
                            <span className={style.sideBarIconContainer}>
                              <img
                                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/16/000000/external-make-table-in-document-or-spread-sheet-text-regular-tal-revivo.png"
                                alt=""
                              />
                            </span>
                            <span className={style.sideBarItemTitle}>
                              Таблица рабочего пространства
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className={style.sideBarUserItemLink} href="/">
                            <span className={style.sideBarIconContainer}>
                              <img
                                src="https://img.icons8.com/external-becris-lineal-becris/16/000000/external-users-mintab-for-ios-becris-lineal-becris.png"
                                alt=""
                              />
                            </span>
                            <span>Участники</span>
                          </a>
                        </li>
                        <li>
                          <a className={style.sideBarUserItemLink} href="/">
                            <span className={style.sideBarIconContainer}>
                              <img
                                src="https://img.icons8.com/windows/16/000000/settings--v1.png"
                                alt=""
                              />
                            </span>

                            <span>Настройки</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className={style.allBoards}>
            <div className={style.contentAllBoards}>
              <div>
                <div className={style.boardSection}>
                  <div className={style.boardSectionHeader}>
                    <div className={style.boardSectionHeaderIcon}>
                      <span>
                        <img
                          src="https://img.icons8.com/material-rounded/24/000000/time-machine.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <h3 className={style.boardSectionHeaderName}>
                      Недавно просмотренные
                    </h3>
                  </div>
                  <div>
                    <ul className={style.boardSectionItemsList}>
                      <li className={style.boardSectionItem}>
                        <a className={style.boardSectionItemLink} href="/">
                          <div>
                            <div>
                              <div>trello</div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.boardWorkSpaceTitleContainer}>
                    <h3 className={style.boardWorkSpaceTitle}>
                      Ваши рабочие пространства
                    </h3>
                    <div className={style.boardWorkSpaceSideBarContainer}>
                      <div className={style.boardWorkSpaceSideBar}>
                        <div className={style.boardWorkSpaceSideBarHeaderIcon}>
                          <div
                            className={
                              style.boardWorkSpaceSideBarHeaderIconImgContainer
                            }
                          >
                            <div
                              className={
                                style.boardWorkSpaceSideBarHeaderIconImg
                              }
                            >
                              T
                            </div>
                          </div>
                          <h3>trello</h3>
                        </div>
                        <div
                          className={style.boardWorkSpaceSideBarItemsContainer}
                        >
                          <a
                            className={style.boardWorkSpaceSideBarItem}
                            href="/"
                          >
                            <span
                              className={
                                style.boardWorkSpaceSideBarItemIconContainer
                              }
                            >
                              <img
                                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/16/000000/external-tile-dashboard-layout-for-computer-application-organizing-basic-bold-tal-revivo.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <span>Доски</span>
                            </span>
                          </a>
                          <a
                            className={style.boardWorkSpaceSideBarItem}
                            href="/"
                          >
                            <span
                              className={
                                style.boardWorkSpaceSideBarItemIconContainer
                              }
                            >
                              <img
                                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/16/000000/external-make-table-in-document-or-spread-sheet-text-regular-tal-revivo.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <span>Таблица рабочего пространства</span>
                            </span>
                          </a>
                          <a
                            className={style.boardWorkSpaceSideBarItem}
                            href="/"
                          >
                            <span
                              className={
                                style.boardWorkSpaceSideBarItemIconContainer
                              }
                            >
                              <img
                                src="https://img.icons8.com/external-becris-lineal-becris/16/000000/external-users-mintab-for-ios-becris-lineal-becris.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <span>Участники (1)</span>
                            </span>
                          </a>
                          <a
                            className={style.boardWorkSpaceSideBarItem}
                            href="/"
                          >
                            <span
                              className={
                                style.boardWorkSpaceSideBarItemIconContainer
                              }
                            >
                              <img
                                src="https://img.icons8.com/windows/16/000000/settings--v1.png"
                                alt=""
                              />
                            </span>
                            <span>
                              <span>Настройки</span>
                            </span>
                          </a>
                          <div
                            className={
                              style.boardWorkSpaceUpgradeButtonContainer
                            }
                          >
                            <button
                              type="button"
                              className={style.boardWorkSpaceUpgradeButton}
                            >
                              <div>
                                <span
                                  className={
                                    style.boardWorkSpaceUpgradeButtonIconContainer
                                  }
                                >
                                  <img
                                    src="https://img.icons8.com/dusk/16/000000/upgrade.png"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div>Повысить</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Boards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
