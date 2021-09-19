import React from 'react'
import { FullPost, MainLayout, PostComments } from '../../components'

const Post = () => {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost />
            <PostComments />
        </MainLayout>
    )
}

export default Post