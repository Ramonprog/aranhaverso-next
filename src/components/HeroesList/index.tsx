import { IHeroData } from "@/interfaces/heroes"

interface IProps {
  heroes: IHeroData[]
}


const HeroesList = ({ heroes }: IProps) => {
  console.log("🚀 ~ file: index.tsx:9 ~ HeroesList ~ heroes:", heroes)
  return (
    <>
      <h1>Personagens</h1>
      {heroes.map(hero => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </>
  )
}

export default HeroesList