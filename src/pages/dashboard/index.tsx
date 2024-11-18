import { Categories } from "../../components/features/dashboardComponents/Categories"
import { Oferts } from "../../components/features/dashboardComponents/Oferts"
import { Span } from "../../components/features/dashboardComponents/Span"
import { MainLayout } from "../../components/layout/MainLayout"

export const Dashboard = () => {
  return (
    <MainLayout>
      <section className="px-10 pt-24">
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
    </MainLayout>
  )
}
