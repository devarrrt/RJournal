import React, { useState } from 'react'
import clsx from 'clsx'
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import CommentItem from './CommentItem';
import styles from './SideComments.module.scss'
import data from '../../data'

interface ISideComments { }

const SideComments: React.FC<ISideComments> = () => {
    const [visible, setvisible] = useState(true)

    const toggleVisible = () => setvisible(!visible)

    return (
        <div className={clsx(styles.root, !visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Комментарии <ArrowRightIcon />
            </h3>
            {visible && (
                data.comments.popular.map((obj) => (
                    <CommentItem key={obj.id} {...obj} />
                ))
            )}
        </div>
    )
}

export default SideComments
