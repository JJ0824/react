import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 40px;
  font-weight: 600;
  background-color: dodgerblue;
  color: white;
  border-radius : 10px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover {
    background-color: #3d3de2;
  }
`;

const Button = ({name, onClick}) => {
  return (
    <Box onClick={onClick}>
      <p>{name}</p>
    </Box>
  );
};

// const Button = (props) => {
//   return (
//     <Box>
//       <p>{props.name}</p>
//     </Box>
//   );
// };

export default Button;