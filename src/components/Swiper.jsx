import { useNavigate } from "react-router-dom";
const Swiper = ({ item = [], choosePlay, code = "" }) => {
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    navigate("/single-up", { state: { item, code } });
  };
  return (
    <>
      <div
        onDoubleClick={() => handleDoubleClick()}
        onClick={choosePlay}
        className="card text-white mt-[20px] bg-yellow-300"
      >
        <div className="card2 rounded-[20px]">
          <div className="text-center p-1" key={item.uri.id}>
            <img
              className="w-full rounded-[20px]"
              src={item.img}
              alt="images"
            />
            <span className="p-2">
              <h4>{item.uri.name}</h4>
              <p className="text-[16px]">{item.name}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiper;
