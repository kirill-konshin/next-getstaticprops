export default ({ foo }) => <div>Hello {JSON.stringify({ foo })}.</div>;
export const getStaticProps = () => {
  throw new Error("This should not be called");
  return { props: { foo: "bar" } };
};
