import React from 'react'
import { NextPage } from 'next'
import { MainLayout, WriteForm } from '../components'

const WritePage: NextPage = () => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm/>
        </MainLayout>
    )
}

export default WritePage
