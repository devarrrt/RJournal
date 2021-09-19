import React from 'react'
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { SignalCellularNull } from '@material-ui/icons'
import { Comment } from '..'

interface IPostComments { }

const PostComments = () => {
    return (
        <Paper elevation={0} className="mt-40 p-30">   {/*оболочка для комментариев */}
            <div className="container">
                <Typography variant="h6" className="mb-20">
                    42 комментария
                </Typography>
                <Tabs className="mt-20" value={null} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <Comment /> {/* комментарий отдельного юзера*/}
                <Comment />
            </div>
        </Paper>
    )
}

export default PostComments
