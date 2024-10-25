import React from "react";

export default function VideoPitch() {
  return (
    <div className="flex items-center justify-center ">
      <div className=" w-5/6 flex flex-col items-center ">
        <div className="flex flex-col items-center text-center h-screen">
          <h1 className="text-4xl my-24">
            Veja de Perto: Detalhes Técnicos do Nosso Projeto Destacados no
            Vídeo Pitch!
          </h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VrrZCy_-w4U?si=hj9Lk2-wfRkZb8c_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-5/6 h-3/6 rounded-3xl"></iframe>
        </div>
      </div>
    </div>
  );
}

// className="w-5/6 h-3/6 rounded-3xl"
