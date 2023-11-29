import { Button, Link } from '@nextui-org/react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@/config'

export const ButtonContact = ({ text }: { text: string }) => (
    <Button
        variant="shadow"
        href={ `mailto:${config.contact}` }
        as={Link}
        color="primary"
        isExternal
        startContent={<FontAwesomeIcon icon={faEnvelope} />}
    >
        { text }
    </Button>
)