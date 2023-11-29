import { Key, createRef, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Navbar, Dropdown, Button, NavbarContent, Link, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { LogoApp, SwitchApp } from './'
import { useIsMounted, useThemeUncontrolled } from '@/hooks'
import { TransitionElement } from '../shared'

type LinksNavbar = {
  label: string,
  href: string
}

export const NavbarApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const { t } = useTranslation('home')

  const { controlledStyles } = useThemeUncontrolled()

  const { isMounted } = useIsMounted(100)

  const getLocale = useMemo(() => router.locale === 'en' ? '' : 'es', [router.locale])

  const onActionMenu = (e: Key) => {
    router.push('/', undefined, { locale: e.toString(), scroll: false })
  }

  const links: LinksNavbar[] = useMemo(() => t('navbar.links', { returnObjects: true }), [t])

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="py-2"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <TransitionElement isMounted={isMounted} classNames="fadeleft" timeout={2000}>
            <LogoApp width="60px" height="60px" />
          </TransitionElement>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <TransitionGroup component={null}>
          {
            isMounted &&
            links.map(({ label, href }, i) => {
              const nodeRef = createRef<any>()
              return (
                <CSSTransition classNames="fadedown" timeout={2000} key={`${href}-${i}`} nodeRef={nodeRef}>
                  <NavbarItem key={`${label}-${i}`}>
                    <Link color="foreground" href={`/${getLocale}#${href}`} style={{ transitionDelay: `${i * 100}ms` }} ref={nodeRef}>
                      <strong className="text-gradient mr-1">0{i + 1}.</strong> {label}
                    </Link>
                  </NavbarItem>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <TransitionElement isMounted={isMounted} classNames="faderight" timeout={2000}>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  startContent={<FontAwesomeIcon icon={faChevronDown} size="xs" style={controlledStyles} />}
                  variant="light"
                  disableRipple
                >
                  <div className="flex items-center justify-between gap-1">
                    <FontAwesomeIcon icon={faGlobe} size="lg" style={controlledStyles} />
                    <p className="underline">{router.locale === "en" ? "English" : "Español"}</p>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" onAction={onActionMenu}>
                <DropdownItem key="es">{t('navbar.dropdown.textEs')}</DropdownItem>
                <DropdownItem key="en">{t('navbar.dropdown.textEn')}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TransitionElement>
        </NavbarItem>
        <NavbarItem>

          <TransitionElement isMounted={isMounted} classNames="faderight" timeout={2000}>

            <SwitchApp />
          </TransitionElement>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-4">
        {links.map(({ label, href }, index) => (
          <NavbarMenuItem key={`${label}-${index}`}>
            <Link href={`/${getLocale}#${href}`} onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
            {/* <p className="text-primary">{label}</p> */}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}