import React, { useState, useEffect } from 'react';
import "./styles.css"
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Charts from './views/Charts/Charts'
import Card from './components/Card/Card'
import CardHeader from './components/Card/CardHeader'
import CardBody from './components/Card/CardBody'
import CardText from "components/Card/CardText.js";
const ppl = 10

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);
  
  return (
    <>
    <Heading title="People Counter Report" textAlign="center" />
      <GridContainer>
        <GridItem xs={120}>
        <Card>
            <CardHeader color="warning" text>
              <CardText color="warning">
                <h3>Current Number of People Inside the Building: {ppl}</h3>
              </CardText>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    <Charts/>
    </>
  );
}

export default App;