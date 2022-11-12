import React from "react"
import { InputRowStyled, InputContainer } from "./style"
import { AiOutlineSearch } from "react-icons/ai"

export type Props = {
  type: "text" | "password" | "email"
  placeholder: string
  handleChange?: (e: any) => void
  value: string
  name: string
}

const Search = ({ name, type, placeholder, handleChange, value }: Props) => {
  return (
    <InputContainer>
      <span>
        <AiOutlineSearch />
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </InputContainer>
  )
}

export default Search
