import { FC, PropsWithChildren, ReactNode, useRef } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface Props extends PropsWithChildren {
    isMounted: boolean;
    classNames: string;
    timeout: number;
}

export const TransitionElement: FC<Props> = ({ isMounted, classNames, timeout, children }) => {

    const nodeElement = useRef<any>()

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={classNames} timeout={timeout} nodeRef={nodeElement}>
                    <div ref={nodeElement}>
                        {children}
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>
    )
}
