import React from 'react'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss'

interface ILeftMenu { }

const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];


const LeftMenu: React.FC<ILeftMenu> = () => {
    const router = useRouter()

    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <a>
                                <Button variant={router.asPath === obj.path ? 'contained' : ''}>
                                    {obj.icon}
                                    {obj.text}
                                </Button>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftMenu
