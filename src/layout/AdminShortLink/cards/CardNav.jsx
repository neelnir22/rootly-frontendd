import { Button } from "@/components/ui/button";

function CardNav() {
  return (
    <nav className="flex justify-between h-20">
      <ul className="flex-col m-2 justify-center items-center">
        <li className="text-2xl ">Shorten, share and track your links</li>
        <li>Free, fast and simple link shortening with tr.ee by Linktree</li>
      </ul>
      <ul className="flex justify-center items-center">
        <Button>Shorten Link</Button>
      </ul>
    </nav>
  );
}

export default CardNav;
