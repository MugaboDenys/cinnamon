import Topicscard from "./Topicscard";
import cy from "../public/CY.webp";
import sales from "../public/sales.webp";
import dev from "../public/dev.webp";

const Topics = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-32">
      <h2 className="text-5xl font-bold">Stay in the loop </h2>
      <h2 className="text-5xl font-bold pt-3">on tech topics </h2>
      <div className="pt-10 grid grid-cols-3 gap-10">
        <Topicscard
          image={cy}
          title={"Quality Assurance"}
          author={"Danica Bandur"}
          date={"2022-11-24"}
          time={"6min"}
          topic={"Why Cypress is a great choice for beginners?"}
        />
        <Topicscard
          image={sales}
          title={"Sales"}
          author={"Matija Bermanec & L..."}
          date={"2022-10-13"}
          time={"6min"}
          topic={"Differences in Hiring an Agency vs. Freelancers 2.0"}
        />
        <Topicscard
          image={dev}
          title={"Development"}
          author={"Samantha Holstead"}
          date={"2022-10-03"}
          time={"3min"}
          topic={"Cinnamon Flutter Template Overview"}
        />
      </div>
    </div>
  );
};

export default Topics;
