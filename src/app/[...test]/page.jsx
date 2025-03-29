export default async function Test({ params }) {
  let pr = await params
  await console.log(pr)

  return (
      <>{ decodeURIComponent(pr.test) }</>
  );
}
