import React, {useEffect, useState} from 'react';

const Functions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://semillero-timeline-default-rtdb.firebaseio.com/data.json")
          .then((response) => response.json())
          .then((data) => {
            const parsedData = Object.entries(data || {}).map(([id, values]) => ({ ...values, id }));
            setData(parsedData);
          })
          .catch((error) => console.log(error));
      }, []);
    return (
        <div>
            {data.map((item) => (
                <div>
                    {item.textPonentes}
                </div>
            ))}
        </div>
    );
}

export default Functions;
