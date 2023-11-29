import { Trans } from 'next-i18next'
import { Link } from '@nextui-org/react'

export const Footer = () => {

  return (
    <footer className="relative">
      <div className="flex flex-col gap-2 justify-center items-center p-5">
        <p className="text-sm sm:text-base">
          <Trans
            i18nKey={"footer.caption1"}
            components={[
              <Link key="link-nextjs" className="text-sm sm:text-base" href="https://nextjs.org/" isExternal underline="hover" showAnchorIcon />,
              <Link key="link-nextui" className="text-sm sm:text-base" href="https://nextui.org/" isExternal underline="hover" showAnchorIcon />
            ]}
          />
        </p>
        <p className="text-sm sm:text-base text-center">
          <Trans
            i18nKey={"footer.caption2"}
            components={[
              <Link key="link-bchiang7" className="text-sm sm:text-base" href="https://github.com/bchiang7/v4" isExternal underline="hover" showAnchorIcon />,
              <Link key="link-vercel" className="text-sm sm:text-base" href="https://vercel.com" isExternal underline="hover" showAnchorIcon />
            ]}
          />
        </p>
      </div>
    </footer>
  )
}