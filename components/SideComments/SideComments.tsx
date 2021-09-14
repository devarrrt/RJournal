import React, { useState } from 'react'
import clsx from 'clsx'
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import CommentItem from './CommentItem';
import styles from './SideComments.module.scss'

interface ISideComments {

}

const SideComments: React.FC<ISideComments> = () => {
    const [visible, setvisible] = useState(true)

    const toggleVisible = () => setvisible(!visible)

    return (
        <div className={clsx(styles.root, !visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Комментарии <ArrowRightIcon />
            </h3>
            {visible && (
                <>
                    <CommentItem />
                    <CommentItem />
                </>

            )}

        </div>
    )
}

export default SideComments
