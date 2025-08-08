import styled from "styled-components";
import recipes from "./recipes";
import Difficulty from "./Difficulty";

const Container = styled.div`
  width: 1300px;
    margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Card = styled.div`
padding: 6px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  text-align: center;
`;

const Meta = styled.p`
  margin: 4px 0;
  color: #555;
  background-color: rgba(245, 223, 26, 0.98);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 25px;
`;

const DifficultyWrapper = styled.div`
  margin-top: 12px;
`;


const RecipeList = () => (
  <Container>
    {recipes.map((r) => (
      <Card key={r.id}>
        <Image src={r.image} alt={r.title} />
        <Info>
          <Title>{r.title}</Title>
          <Meta>
            {r.time} • {r.servings} • {r.calories}
          </Meta>
          <DifficultyWrapper>
            <Difficulty level={r.difficulty} />
          </DifficultyWrapper>
        </Info>
      </Card>
    ))}
  </Container>
);

export default RecipeList;
