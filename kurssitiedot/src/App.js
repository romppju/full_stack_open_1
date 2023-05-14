const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {   
  return (     
    <>
      <Part name={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part name={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part name={props.parts[2].name} ex={props.parts[2].exercises} />
    </>      
  )    
}

const Total = (props) => {
  return (
    <p>
      Numer of exercises {props.parts.reduce((acc, obj) =>
      acc + obj.exercises, 0)}
    </p>
  )
}

const Part = (props) => {  
  return (
    <p>{props.name} {props.ex} </p>
  )
}

export default App
