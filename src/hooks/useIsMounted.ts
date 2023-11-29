import { useEffect, useState } from 'react'

export const useIsMounted = (delay: number = 0) => {

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, delay)

        return () => {
            clearTimeout(timeout)
        }
    }, [setIsMounted, delay])

    return {
        isMounted
    }
}
