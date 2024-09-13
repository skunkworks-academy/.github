import React from 'react';
import { Grid, Row, Column, Tile, Button } from 'carbon-components-react';
import { Cloud, Development, Security, DataVis_1, Application, ProjectDiagram } from '@carbon/icons-react';


const Services = () => (
  <section id="services">
    <Grid>
      <Row>
        <Column lg={16}>
          <h2 className="bx--type-productive-heading-04">Our Services</h2>
        </Column>
      </Row>
      <Row>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">Cloud Computing Training</h3>
            <p className="bx--type-body-long-01">Dive deep into cloud technologies with our comprehensive training programs. Learn how to architect, deploy, and manage cloud infrastructure on leading platforms.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">DevOps Mastery</h3>
            <p className="bx--type-body-long-01">Master the art of continuous integration, continuous delivery, and infrastructure as code with our DevOps courses.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">Cybersecurity Certification</h3>
            <p className="bx--type-body-long-01">Protect your organization's data and networks by becoming a certified cybersecurity professional. Cover everything from basic security principles to advanced threat detection.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
      </Row>
      <Row>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">Data Science & AI</h3>
            <p className="bx--type-body-long-01">Unleash the power of data with our Data Science and AI courses. Learn how to analyze big data, build predictive models, and create AI-driven applications.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">Software Development</h3>
            <p className="bx--type-body-long-01">From beginner to expert, our software development courses cover everything you need to know about programming languages, frameworks, and best practices.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <Tile>
            <h3 className="bx--type-productive-heading-02">Project Management</h3>
            <p className="bx--type-body-long-01">Manage projects effectively and deliver results on time with our project management training. Get certified in PMP, Agile, and other methodologies.</p>
            <Button>Learn More</Button>
          </Tile>
        </Column>
      </Row>
    </Grid>
  </section>
);

export default Services;