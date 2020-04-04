export default ({ foo }) => <div>Hello {JSON.stringify({ foo })}.</div>;
export const getStaticProps = () => {
  console.error("This should not be called");
  return { props: { foo: "bar" } };
};
