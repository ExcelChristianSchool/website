export const CkEditor = ({ CKEditor }: any) => {
  console.log({ CKEditor });
  return (
    <div
      className="min-w-[800px] max-w-[1000px] prose bg-white p-4 rounded border-gray-400 border"
      dangerouslySetInnerHTML={{ __html: CKEditor }}
    />
  );
};
