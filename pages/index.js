import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import web1 from "../public/alura-portfolio.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import deved from "../public/eu.jpeg";
import web3 from "../public/form.png";
import web4 from "../public/forms-pesquisa-academica.png";
import web2 from "../public/tribute_page.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Desenvolvido por Pedro Andrade</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Pedro Andrade
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor de Design.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer prestando serviços de programação e design de conteúdo
              especifico.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Serviços e outros</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde o início da minha jornada como designer e desenvolvedor freelancer, 
              realizei trabalhos remotos para
              <span className="text-teal-500"> faculdade </span>
              consultado pelo <span className="text-teal-500">professor </span>
              com colaboração de pessoas talentosas para criar produtos digitais para uso comercial e proprio.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Ofereço uma ampla gama de serviços, incluindo design de marca, programação e ensino.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Otimos Designs
              </h3>
              <p className="py-2">
                Criando designs elegantes adequados às suas necessidades seguindo a teoria básica do design.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Codifique o projeto dos seus sonhos
              </h3>
              <p className="py-2">
                Você tem uma ideia para o seu próximo grande site? Vamos tornar isso realidade.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulta</h3>
              <p className="py-2">
                Você está interessado em feedback para seu projeto atual? Posso lhe dar dicas e truques para subir de nível.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Aqui estão imagens de alguns dos meus projetos feitos para a 
              <span className="text-teal-500"> universidade </span>
              com o monitoramento do <span className="text-teal-500">professor, </span>
              junto a colaboração de pessoas talentosas e esforçadas.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Como podem ver, ofereço uma ampla variedade de serviços, incluindo design de marca, programação e ensino.
            </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
