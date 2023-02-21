import React, { useState, useEffect } from 'react';
import './Timeline.css'
import axios from 'axios';
import calendar from '../../Img/Calendar.png'

function Timeline() {
  const [data, setData] = useState([]);  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      const datosArray = Object.values(response.data);
      setData(datosArray);      
    };
    getData();
  }, []);
  const onlyThree = data.slice(0, 3);
  return (
    <div className="containerTimeline">
      <div className="box-arrow">
        <img src={calendar} alt="imgCalendar" />
        <h2>Proximós Eventos</h2>
        <div className="arrow"></div>
      </div>
      {onlyThree.map((data, index) => ( <div className='containerBoxTimeline' key={data.title}>
                                          <div className='boxTimeline' id={`box${index+1}`}>
                                            <div className='boxesTimeline'>
                                              <h2 >{data.title}</h2>
                                              <div className='containerInfo'>
                                                <div className='containerDate'>
                                                  <h3>{data.day}</h3>
                                                  <h3>{data.month}</h3>
                                                </div>
                                                <p>{data.description}</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className='lineTimeline'></div>
                                        </div>
                                      ))}      
    </div> 
  )
}
    

export default Timeline