async function getData() {

  let host = process.env.NODE_ENV === 'production' ? 'http://localhost:4280/' : 'http://localhost:4280/'; // This is where the database thing runs
  let res = await fetch(`${host}data-api/rest/Person`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  let text = await res.text();
  return text;
}

export default async function Page() {
  // const data = await getData();
  return (<><h1>Database information</h1></>)
}