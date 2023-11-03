import { SlArrowUp, SlArrowDown} from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import "./Produto.css";

export default function Produto({produto, atualizaObjeto, removeProduto}){
    const handleNome = (e) => {
        produto.nome = e.target.value;
        atualizaObjeto(produto);
    }

    const handlePreco = (e) => {
        produto.preco = e.target.value;
        atualizaObjeto(produto);
    }

    const handleQuantidade = (e) => {
        produto.quantidade = e.target.value;
        atualizaObjeto(produto);
    }

    const fechar = () => {
        removeProduto(produto);
    }

    const addQuantidade = (e) => {
        e.target.parentNode.childNodes[1].value = produto.quantidade + 1;
        produto.quantidade += 1;
        atualizaObjeto(produto);
    }

    const lessQuantidade = (e) => {
        if(produto.quantidade > 0){
            e.target.parentNode.childNodes[1].value = produto.quantidade - 1;
            produto.quantidade -= 1;
            atualizaObjeto(produto);
        }
    }

    return (
    <div id={produto.id} className="produto">
        <input className="input" type="text" value={produto?.nome} onInput={handleNome} placeholder="nome"/>
        <input className="input" type="number" value={produto?.preco} onInput={handlePreco} placeholder="preço"/>
        <div className="divQuantidade">
            <button className="botao-quantidade aumenta-quantidade" onClick={addQuantidade}>
                <SlArrowUp/>
            </button>
            <input type="text" value={produto?.quantidade} onInput={handleQuantidade} placeholder="quantidade"/>    
            <button className="botao-quantidade diminui-quantidade" onClick={lessQuantidade}>
                <SlArrowDown/>
            </button>
        </div>
        <button className="fechar" onClick={fechar}>
            <AiOutlineClose />
        </button>
    </div>);
}