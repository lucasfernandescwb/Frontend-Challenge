import { Outlet } from "react-router-dom";
import Header from "./Header";

function RootLayout() {
  return (
    <main>
      <Header />
      <section className="top-[-4rem] relative">
        <Outlet />
      </section>
    </main>
  );
}

export default RootLayout;
