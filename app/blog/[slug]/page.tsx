export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { default: Component } = await import(`../_content/${slug}.tsx`);

  return <Component />;
}
