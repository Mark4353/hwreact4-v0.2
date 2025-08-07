import styled from "styled-components";
import PropTypes from "prop-types";


const DifficultyLabel = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  color: black;

  font-weight: bold;
  font-size: 0.9rem;
`;

const Difficulty = ({ level }) => {
  return <DifficultyLabel level={level}>Difficulty: {level}</DifficultyLabel>;
};

Difficulty.propTypes = {
  level: PropTypes.oneOf([0, 1, 3]).isRequired,
};

export default Difficulty;
