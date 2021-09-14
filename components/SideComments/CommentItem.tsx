import React from 'react'
import Link from 'next/link'

import styles from './SideComments.module.scss'

interface ICommentItem { }

const CommentItem: React.FC<ICommentItem> = () => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img
                    src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
                    alt="User avatar"
                />
                <Link href={`/p`}>
                    <a>
                        <b>Анатолий бла бла </b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maxime at iure minus non ipsam eaque cum veritatis soluta saepe consequatur iste ad debitis quasi error odit, cupiditate vel id!
            </p>
            <Link href={`/}`}>
                <a>
                    <span className={styles.postTitle}> Новый заголовок </span>
                </a>
            </Link>
        </div>

    )
}

export default CommentItem
