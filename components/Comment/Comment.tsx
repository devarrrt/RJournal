import React, { useState } from 'react'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core'

import styles from './Comment.module.scss'

interface IComment {
    user: {
        fullname: string;
        avatarUrl: string;
    };
    text: string;
    createdAt: string;

}

const Comment: React.FC<IComment> = ({ user, text }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const openEl = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const closeEl = () => setAnchorEl(null)

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}
                    alt="Avatar"
                />
                <b> {user.fullname} </b>
                <span> 19.09.21</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={openEl}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={closeEl}
                keepMounted>
                <MenuItem onClick={closeEl}>Удалить</MenuItem>
                <MenuItem onClick={closeEl}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}

export default Comment

//37минута . 2 урок
