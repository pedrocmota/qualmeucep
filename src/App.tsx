import React, {useState, useEffect, memo} from 'react'
import axios from 'axios'
import Tabela from './tabela/Tabela'
import {IDados} from './types'
import {ReactComponent as AppIcon} from './icone.svg'
import './styles.css'
import {Console} from 'console'

const App: React.FC = () => {
  const [status, setStatus] = useState(1)
  const [dados, setDados] = useState<IDados>()
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Seu navegador não permite isso')
      setStatus(0)
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toString()
        const longitude = position.coords.longitude.toString()
        loadingInfo(latitude, longitude)
      }, () => {
        setStatus(0)
      })
    }
  }, [])
  const loadingInfo = (lat: string, lon: string) => {
    axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`).then((data) => {
      setDados(data.data)
      setStatus(2)
    }).catch(() => {
      setStatus(0)
    })
  }
  return (
    <div className="main">
      <header>
        <AppIcon width={70} height={70} />
        <h1 className="titulo">Qual o meu CEP?</h1>
      </header>
      <main>
        {status == 0 && (
          <div className="inside">
            <div className="alerta-container">
              <h2 className="alerta">O navegador não permitiu a busca. Aceite-a!</h2>
            </div>
          </div>
        )}
        {status == 1 && (
          <div className="inside">
            <div className="alerta-container">
              <h2 className="alerta">Aceite o pedido de localização do seu navegador</h2>
            </div>
          </div>
        )}
        {status == 2 && (
          <div className="inside">
            <div className="container">
              <Tabela dados={dados} />
            </div>
            <div className="bottom">
              {dados?.lat != undefined && dados?.lon && (
                <iframe src={`
                https://www.openstreetmap.org/export/embed.html?bbox=
                ${dados?.lon}%2C${dados?.lat}%2C${dados?.lon}%2C${dados?.lat}&marker=${dados?.lat}%2C${dados?.lon}
                `} />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default memo(App)