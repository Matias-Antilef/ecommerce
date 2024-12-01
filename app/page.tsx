import GridMain from "@/components/ui/GridMain";
import data from "../public/data.json";
import CardProduct from "@/components/ui/CardProduct";

function HomePage() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <GridMain />
      <div className="flex flex-wrap gap-1 justify-between">
        {data &&
          data.map((res) => (
            <CardProduct
              key={res.id}
              id={res.id}
              title={res.title}
              brand={res.brand}
              price={res.price}
              discount={res.discount}
              rating={res.rating}
              images={res.images}
            />
          ))}
      </div>
    </div>
  );
}
export default HomePage;
