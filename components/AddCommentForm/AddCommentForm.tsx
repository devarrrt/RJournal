import React, { useState } from 'react'
import { Button, Input } from '@material-ui/core'

import styles from './AddCommentForm.module.scss'

const AddCommentForm: React.FC = () => {
    const [text, setText] = useState('')
    const [clicked, setClicked] = useState(false)

    const onAddComment = () => {
        setClicked(false);
        setText('');
    }

    return (
        <div className={styles.form}>
            <Input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setClicked(!clicked)}
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                minRows={clicked ? 5 : 1}
                fullWidth multiline />
            {clicked &&
                <Button
                    disabled={ !text }
                    onClick={onAddComment}
                    className={styles.addButton}
                    variant="contained" color="primary">
                    Опубликовать
                </Button>}
        </div>
    )
}

export default AddCommentForm
