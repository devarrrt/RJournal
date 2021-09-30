import React, { useState } from 'react';
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
import { AuthDialog } from '..';

interface IHeader { }

const Header: React.FC<IHeader> = () => {
  const [visibleAuth, setVisibleAuth] = useState(false)

  const openAuthDialog = () => setVisibleAuth(true)
  const closeAuthDialog = () => setVisibleAuth(false)

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
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
        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>

      <div className="d-flex align-center">

        <IconButton>
          <NotificationIcon />
        </IconButton>

        <div className={styles.loginButton} onClick={openAuthDialog}>
          <UserIcon />
          Войти
        </div>
        <AuthDialog open={visibleAuth} onClose={closeAuthDialog} />
      </div>
    </Paper>
  );
};
export default Header;
