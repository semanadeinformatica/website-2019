import React from "react"

import Event from "../../components/event"

const coffeBreak = (
    <Event title="Coffee break" start_time="16h40" end_time="17h10" />
  )
  
export default {
    "29 Outubro": [
      <Event title="Check-in" start_time="11h00" end_time="17h00" place="Corredor do anfiteatro nobre"/>,
      <Event
        title="Cerimónia de abertura"
        start_time="14h00"
        end_time="15h00"
        place="B032"
      />,
      <Event title="Inicio da competição de programação" start_time="14h00" />,
      coffeBreak,
    ],
    "1 Novembro": [
      coffeBreak,
      <Event
        title="Cerimónia de encerramento"
        start_time="17h50"
        end_time="18h20"
        place="B032"
      />,
      <Event
        title="Porto de honra"
        start_time="18h20"
        end_time="18h50"
        place="local a anunciar"
      />,
    ],
  }