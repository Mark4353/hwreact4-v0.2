import styled from "styled-components";


const DifficultyLabel = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  background-color: rgba(223, 245, 26, 0.98);
`;

const Difficulty = ({ level }) => {
  return <DifficultyLabel>Difficulty: {level}</DifficultyLabel>;
};

export default Difficulty;
