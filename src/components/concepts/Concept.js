import Card from './Card';

const Concept = (props) => {
  return (
    <Card>
      <img src={props.concept.image} alt={props.concept.title} />
      <h2>{props.concept.title}</h2>
      <p>{props.concept.description}</p>
    </Card>
  );
};

export default Concept;
