import React from 'react'
import Link from 'next/link'

import styles from './SideComments.module.scss'

export interface ICommentItem {
    user: {
        id: number;
        fullname: string;
    };
    text: string;
    post: {
        id: number;
        title: string;
    };
}

const CommentItem: React.FC<ICommentItem> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img
                    src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
                    alt="User avatar"
                />
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.fullname}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>
                {text}
            </p>
            <Link href={`/`}>
                <a>
                    <span className={styles.postTitle}>
                        {post.title}
                    </span>
                </a>
            </Link>
        </div>
    )
}

export default CommentItem

