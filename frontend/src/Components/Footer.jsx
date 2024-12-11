import React, { useEffect, useState } from 'react'
import { Card, CardFooter, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {

  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    // Update the current year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div id='footer'>
        <Card className='border-none text-center'>
          <CardFooter className='py-4'>
            <Container>
                <Row>
                    <Col>
                    Copyright @ {currentYear}. All right reserved
                    </Col>
                </Row>
            </Container>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Footer