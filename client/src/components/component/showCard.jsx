function ShowCard({ deleteTask, title, status, id }) {
  return (
    <div className="w-4/5 flex justify-between items-center px-3 rounded-lg border">
      <p className="p-3 font-bold text-lg capitalize w-3/5">{title}</p>
      {/* {status == "pending" ? (
        <p className="p-3 font-semibold text-lg text-red-700">Pending</p>
      ) : (
        <p className="p-3 font-semibold text-lg text-green-700">Completed</p>
      )} */}
      <button
        className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded cursor-pointer text-white"
        onClick={() => {
          deleteTask(id);
        }}
      >
        <i class="ri-delete-bin-5-line"></i>
      </button>
    </div>
  );
}

export default ShowCard;
