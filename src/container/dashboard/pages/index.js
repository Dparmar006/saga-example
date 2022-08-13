import React from 'react'
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  CardFooter,
  Button
} from 'reactstrap'

const Dashboard = () => {
  return (
    <Container fluid className='p-3'>
      <Row className='gy-4'>
        {[1, 2, 3, 4].map(card => (
          <Col lg={6}>
            <Card color='secondary'>
              <CardHeader>
                <CardTitle tag='h5'>Hello {card}</CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  Ad enim veniam commodo aliqua cupidatat consequat commodo
                  deserunt culpa consectetur ut nisi ipsum. Nisi aliquip velit
                  mollit aute.
                </CardText>
              </CardBody>
              <CardFooter>
                <Button className='mr-2' color='primary'>
                  Primary
                </Button>
                <Button outline color='primary'>
                  Secondary
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='mt-5'>
        <Col lg={6}>
          <Input type='text' />
        </Col>
        <Col lg={6}>
          <Button color='success'>Success</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
