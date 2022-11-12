import React from "react"
import { Button, Search } from "../../components"
import { Wrapper, Container } from "./style"

const List = () => {
  return (
    <Wrapper>
      <h1>My Todo List</h1>
      <Container>
        <div className="todo_header">
          <div className="search_container">
            <Search
              name="search"
              type="text"
              placeholder="Search"
              value="Search"
            />
          </div>
          <div className="button_container">
            <Button buttonText="New" />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default List
