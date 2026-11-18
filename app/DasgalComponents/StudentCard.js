export const StudentCard = ({ student }) => {
  console.log(student);
  return (
    <div className="bg-blue-400 flex flex-col justify-center items-center mt-[20px] gap-1">
      <h1 className="font-bold text-[24px]">{student.firstName}</h1>
      <p>Gender:{student.gender}</p>
      <p>Age: {student.age}</p>
      <p>Hobbies</p>
    </div>
  );
};
