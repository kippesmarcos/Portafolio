import { useTranslation } from 'next-i18next'
import { Button, Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
    text: string
}

export const ButtonDownload = ({ text }: Props) => {
    return (
        <Button
            variant="shadow"
            href={`/docs/marcos-ezequiel-kippes.pdf`}
            as={Link}
            color="primary"
            isExternal
            startContent={<FontAwesomeIcon icon={faFileArrowDown} />}
        >
            { text }
        </Button>
    )
}
