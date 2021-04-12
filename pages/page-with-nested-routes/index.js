import Head from "next/head";
import { ActiveLink } from "../../components/active-link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Page 4</title>
      </Head>

      <p>
        router.asPath = <code>{router.asPath}</code>
      </p>

      <ul>
        <li>
          <ActiveLink href="/page-with-nested-routes">index.js </ActiveLink>
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
