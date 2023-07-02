const TheHeader = ({ keyConceptsImage }) => {
  return (
    <header>
      <img src={keyConceptsImage} alt='Medal badge with a star' />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default TheHeader;
