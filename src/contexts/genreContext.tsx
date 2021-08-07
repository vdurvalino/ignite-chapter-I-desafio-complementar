import { createContext, ReactNode, useState } from "react";

type GenreContextType = {
  selectedGenreId: number,
  handleClickButton: (id: number) => void
}

type GenreContextProviderProps = {
  children: ReactNode
}

export const GenreContext = createContext({} as GenreContextType)
export function GenreProvider(props: GenreContextProviderProps ){
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <GenreContext.Provider value={{
      selectedGenreId,
      handleClickButton,
    }}>
      {props.children}
    </GenreContext.Provider>
  )
}