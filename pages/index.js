export default ({ foo, pathname }) => <div>Hello {JSON.stringify({ foo, pathname })}.</div>;
export const getStaticProps = () => {
  console.log('Index.getStaticProps');
  return { props: { foo: "bar" } };
};
