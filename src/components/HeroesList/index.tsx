import styles from './heroesList.module.scss'

import { spidermanFont } from "@/fonts"
import { IHeroData } from "@/interfaces/heroes"

interface IProps {
  heroes: IHeroData[]
}


const HeroesList = ({ heroes }: IProps) => {
  console.log("🚀 ~ file: index.tsx:9 ~ HeroesList ~ heroes:", heroes)
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>Personagens</h1>
    </>
  )
}

export default HeroesList