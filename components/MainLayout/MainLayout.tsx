import React from 'react'
import clsx from 'clsx';
import { LeftMenu, SideComments } from '..';

interface IMainLayout {
    className?: string,
    contentFullWidth?: boolean,
    hideComments?: boolean,
    hideMenu?: boolean
}

const MainLayout: React.FC<IMainLayout> = ({ className, contentFullWidth, children, hideComments, hideMenu }) => {
    return (
        <div className="wrapper">
            {!hideMenu &&
                <div className="leftSide">
                    <LeftMenu />
                </div>
            }
            <div className={clsx('content', { 'content--full': contentFullWidth })}>
                {children}
            </div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments />
                </div>
            )}

        </div>
    )
}

export default MainLayout
