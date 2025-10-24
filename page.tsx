import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "600", "500"]});

function Email() {
  return(
    <>
    <div className="Container">
      <p className="Email-input">Enter your email address</p>
      <button className="Subscribe">Subscribe now</button>
      <p className="Email-info">Your email is 100% confidential and won't send you any spam.</p>
    </div>
    </>
  );
}

export default function Home() {
  return (
    <>
    <div className="Heading">
      <h1>Join our newsletter</h1>
    </div>
    <div className="Info">
      <p>
        Keep up with our latest collections, exclusive deals, and special offers!
        We introduce a new collection every week, so stay tuned to snag the hottest items just for you.
      </p>
    </div>
    <Email/>
    </>
  );
}
