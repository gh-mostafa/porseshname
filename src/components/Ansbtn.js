import { Button } from "@mui/material";

const Ansbtn = ({ numb, anumb, func, txt }) => {
  return (
    <Button
      className="answer"
      fullWidth
      color={anumb === numb ? "secondary" : "primary"}
      variant={anumb === numb ? "contained" : "outlined"}
      onClick={() => func(numb)}
    >
      {txt}
    </Button>
  );
};

export default Ansbtn;
