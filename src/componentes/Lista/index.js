import { useState } from "react"
import Produto from "../Produto";
import { SlPlus } from "react-icons/sl";
import { PiShoppingCartBold } from "react-icons/pi";
import "./Lista.css";

export default function Lista() {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "arroz",
            preco: 3.50,
            quantidade: 3
        },
        {
            id: 2,
            nome: "feijão",
            preco: 4.50,
            quantidade: 3
        },
        {
            id: 3,
            nome: "leite",
            preco: 4.15,
            quantidade: 12
        },
        {
            id: 4,
            nome: "açúcar",
            preco: 2.75,
            quantidade: 2
        },
        {
            id: 5,
            nome: "sal",
            preco: 1.80,
            quantidade: 1
        },
    ]);

    const addProduto = () => {
        setProdutos([...produtos, {
            id: produtos.length,
            nome: "",
            preco: 0.0,
            quantidade: 0
        }]);
    }

    const removeProduto = (produtoARemover) => {
        const novoArray = [...produtos];
        const indice = novoArray.findIndex(produto => produto.id === produtoARemover.id);
        novoArray.splice((indice + 1), 1);
        setProdutos(novoArray);
    }

    const atualizaObjeto = (novoProduto) => {
        const novoArray = [...produtos];
        const indice = novoArray.findIndex(produto => produto.id === novoProduto.id);
        
        if(indice !== -1){
            novoArray[indice + 1] = {
                id: novoProduto.id,
                nome: novoProduto.nome,
                preco: novoProduto.preco,
                quantidade: novoProduto.quantidade
            }

            setProdutos(novoArray);
        }
    }

    return (
        <div className="lista">
            <h3 className="titulo">Lista de compras <PiShoppingCartBold /></h3>
            {produtos.map(produto => <Produto produto={produto} atualizaObjeto={atualizaObjeto} removeProduto={removeProduto} />)}
            <button onClick={addProduto}>
                <SlPlus />
            </button>
            <div className="total">
                <h5>Total:</h5>
                <p>{Math.round(produtos.map(produto => produto.preco * produto.quantidade).reduce((a, b) => a + b) * 100)/100}</p>
            </div>
        </div>
    )
}