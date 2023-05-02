import { useRouter } from "next/router";

export default function PrivateRoute({ user, children }) {
  const router = useRouter();

  if (!user) {
    // If the user is not authenticated, redirect to login page
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}

export async function getServerSideProps(context) {
  const user = await authenticateUser(context.req);

  if (!user) {
    // If the user is not authenticated, redirect to login page
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }

  return {
    props: {
      user,
    },
  };
}
