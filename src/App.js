import { Antd } from "./components/Antd";
import "./styles.css";
import "antd/dist/antd.css";
import { InputAntd } from "./components/InputAntd";
import { SelectTag } from "./components/SelectTag";
import { FormAntd } from "./components/FormAntd";
import { TableAntd } from "./components/TableAntd";
import { DatePic } from "./components/DatePic";

export default function App() {
  return (
    <div className="App">
      <Antd />
      <InputAntd />
      <SelectTag />
      <FormAntd />
      <TableAntd />
      <DatePic />
    </div>
  );
}
