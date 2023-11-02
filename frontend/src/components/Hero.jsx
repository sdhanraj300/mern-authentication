import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function Hero() {
  return (
    <Card
      className="flex flex-row justify-center items-center mt-10"
      ccolor="transparent"
      shadow={false}
    >
      <Link to="/login">
        <Button
          className="w-[150px] mr-5"
          ripple={true}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
        className="w-[150px]"
          ripple={true}
        >
          Register
        </Button>
      </Link>
    </Card>
  );
}
