import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Input,
  List,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

const Chat = () => {
  const [message, setMessage] = useState('Hello world!')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    if (!message) return
    socket.emit('SEND_MESSAGE', message)
  }

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', msg => {
      setMessages(message => [...message, msg])
    })
  }, [socket])

  return (
    <Container className='p-4'>
      <Row>
        <Col xl={6}>
          <Input value={message} onChange={e => setMessage(e.target.value)} />
        </Col>
        <Col xl={3}>
          <Button onClick={() => sendMessage()}>Send message</Button>
        </Col>
      </Row>
      <ListGroup>
        {messages.map(message => (
          <ListGroupItem>{message}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}

export default Chat
