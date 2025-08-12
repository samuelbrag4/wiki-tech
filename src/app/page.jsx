import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="left-block">
          <h1 className="title">Mini Wiki Tech</h1>
          <h2 className="subtitle">Subtítulo explicativo</h2>
          <p className="paragraph">Este é um parágrafo de exemplo para testar a estrutura da página. Sinta-se à vontade para editar este texto.</p>
          <div className="button-row">
            <button className="btn">Botão 1</button>
            <button className="btn">Botão 2</button>
          </div>
          <div className="images-row">
            <div className="small-images">
              <Image src="/images/favicon.ico" alt="img1" width={48} height={48} className="round-img" />
              <Image src="/images/favicon.ico" alt="img2" width={48} height={48} className="round-img" />
              <Image src="/images/favicon.ico" alt="img3" width={48} height={48} className="round-img" />
              <Image src="/images/favicon.ico" alt="img4" width={48} height={48} className="round-img" />
              <Image src="/images/favicon.ico" alt="img5" width={48} height={48} className="round-img" />
            </div>
            <button className="btn btn-side">Botão ao lado</button>
          </div>
        </div>
        <div className="right-block">
          <Image src="/images/favicon.ico" alt="imagem grande" width={220} height={220} className="big-img" />
          <div className="big-buttons">
            <button className="btn btn-big">Botão Grande 1</button>
            <button className="btn btn-big">Botão Grande 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
