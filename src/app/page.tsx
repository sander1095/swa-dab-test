async function getData() {
  let host = process.env.NODE_ENV === 'production' ? 'https://calm-hill-09bbb1f03.3.azurestaticapps.net/' : 'http://localhost:4280/'; // This is where the database thing runs
  let res = await fetch(`${host}data-api/rest/Person`);
  let text = await res.text();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data: ${text}`);
  }

  return text;
}

export default async function Page() {
  const data = await getData();
  return (<><h1>Database information</h1><p>{data}</p></>)
}