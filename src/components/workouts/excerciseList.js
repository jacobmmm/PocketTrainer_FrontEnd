import "../../css/MusclePlans.css"

export default function ExcList() {

    const excercises = [
        { day:'1',src:'NA',name: 'Legs' },
        { day:'2',src:'NA',name: 'Chest' },
        { day:'3',src:'NA',name: 'Shoulders' },
        { day:'4',src:'NA',name: 'Back' },
        {day:'5',src:'NA',name: 'Arms'}
      ];

    return(

        <div className="container-style">
            <h2 className="title-style">ISOLATION</h2>
            <p> {excercises.map((excercises, index) => (
        <div key={index} className="plan-item-style" >
          {/* <div className="arrow-style"></div> */}
          
          <span>
          <img src={excercises.src}  /> Day {excercises.day}: {excercises.name}
          </span>
            <br/>
        </div>
      ))} </p>
            {/* <ul>
            <li><img alt="Legs"/> Day1 Legs</li>
            <li><img alt="Chest"/> Day2 Chest</li>
            </ul> */}
        
        </div>
    )
}