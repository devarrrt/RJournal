import React from 'react';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';
import { Button, IconButton, Paper } from '@material-ui/core';
import Link from 'next/link';

import styles from './Header.module.scss';

interface IHeader { }

const Header: React.FC<IHeader> = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        {/* left */}
        {/* menu */}
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/* logo */}
        <Link href="/">
          <a>
            <img
              src="/static/img/logo.svg"
              alt="logoSvg"
              width="32px"
              height="42px"
              className="mr-10"
            />
          </a>
        </Link>
        {/* search input */}
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        {/* button */}
        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>

      {/* rigth */}
      <div className="d-flex align-center">
        {/* <IconButton>
          <MessageIcon />
        </IconButton> */}
        <IconButton>
          <NotificationIcon />
        </IconButton>

        {/* login */}
        <div className={styles.loginButton}>
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <UserIcon />
              Войти
            </a>
          </Link>
        </div>
      </div>
    </Paper>
  );
};
export default Header;
