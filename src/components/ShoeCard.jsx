const ShoeCard = ({ index, imageURL, bigShoeImg, setBigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURL) {
      setBigShoeImg(imageURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 select-none">
        <img
          src={imageURL}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
