import { useLocation, useNavigate } from "react-router-dom";
import "./SinglePage.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SinglePage = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();
  console.log(item);

  return (
    <div className="Single">
      <div className="flex items-center space-x-[22px] p-5">
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950 ">
          <MdKeyboardArrowLeft
            onClick={() => navigate(-1)}
            className="text-white text-[38px]"
          />
        </span>
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950 ">
          <MdKeyboardArrowRight
            onClick={() => navigate(+1)}
            className="text-white text-[38px]"
          />
        </span>
      </div>
      <div className="flex items-center space-x-[32px] p-5">
        <img className="w-[297px] h-[297px]" src={item.img} alt="image" />
        <div className="text-[#fffffff0]">
          <p className="font-medium uppercase text-[16px] leading-[20px]">
            {item.type}
          </p>
          <p className="font-black text-[90px] leading-[154px]">{item.name}</p>
          <p>{item.uri.name}</p>
          <p className="pt-2">{item.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
