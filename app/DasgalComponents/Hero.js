export const Hero = ({ person }) => {
  return (
    <section className="flex justify-center">
      <div className=" w-[1200px] h-[600px] flex justify-around items-center">
        <div className="text-center flex flex-col gap-10">
          <h1 className="font-bold text-[32px]">
            {" "}
            Намайг {person.firstName} гэдэг👋{" "}
          </h1>
          <p>
            Би web Designer-аар ажилладаг. Одоо Fullstack developer-оор pinecone
            academy д сурч байгаа.
          </p>
        </div>
      </div>
    </section>
  );
};
