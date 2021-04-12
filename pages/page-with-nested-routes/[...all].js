import Head from "next/head";
import { useRouter } from "next/router";
import { ActiveLink } from "../../components/active-link";

const SubPageOne = () => <h1>SubPage One</h1>;
const SubPageTwo = () => <h1>SubPage Two</h1>;

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Page with Nested Routes</title>
      </Head>

      <p>
        router.asPath = <code>{router.asPath}</code>
      </p>

      <div style={{ border: "1px solid red", padding: "5px" }}>
        <h3>SubPage</h3>

        {router.asPath === "/page-with-nested-routes/sub-page-one" && (
          <SubPageOne />
        )}
        {router.asPath === "/page-with-nested-routes/sub-page-two" && (
          <SubPageTwo />
        )}
      </div>

      <ul>
        <li>
          <ActiveLink href="/page-with-nested-routes/">index.js </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/page-with-nested-routes/sub-page-one">
            sub-page-one
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/page-with-nested-routes/sub-page-two">
            sub-page-two
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}
