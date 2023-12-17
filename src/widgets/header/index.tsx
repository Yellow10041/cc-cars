import clsx from "clsx"
import {FC, useRef, useState} from "react"
import {Link, useLocation} from "react-router-dom"

import styles from "./index.module.scss"
import {dataHeader} from "./lib/data-header"

interface IHeader {}

export const Header: FC<IHeader> = () => {
  const location = useLocation()
  const activePathname = location.pathname

  const [isMobileMenuActive, setMobileMenu] = useState<boolean>(false)

  const refDropdownsMenu = useRef<HTMLDivElement[]>([])
  const refBurger = useRef<HTMLDivElement>(null)
  const refHeaderNav = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLDivElement>(null)

  const toggleBurger = () => {
    setMobileMenu((prev) => !prev)
  }

  const hiddenDropdownsMenu = () => {
    refDropdownsMenu.current.map((e) => {
      const dropdownParent = e.parentElement
      const dropdownSibling = e.nextElementSibling as HTMLDivElement

      if (dropdownParent) {
        dropdownParent.dataset.opened = "false"
        dropdownParent.classList.remove(styles.visible)
      }

      if (dropdownSibling) {
        dropdownSibling.style.height = `0px`
      }
    })
  }

  const handleDropdownMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const element: HTMLElement | null = e.target as HTMLElement
    console.log(element)

    if (element) {
      const elementParent = element.parentElement
      const elementSibling = element.nextElementSibling as HTMLDivElement
      const currentStatusDropdown = elementParent
        ? elementParent.dataset.opened
        : null

      hiddenDropdownsMenu()

      if (elementParent && elementSibling) {
        switch (currentStatusDropdown) {
          case "true":
            elementParent.classList.remove(styles.visible)
            elementParent.dataset.opened = "false"
            elementSibling.style.height = `0px`
            break
          default:
            elementParent.classList.add(styles.visible)
            elementParent.dataset.opened = "true"
            elementSibling.style.height = `${
              elementSibling.scrollHeight + 20
            }px`
        }
      }
    }
  }

  const handleLink = () => {
    hiddenDropdownsMenu()
    setMobileMenu(false)
  }

  return (
    <div
      className={clsx(styles.header, isMobileMenuActive && styles.active)}
      ref={header}
    >
      <div className={clsx(styles.header_top)}>
        <Link
          className={clsx(styles.header_logo, styles.header_nav_item)}
          to="/"
        >
          ЦК електричних та електронних систем автомобілів
        </Link>
        <div
          className={clsx(styles.header_burger)}
          data-active="false"
          ref={refBurger}
          onClick={toggleBurger}
        >
          <div className={clsx(styles.header_burger_item)}></div>
          <div className={clsx(styles.header_burger_item)}></div>
          <div className={clsx(styles.header_burger_item)}></div>
        </div>
      </div>
      <nav className={clsx(styles.header_nav)} ref={refHeaderNav}>
        {dataHeader.map((e, i) => (
          <>
            {e.path ? (
              <Link
                className={clsx(
                  styles.header_nav_item,
                  activePathname === e.path && styles.active,
                )}
                to={e.path}
                key={i}
                onClick={handleLink}
              >
                {e.title}
              </Link>
            ) : (
              <div
                className={clsx(styles.header_nav_dropdown)}
                data-opened="false"
                key={i}
              >
                <div
                  className={clsx(styles.header_nav_dropdown_title)}
                  onClick={(e) => handleDropdownMenu(e)}
                  ref={(ref) => {
                    if (refDropdownsMenu.current && ref != null) {
                      refDropdownsMenu.current[i] = ref
                    }
                  }}
                >
                  {e.title}
                </div>
                <div className={clsx(styles.header_nav_dropdown_menu)}>
                  {e.items?.map((item, index) => (
                    <Link
                      className={clsx(
                        styles.header_nav_dropdown_menu_item,
                        styles.header_nav_item,
                        activePathname === item.path && styles.active,
                      )}
                      to={item.path}
                      key={index}
                      onClick={handleLink}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
      </nav>
    </div>
  )
}
