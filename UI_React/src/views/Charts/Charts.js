/*eslint-disable*/
import React, { useState, useEffect} from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";

const useStyles = makeStyles(styles);

var enh7,enh8,enh9,enh10,enh11,enh12,enh13,enh14,enh15,enh16,enh17,enh18,enh19,enh20,enh21,enh22=0;
var exh7,exh8,exh9,exh10,exh11,exh12,exh13,exh14,exh15,exh16,exh17,exh18,exh19,exh20,exh21,exh22=0;
var monday = 0, tuesday = 0, wednesday = 0, thursday = 0, friday = 0, saturday = 0, sunday = 0;
var jan=0, feb=0, mar=0, apr=0, may=0, jun=0, jul=0, aug=0, sep=0, oct=0, nov=0, dec=0;
// && (pc[i].time).localeCompare("9")==0 

export default function Charts() {
  const classes = useStyles();
  const [pc, setPc] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/testdynamo")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPc(data);
        //console.log("USE EFFECT: " + pc.length);
      });
  }, []);

  //////////////////Preparing Data for the Hour Chart////////////////////
  var date = new Date();
  var h = date.getHours();
  if(h==0)
    h = 24;
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>7)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==8)
     {
       enh7 = pc[i].enter;  //SumIn@8-0 (SumIn@7)
       exh7 = pc[i].exit;
       break;
      }
    } 
    else
      {enh7 = 0; exh7 = 0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>8)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==9)
     {
       enh8 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh8 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh8 = 0; exh8 = 0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>9)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==10)
     {
       enh9 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh9 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh9 = 0;exh9=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>10)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==11)
     {
       enh10 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh10 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh10 = 0;exh10=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>11)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==12)
     {
       enh11 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh11 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh11 = 0;exh11=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>12)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==13)
     {
       enh12 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh12 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh12 = 0;exh12=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>13)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==14)
     {
       enh13 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh13 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh13 = 0;exh13=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>14)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==15)
     {
       enh14 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh14 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh14 = 0;exh14=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>15)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==16)
     {
       enh15 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh15 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh15 = 0;exh15=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>16)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==17)
     {
       enh16 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh16 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh16 = 0;exh16=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>17)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==18)
     {
       enh17 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh17 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh17 = 0;exh17=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>18)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==19)
     {
       enh18 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh18 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh18 = 0;exh18=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>19)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==20)
     {
       enh19 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh19 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh19 = 0;exh19=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>20)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==21)
     {
       enh20 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh20 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh20 = 0;exh20=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>21)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==22)
     {
       enh21 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh21 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh21 = 0;exh21=0; break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(h>22)
    {
      if(pc[i].datetime.charAt(0)=='2' && pc[i].time==21)
     {
       enh22 = pc[i].enter-pc[i-1].enter;  //SumIn@9-SumIn@8
       exh22 = pc[i].exit-pc[i-1].exit;
       break;
      }
    } 
    else
      {enh22 = 0;exh22=0; break;}
  }
  
  //////////////////Preparing Data for the WeekDay Chart////////////////////
  var dateObj = new Date();
  var weekdayNumber = dateObj.getDay();
  if(weekdayNumber==0)
    weekdayNumber = 7;
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=1)  //> or >=
    {
      if((pc[i].datetime).localeCompare("Monday")==0)
     {
       monday = pc[i].enter;
       break;
      }
    } 
    else
      {monday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=2)
    {
      if((pc[i].datetime).localeCompare("Tuesday")==0)
     {
       tuesday = pc[i].enter;
       break;
      }
    } 
    else
      {tuesday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=3)
    {
      if((pc[i].datetime).localeCompare("Wednesday")==0)
     {
       wednesday = pc[i].enter;
       break;
      }
    } 
    else
      {wednesday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=4)
    {
      if((pc[i].datetime).localeCompare("Thursday")==0)
     {
       thursday = pc[i].enter;
       break;
      }
    } 
    else
      {thursday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=5)
    {
      if((pc[i].datetime).localeCompare("Friday")==0)
     {
       friday = pc[i].enter;
       break;
      }
    } 
    else
      {friday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=6)
    {
      if((pc[i].datetime).localeCompare("Saturday")==0)
     {
       saturday = pc[i].enter;
       break;
      }
    } 
    else
      {saturday = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=7)
    {
      if((pc[i].datetime).localeCompare("Sunday")==0)
     {
       sunday = pc[i].enter;
       break;
      }
    } 
    else
      {sunday = 0;break;}
  }
  //////////////Preparing Data for the Month of the Year Chart////////////////////
  var d = new Date();
  var m = d.getMonth();
  m=m+1;
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=1)
    {
      if((pc[i].datetime).localeCompare("January")==0)
     {
       jan = pc[i].enter;
       break;
      }
    } 
    else
      {jan = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=2)
    {
      if((pc[i].datetime).localeCompare("February")==0)
     {
       feb = pc[i].enter;
       break;
      }
    } 
    else
      {feb = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=3)
    {
      if((pc[i].datetime).localeCompare("March")==0)
     {
       mar = pc[i].enter;
       break;
      }
    } 
    else
      {mar = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=4)
    {
      if((pc[i].datetime).localeCompare("April")==0)
     {
       apr = pc[i].enter;
       break;
      }
    } 
    else
      {apr = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=5)
    {
      if((pc[i].datetime).localeCompare("May")==0)
     {
       may = pc[i].enter;
       break;
      }
    } 
    else
      {may = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=6)
    {
      if((pc[i].datetime).localeCompare("June")==0)
     {
       jun = pc[i].enter;
       break;
      }
    } 
    else
      {jun = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=7)
    {
      if((pc[i].datetime).localeCompare("July")==0)
     {
       jul = pc[i].enter;
       break;
      }
    } 
    else
      {jul = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=8)
    {
      if((pc[i].datetime).localeCompare("August")==0)
     {
       aug = pc[i].enter;
       break;
      }
    } 
    else
      {aug = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=9)
    {
      if((pc[i].datetime).localeCompare("September")==0)
     {
       sep = pc[i].enter;
       break;
      }
    } 
    else
      {sep = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=10)
    {
      if((pc[i].datetime).localeCompare("October")==0)
     {
       oct = pc[i].enter;
       break;
      }
    } 
    else
      {oct = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=11)
    {
      if((pc[i].datetime).localeCompare("November")==0)
     {
       nov = pc[i].enter;
       break;
      }
    } 
    else
      {nov = 0;break;}
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(m>=12)
    {
      if((pc[i].datetime).localeCompare("December")==0)
     {
       dec = pc[i].enter;
       break;
      }
    } 
    else
      {dec = 0;break;}
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Number of People Entered/Exited During Each Hour of the Day <small>- Multiple Bar Chart</small>
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={{
                  labels: [
                    "7:00",
                    "8:00",
                    "9:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00"
                  ],
                  series: [
                    [enh7, enh8, enh9, enh10, enh11, enh12, enh13, enh14, enh15, enh16, enh17, enh18, enh19, enh20, enh21, enh22],
                    [exh7, exh8, exh9, exh10, exh11, exh12, exh13, exh14, exh15, exh16, exh17, exh18, exh19, exh20, exh21, exh22]
                  ]
                }}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              />
            </CardBody>
            <CardFooter stats className={classes.cardFooter}>
              <h6 className={classes.legendTitle}>Legend</h6>
              <i className={"fas fa-circle " + classes.info} /> Enter{` `}
              <i className={"fas fa-circle " + classes.danger} /> Exit
              {` `}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={{
                  labels: ["M", "T", "W", "T", "F", "S", "S"],
                  series: [[monday, tuesday, wednesday, thursday, friday, saturday, sunday]]
                }}
                type="Line"
                options={roundedLineChart.options}
                listener={roundedLineChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Number of People Entered on Each Day of the Week</h4>
              <p className={classes.cardCategory}>Rounded Line Chart</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={{
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                  ],
                  series: [[jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]]
                }}
                type="Bar"
                options={simpleBarChart.options}
                responsiveOptions={simpleBarChart.responsiveOptions}
                listener={simpleBarChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Number of People Entered in Each Month of the Year</h4>
              <p className={classes.cardCategory}>Simple Bar Chart</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
