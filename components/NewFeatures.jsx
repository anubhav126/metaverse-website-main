import styles from "../styles";
import Image from 'next/image';

const NewFeatures = ({imgUrl, title, subtitle}) => (
  <div className="flex- flex flex-col max-w-[250px] min-w-[210px] ">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <Image src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain"/></div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">Title {title}</h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
