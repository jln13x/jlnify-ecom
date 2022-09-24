import { Button } from "@mantine/core";
import { useCounter, useViewportSize } from "@mantine/hooks";

export default function Docs() {
  const [foo, setFoo] = useCounter();
  const { width } = useViewportSize();
  return (
    <div>
      <h1>Docs</h1>
      {foo}
      {width}
      <Button onClick={setFoo.increment} />
    </div>
  );
}
