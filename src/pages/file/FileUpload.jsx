import FileInput from "../../components/file/FileInput";

export default function FileUpload() {

  return (
    <section className="h-full">
      <p className="text-2xl text-left font-bold pl-4 pt-4 pb-4 border-b border-gray-300">
        파일 업로드
      </p>
      <div className="flex flex-col h-full my-auto justify-center items-center text-center">
        <FileInput />
      </div>
    </section>
  );
}
