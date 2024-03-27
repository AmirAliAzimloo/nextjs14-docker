


export default async function Home() {
  return (
    <>
    <div className="h-screen flex justify-center items-center">
      <div>
        in `${process.env.NODE_ENV}` env file is : `${process.env.API_URL}`
      </div>
    </div>
    </>
  );
}
