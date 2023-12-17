import clsx from "clsx"
import {FC} from "react"

import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"

interface IHome {}

export const Home: FC<IHome> = () => {
  return (
    <PageLayout>
      <div id="home" className={clsx(styles.page)}>
        <div className={clsx(styles.page_content)}>
          <div className={clsx(styles.page_content_inner)}>
            <div className={clsx(styles.home_hero)}>
              <div className={clsx(styles.home_hero_info)}>
                <div className={clsx(styles.home_hero_info_title)}>
                  Циклова комісія електричних та електронних систем автомобілів
                </div>
                <div className={clsx(styles.home_hero_info_des)}>
                  <p>
                    Навчаючись у нас, Ви оволодієте знаннями і навиками, а також
                    загальними і фаховими компетентностями в галузі
                    експлуатації, обслуговування, ремонту та продажу електричних
                    та електронних систем автомобілів, їхніх вузлів і агрегатів.
                  </p>
                  <p>
                    Випускник за цією освітньо –професійною програмою
                    підготовлений для організаційної, експлуатаційно-ремонтної
                    діяльності в галузі експлуатації електричних та електронних
                    систем автомобілів цивільного призначення.
                  </p>
                  <p>
                    Характерною особливістю даної освітньо-професійної програми
                    є її міждисциплінарний характер, що надає випускникам
                    можливість оволодівання компетентностями з різних сфер
                    професійної діяльності, які знаходяться на перетині
                    механіки, електротехніки, електромеханіки, електроніки та
                    мехатроніки.
                  </p>
                </div>
              </div>
              <img
                className={clsx(styles.home_hero_img)}
                src="./assets/img/materialBase/310/12.png"
                alt=""
              />
            </div>
            <div className={clsx(styles.home_section)}>
              <div className={clsx(styles.home_section_title)}>
                <div className={clsx(styles.home_section_title_inner)}>
                  Чим перспективне навчання у нашому коледжі за спеціальністю
                  <br />
                  141 Електроенергетика, електротехніка та електромеханіка
                </div>
              </div>
              <div className={clsx(styles.home_prospects)}>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Фахівець може займати первинні посади і виконувати
                    кваліфікаційні роботи:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електромеханіка
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електромеханіка з ремонту транспорту
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електромеханіка дільниці
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електромеханіка виробництва
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електротехніка-конструктора
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електротехніка технолога (електромеханіка)
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      майстра виробничого навчання
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Наші фахівці вивчають комплекс професійно-орієнтованих
                    дисциплін, які забезпечать підготовку висококваліфікованого
                    спеціаліста:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      будова і експлуатація автомобілів
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      двигуни автомобілів
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електроустаткування та мікропроцесорне керування
                      автомобілів
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      технічне обслуговування та ремонт електроустаткування
                      автомобілів
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      основи керування автомобілем
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      основи автоматики
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      схемотехніка
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      мікропроцесорна техніка
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      основи електроенергетики
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      основи електроніки та мікроелектроніки
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електроустаткування та мікропроцесорне керування
                      автомобілів
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Практична підготовка по спеціальності передбачає
                    проходження:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      слюсарно-механічної практики
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      електромонтажної практики
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      практики на засобах вимірювальної техніки
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      практики з використанням комп’ютерної техніки
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      практики для отримання робітничої професії
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      технологічної практики
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      переддипломної практики
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
