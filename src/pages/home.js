import Sets from "../components/sets";

export const cards = [
  {
    id: 1,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 2,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 3,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 4,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 5,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 6,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
  {
    id: 7,
    frontHTML: "<h6> hi</h6>",
    backHTML: "<h6> hi</h6>",
  },
];

export const sets = [
  {
    name: "1",
    cards: cards,
  },
  {
    name: "2",
    cards: cards,
  },
  {
    name: "3",
    cards: cards,
  },
  {
    name: "1",
    cards: cards,
  },
  {
    name: "1",
    cards: cards,
  },
];

const Home = () => {
  return (
    <div className="p-2">
      <Sets sets={sets} />
    </div>
  );
};
export default Home;
