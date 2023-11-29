import { useIsMounted } from '@/hooks'
import React, { FC, PropsWithChildren } from 'react'

export const ClientOnly: FC<PropsWithChildren> = ({ children, ...delegated }) => {

    const { isMounted } = useIsMounted()

    if(!isMounted) return <></>

    return (
        <React.Fragment {...delegated}>
            {children}
        </React.Fragment>
    )
}
