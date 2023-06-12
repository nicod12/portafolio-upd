
import { ReactNode, useEffect } from "react";
import { Footer, Header } from "..";

type ChildrenProps = {
  children: ReactNode;
};


const Layout: React.FC<ChildrenProps > = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="content font-mont">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
