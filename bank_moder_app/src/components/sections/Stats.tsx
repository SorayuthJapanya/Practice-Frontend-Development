import { stats } from "../../constants";
import { NumCount } from "../commons/NumCount";

export const Stats = () => {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-center justify-center mb-6 sm:mb-20">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex flex-row items-center justify-center m-3 gap-2"
        >
          <h4 className="flex items-center font-poppins font-semibold text-3xl xs:text-4xl leading-11 xs:leading-14 text-white">
            {stat.valueFront}
            <NumCount value={stat.value} />
            {stat.valueBack}
          </h4>
          <p className="flex items-center font-poppins font-normal text-sm xs:text-base leading-4 xs:leading-6 text-gradient">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};
