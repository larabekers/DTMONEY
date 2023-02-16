import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransictionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <>
      <Container>
        <Summary />
        <TransictionsTable />
      </Container>
      ;
    </>
  );
}
