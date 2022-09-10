import { Col, Row } from "react-bootstrap"
import books from "../data/books.json"

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {books.map(book => (
          <Col>{JSON.stringify(book)}</Col>
        ))}
      </Row>
    </>
  )
}