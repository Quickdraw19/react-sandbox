import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'},
//     {id: 4, brand: 'Geo'}
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

  
  // function MissedGoal() {
  //   return <h1>MISSED!</h1>;
  // }
  
  // function MadeGoal() {
  //   return <h1>Goal!</h1>;
  // }

  // function Goal(props) {
  //   const isGoal = props.isGoal;
  //   return(
  //     <>
  //     {isGoal &&
  //     <MadeGoal/>
  //   }
  //   {!isGoal &&
  //     <MissedGoal/>
  //   }
  //   </>
  //   );
  // }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<Goal isGoal={true} />);

  // function Goal(props) {
  //   const isGoal = props.isGoal;
  //   if (isGoal) {
  //     return <MadeGoal/>;
  //   }
  //   return <MissedGoal/>;
  // }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<Goal isGoal={false} />);

  // function Football() {
  //   const shoot = (a, b) => {
  //     alert(b.type);
  //     /*
  //     'b' represents the React event that triggered the function,
  //     in this case the 'click' event
  //     */
  //   }
  
  //   return (
  //     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  //   );
  // }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<Football />);

// function Car() {
//     return <h2>I am a Car!</h2>;
//   }
  
//   function Garage() {
//     return (
//       <>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage />);

  // function Garage(props) {
  //   const cars = props.cars;
  //   return (
  //     <>
  //       <h1>Garage</h1>
  //       {cars.length > 0 &&
  //         <h2>
  //           You have {cars.length} cars in your garage.
  //         </h2>
  //       }
  //     </>
  //   );
  // }
  
  // const cars = ['Jeep'];
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<Garage cars={cars} />);


// const myFirstElement = <h1>Hello Larry!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);