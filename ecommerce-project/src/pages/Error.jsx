import { Header } from "../components/Header";
import "./Error.css"
export function Error() {
  return (
    <>
      <Header />
      <p className="error-message">Page not found</p>
    </>
  );
}
