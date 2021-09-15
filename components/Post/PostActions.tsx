import React from 'react'
import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import styles from './Post.module.scss'


interface IPostActions {
}

const PostActions: React.FC<IPostActions> = () => {
    return (
        <ul className={styles.postActions}>
            <li>
                <IconButton>
                    <CommentsIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
        </ul>
    )
}

export default PostActions
