export default ({ foo, pathname }) => <div>Hello {JSON.stringify({ foo, pathname })}.</div>;
export const getStaticProps = () => {
  console.error("This should not be called");
  return { props: { foo: "bar" } };
};
