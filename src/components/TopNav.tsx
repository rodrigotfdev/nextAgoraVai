
import { Link } from "react-router-dom";

export default function TopMenu() {
  return (
    <div className="menu bg-darkGray text-white text-xl font-semibold flex justify-around items-center uppercase h-9 ">
      <Link to="/" className="hover:rounded-lg hover:opacity-50">
        Home
      </Link>
      <Link to="/videopitch" className="hover:rounded-lg hover:opacity-50">
        Vídeo Pitch
      </Link>
      <Link to="/aboutproject" className="hover:rounded-lg hover:opacity-50">
        Sobre o projeto
      </Link>
    </div>
  );
}
