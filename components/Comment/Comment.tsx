import React, { useState } from 'react'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core'

import styles from './Comment.module.scss'

interface IComment { }

const Comment: React.FC<IComment> = () => {
    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null)

    const openEl = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const closeEl = () => setAnchorEl(null)

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Avatar"
                />
                <b>Oskar</b>
                <span> 19.09.21</span>
            </div>
            <Typography className={styles.text}>
                {"text"}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse tenetur officia ratione quibusdam libero, doloribus accusamus dignissimos quae molestiae odio magni provident eius debitis nostrum aperiam impedit culpa ipsum.
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
