import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/CheckOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';

interface IFollowButton { }

const FollowButton = () => {
    const [followed, setfollowed] = useState(false)
    return (
        <Button
            variant="contained"
            style={{ minWidth: 30, width: 35, height: 30 }}
            onClick={() => setfollowed(!followed)}
        >
            {followed ? <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} /> : <AddIcon />}
        </Button>
    )
}

export default FollowButton
