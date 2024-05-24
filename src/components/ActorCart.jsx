import { baseImgURL } from "../constants";

const ActorCart = ({ actor }) => {
  return (
    <div className="w-[160px]">
      <div>
        <img
          className=" h-44 rounded"
          src={baseImgURL + actor.profile_path}
          alt="photo"
        />
        <h2>{actor.original_name}</h2>
        <h2 className="line-clamp-1">{actor.character}</h2>
      </div>
    </div>
  );
};

export default ActorCart;
