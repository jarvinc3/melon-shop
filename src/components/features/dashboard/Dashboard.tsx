import { Categories } from "./homeComponents/Categories";
import { Oferts } from "./homeComponents/Oferts";
import { Span } from "./homeComponents/Span";


export const DashboardComponent = () => {
  return (
    <section className="flex flex-col w-full h-full px-10 pt-8 md:px-20 md:pt-32">
      <section>
        <Categories />
      </section>
      <section>
        <Oferts />
      </section>
      <section>
        <Span />
      </section>
    </section>
  );
}
