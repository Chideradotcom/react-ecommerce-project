import { Header } from "../components/Header";
import "./Error.css"
export function Error({ cart }) {
  return (
    <>
      <Header cart={cart}/>
      <p className="error-message">Page not found</p>
    </>
  );
}
