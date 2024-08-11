import React from 'react'
import { Card, Flex, Col, Row, Typography } from 'antd'
import Charts from '../components/charts/Charts'
import PieCharts from '../components/charts/PieCharts'
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaLinux } from "react-icons/fa6";
import '../styles/Dashboard.css'

const { Title } = Typography;

function Dashboard() {
  return (
    <>
        <Title className='title' level={2}>Dashboard</Title>
        <div className='cardRow'>
            <Row className='cardRow' gutter={16}>
              <Col className='row-1'  xs={{ flex: '95%',}} sm={{ flex: '50%', }} md={{ flex: '25%' }} >
              <Card style={{ height: 150 ,}}>
              <Card.Meta 
                  avatar={<FaApple style={{ fontSize: 25, color: '#758694' }} />}
                  title="APPLE"
                  description={
                    <>
                      <p>This is the description</p>
                      <p>This is the description</p>
                    </>
                  }
                />
                </Card>
              </Col>
              <Col className='row-1' xs={{ flex: '95%',}} sm={{ flex: '50%', }} md={{ flex: '25%' }} >
              <Card style={{ height: 150 ,}}>
              <Card.Meta 
                  avatar={<FaWindows style={{ fontSize: 25, color: '#179BAE' }} />}
                  title="APPLE"
                  description={
                    <>
                      <p>This is the description</p>
                      <p>This is the description</p>
                    </>
                  }
                />
                </Card>
              </Col>
              <Col className='row-1'  xs={{ flex: '95%',}} sm={{ flex: '50%', }} md={{ flex: '25%' }} >
              <Card style={{ height: 150 }}>
              <Card.Meta 
                  avatar={<IoLogoAndroid style={{ fontSize: 25, color: '#88D66C' }} />}
                  title="APPLE"
                  description={
                    <>
                      <p style={{  }}>This is the description</p>
                      <p>This is the description</p>
                    </>
                  }
                />
                </Card>
              </Col>
              <Col className='row-1'  xs={{ flex: '95%',}} sm={{ flex: '50%', }} md={{ flex: '25%' }} >
              <Card style={{ height: 150 ,}}>
              <Card.Meta 
                  avatar={<FaLinux style={{ fontSize: 25, color: '#021526' }} />}
                  title="LINUX"
                  description={
                    <>
                      <p>This is the description</p>
                      <p>This is the description</p>
                    </>
                  }
                />
                </Card>
              </Col>
            </Row>
        </div>

        <div>
          <Row gutter={16}>
            <Col className='row-1'  xs={{ flex: '95%',}} sm={{ flex: '100%', }} md={{ flex: '62%' }}>
              <Card bordered={false}>
                <Charts />
              </Card>
            </Col>
            <Col className='row-1'  xs={{ flex: '95%',}} sm={{ flex: '100%', }} md={{ flex: '30%' }}>
              <Card bordered={false}>
                <PieCharts />
              </Card>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default Dashboard