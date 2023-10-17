import { IHeroData } from "@/interfaces/heroes"

interface IProps {
  heroes: IHeroData[]
}


const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <h1>Personagens</h1>
    </>
  )
}

export default HeroesList