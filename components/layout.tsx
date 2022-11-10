import Image from "next/image";
import Navbar from "./shared/navbar";

export default function Layout({children}: any) {
  return (
            <div style={{}}>
                <Navbar/>
                {children}
            </div>
  );
}
