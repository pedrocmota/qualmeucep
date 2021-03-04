import React from 'react'
import './styles.css'
import {IDados} from '../types'

interface ITabela {
  dados: IDados | undefined
}

const Tabela: React.FC<ITabela> = (props) => {
  const dados = props.dados
  const address = dados?.address
  return (
    <div className="tabela_container">
      <div className="row">
        <div className="left">Seu país</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.country == undefined && (
            <div>Não disponível</div>
          )}
          {address?.country != undefined && (
            <div>{address?.country}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="left">Seu estado</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.state == undefined && (
            <div>Não disponível</div>
          )}
          {address?.state != undefined && (
            <div>{address?.state}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="left">Seu município</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.city == undefined && (
            <div>Não disponível</div>
          )}
          {address?.city != undefined && (
            <div>{address?.city}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="left">Seu bairro</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.suburb == undefined && (
            <div>Não disponível</div>
          )}
          {address?.suburb != undefined && (
            <div>{address?.suburb}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="left">Sua rua</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.road == undefined && (
            <div>Não disponível</div>
          )}
          {address?.road != undefined && (
            <div>{address?.road}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="left">Seu CEP</div>
        <div className="right">
          {address == undefined && (
            <div>Carregando...</div>
          )}
          {address != undefined && address?.postcode == undefined && (
            <div>Não disponível</div>
          )}
          {address?.postcode != undefined && (
            <div>{address?.postcode}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tabela