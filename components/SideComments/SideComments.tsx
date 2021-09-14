import React from 'react'
import clsx from 'clsx'
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from './SideComments.module.scss'
import CommentItem from './CommentItem';

interface ISideComments {

}

const SideComments: React.FC<ISideComments> = () => {
    return (
        <div className={clsx(styles.root)}>
            <h3>
                Комментарии <ArrowRightIcon />
            </h3>
        <CommentItem/>
        </div>
    )
}

export default SideComments
