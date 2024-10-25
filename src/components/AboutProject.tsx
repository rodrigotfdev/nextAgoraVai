import React from "react";
import { projectData } from "../ProjectData";

export default function AboutProject() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl mb-24 mt-24">
        Conheça mais sobre os integrantes do nosso grupo:
      </h2>
      <div className="grid grid-cols-2 gap-10 mb-24">
        {projectData.map((member) => (
          <MemberItem memberObj={member} />
        ))}
      </div>

      <h2 className="text-4xl mb-24 ">
        Recursos utilizados para desenvolvimento do projeto:
      </h2>
      <h3 className="text-2xl px-10">
        Dos principais recursos e conteúdos ministrados ao longo do curso,
        utilizados para desenvolver o projeto, podemos listar:
      </h3>
      <ul className="px-16">
        <li className="list-disc my-8">
          Framework React, possibilitando condensar HTML, CSS e Javascript em
          JSX, unindo marcação de texto, interatividade e estilização no mesmo
          código.
        </li>
        <li className="list-disc my-8">
          Conceitos do React como useState e React Router, responsável por realizar o roteamento entre as páginas e sub-páginas da aplicação.
        </li>
        <li className="list-disc my-8">
          TailwindCSS, um framework de CSS, que possibilitou utilizar classes
          pré-definidas para estilizar o projeto com grande agilidade e
          padronização do código.
        </li>
        <li className="list-disc my-8">
          Conceitos avançados de algoritmos e fluxogramas para lógica nas tomadas de decisões, possibilitando através de estruturas de decisão compostas, inclusas nas funções JavaScript do código, realizar a renderização condicional de itens como Preço ou Informação de produto sem estoque quando necessário.
        </li>
      </ul>
    </div>
  );
}

function MemberItem({ memberObj }) {
  const { memberPhoto, memberName, memberFunction, memberRM } = memberObj;

  return (
    <div className="bg-white flex flex-row w-auto rounded-3xl items-center h-60">
      <div>
        <img
          src={`../${memberPhoto}`}
          alt=""
          className="rounded-full w-36 h-36 mx-8"
        />
      </div>
      <div className="w-52">
        <h2 className="p-4 font-extrabold">{memberName}</h2>
        <p className="p-4 font-extrabold">RM: {memberRM}</p>
        <p className=" p-4 ">{memberFunction}</p>
      </div>
    </div>
  );
}
