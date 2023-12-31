import Concept from './Concept';

const Concepts = (props) => {
  return (
    <ul id='concepts'>
      {props.concepts.map((concept) => (
        <Concept key={concept.title} concept={concept} />
      ))}
    </ul>
  );
};

export default Concepts;
