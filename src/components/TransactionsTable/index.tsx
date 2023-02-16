import { Container } from "./styles";

export function TransictionsTable() {
  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Dessenvolvimento de website</td>
              <td className="deposit"> R$ 12.000</td>
              <td>Desenvolvimento</td>
              <td>28/02/2023</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Aluguel</td>
              <td className="withraw">- R$ 1.100</td>
              <td>Casa</td>
              <td>17/02/2023</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
