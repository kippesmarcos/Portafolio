import { Link } from '@nextui-org/react'

// import { useBookStore } from '@/store'
import { TransitionElement } from '../shared'
import { GitHubSVG } from '../icons/GitHubSVG'
import { FrontMentorSVG, LinkedInSVG } from '../icons'
import { useIsMounted } from '@/hooks'
import { config } from '@/config'
import { capitalize } from '@/utils'

export const SocialMedia = () => {

  const { isMounted } = useIsMounted(100)

  return (
    <div className="container mx-auto max-w-screen-2xl absolute xl:fixed inset-x-0 flex flex-row-reverse xl:flex-row justify-between bottom-0 mb-10 z-10 xl:z-0">

      <div className="flex sm:flex-col w-[60px] items-center justify-end gap-5">
        <TransitionElement isMounted={isMounted} classNames='fadeleft' timeout={2000}>
          <Link href={config.socialMedia.github} isExternal>
            <GitHubSVG />
          </Link>
        </TransitionElement>
        <TransitionElement isMounted={isMounted} classNames='fadeleft' timeout={2000}>
          <Link href={config.socialMedia.linkedin} isExternal>
            <LinkedInSVG />
          </Link>
        </TransitionElement>
        <TransitionElement isMounted={isMounted} classNames='fadeleft' timeout={2000}>
          <Link href={config.socialMedia.frontentmentor} isExternal>
            <FrontMentorSVG />
          </Link>
        </TransitionElement>
      </div>

      <div>
        <TransitionElement isMounted={isMounted} classNames='faderight' timeout={2000}>
          <Link
            className="hidden xl:block [writing-mode:vertical-lr]"
            color="foreground"
            href={`mailto:${config.contact}`}
            isExternal
          >
            { capitalize(config.contact) }
          </Link>
        </TransitionElement>
      </div>
    </div>
  )
}
