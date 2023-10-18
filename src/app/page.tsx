import axios from "axios";

import styles from './page.module.scss'

import HeroesList from "@/components/HeroesList";

const getHeroesData = async () => {
  try {
    const { data } = await axios.get(`${process.env.DOMAIN_ORIGIN}/api/heroes`)
    return data
  } catch (error) {
    console.log("🚀 ~ file: page.tsx:9 ~ getHeroesData ~ error:", error)
  }
}

export default async function Home() {

  const { data } = await getHeroesData()


  return (
    <main className={styles.main}>
      <HeroesList heroes={data} />
    </main>
  )
}
